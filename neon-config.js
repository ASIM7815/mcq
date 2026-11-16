// Neon Database Configuration
// This file replaces supabase-config.js for Neon connectivity

class NeonDB {
    constructor() {
        // Use serverless function API for database queries
        // This works in production (Vercel) and avoids CORS issues
        this.apiUrl = '/api/db-query';
        this.isInitialized = true;
    }

    // Execute SQL query via serverless function
    async query(sql, params = []) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: sql,
                    params: params
                })
            });

            if (!response.ok) {
                const error = await response.text();
                throw new Error(`Database query failed: ${error}`);
            }

            const result = await response.json();
            
            if (!result.success) {
                throw new Error(result.error);
            }
            
            return { data: result.rows, error: null };
        } catch (error) {
            console.error('Database query error:', error);
            return { data: null, error: error.message };
        }
    }

    // Helper method to select from a table
    from(table) {
        return new NeonQueryBuilder(this, table);
    }

    // Execute RPC (stored procedure) call
    async rpc(functionName, params = {}) {
        try {
            // Convert params object to PostgreSQL function call
            const paramsList = Object.entries(params)
                .map(([key, value]) => {
                    if (typeof value === 'string') {
                        return `'${value.replace(/'/g, "''")}'`;
                    } else if (typeof value === 'object') {
                        return `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`;
                    } else if (value === null) {
                        return 'NULL';
                    }
                    return value;
                })
                .join(', ');

            const sql = `SELECT * FROM ${functionName}(${paramsList})`;
            return await this.query(sql);
        } catch (error) {
            console.error('RPC error:', error);
            return { data: null, error: error.message };
        }
    }
}

class NeonQueryBuilder {
    constructor(db, table) {
        this.db = db;
        this.table = table;
        this.selectColumns = '*';
        this.whereConditions = [];
        this.limitValue = null;
        this.singleResult = false;
    }

    select(columns = '*') {
        this.selectColumns = columns;
        return this;
    }

    eq(column, value) {
        const escapedValue = typeof value === 'string' 
            ? `'${value.replace(/'/g, "''")}'` 
            : value;
        this.whereConditions.push(`${column} = ${escapedValue}`);
        return this;
    }

    limit(count) {
        this.limitValue = count;
        return this;
    }

    single() {
        this.singleResult = true;
        this.limitValue = 1;
        return this;
    }

    async execute() {
        let sql = `SELECT ${this.selectColumns} FROM ${this.table}`;
        
        if (this.whereConditions.length > 0) {
            sql += ` WHERE ${this.whereConditions.join(' AND ')}`;
        }
        
        if (this.limitValue !== null) {
            sql += ` LIMIT ${this.limitValue}`;
        }

        const result = await this.db.query(sql);
        
        if (this.singleResult && result.data && result.data.length > 0) {
            return { data: result.data[0], error: result.error };
        }
        
        if (this.singleResult && result.data && result.data.length === 0) {
            return { data: null, error: { code: 'PGRST116' } };
        }
        
        return result;
    }

    // Insert data into table
    async insert(data) {
        const columns = Object.keys(data[0]).join(', ');
        const values = data.map(row => {
            const vals = Object.values(row).map(val => {
                if (typeof val === 'string') {
                    return `'${val.replace(/'/g, "''")}'`;
                } else if (typeof val === 'object' && val !== null) {
                    return `'${JSON.stringify(val).replace(/'/g, "''")}'::jsonb`;
                } else if (val === null) {
                    return 'NULL';
                }
                return val;
            }).join(', ');
            return `(${vals})`;
        }).join(', ');

        const sql = `INSERT INTO ${this.table} (${columns}) VALUES ${values}`;
        return await this.db.query(sql);
    }

    // Update data in table
    async update(data) {
        const setClause = Object.entries(data).map(([key, value]) => {
            const escapedValue = typeof value === 'string' 
                ? `'${value.replace(/'/g, "''")}'` 
                : (typeof value === 'object' && value !== null)
                    ? `'${JSON.stringify(value).replace(/'/g, "''")}'::jsonb`
                    : value;
            return `${key} = ${escapedValue}`;
        }).join(', ');

        let sql = `UPDATE ${this.table} SET ${setClause}`;
        
        if (this.whereConditions.length > 0) {
            sql += ` WHERE ${this.whereConditions.join(' AND ')}`;
        }

        return await this.db.query(sql);
    }

    // Upsert (insert or update)
    async upsert(data, options = {}) {
        const columns = Object.keys(data).join(', ');
        const values = Object.values(data).map(val => {
            if (typeof val === 'string') {
                return `'${val.replace(/'/g, "''")}'`;
            } else if (typeof val === 'object' && val !== null) {
                return `'${JSON.stringify(val).replace(/'/g, "''")}'::jsonb`;
            } else if (val === null) {
                return 'NULL';
            }
            return val;
        }).join(', ');

        const conflictColumns = options.onConflict || 'roll_number';
        const updateColumns = Object.keys(data)
            .filter(col => col !== conflictColumns)
            .map(col => `${col} = EXCLUDED.${col}`)
            .join(', ');

        const sql = `
            INSERT INTO ${this.table} (${columns}) 
            VALUES (${values})
            ON CONFLICT (${conflictColumns}) 
            DO UPDATE SET ${updateColumns}
        `;

        return await this.db.query(sql);
    }
}

// Initialize Neon client
const neonClient = new NeonDB();

// Detect exam type based on unique code (same as before)
function detectExamType(uniqueCode) {
    const examTypes = {
        '123': { type: 'TEST', studentsTable: 'students', resultsTable: 'exam_results' },
        'fsmba2026': { type: 'FSMBA', studentsTable: 'students', resultsTable: 'exam_results' },
        'fsmba03': { type: 'MBA_REGULAR', studentsTable: 'mba_regular_students', resultsTable: 'mba_regular_exam_results' },
        'fsmba100': { type: 'STOCK_MARKET', studentsTable: 'students', resultsTable: 'exam_results' },
        'fscse01': { type: 'CSE', studentsTable: 'cse_students', resultsTable: 'cse_exam_results' },
        'fsece': { type: 'ECE', studentsTable: 'ece_students', resultsTable: 'ece_exam_results' },
        'fsaids': { type: 'AIDS', studentsTable: 'aids_students', resultsTable: 'aids_exam_results' },
        'fs4cse02': { type: 'THIRDCSE', studentsTable: 'thirdcse_students', resultsTable: 'thirdcse_exam_results' },
        'fs4it02': { type: 'THIRDIT', studentsTable: 'thirditrollno', resultsTable: 'thirdit_exam_results', sessionsTable: 'thirdit_active_sessions' },
        'fs1cse': { type: 'FS1CSE', studentsTable: 'fs1cse_students', resultsTable: 'fs1cse_exam_results', sessionsTable: 'fs1cse_active_sessions' },
        'fs1aids': { type: 'FS1AIDS', studentsTable: 'fs1aids_students', resultsTable: 'fs1aids_exam_results', sessionsTable: 'fs1aids_active_sessions' },
        'fsit': { type: 'FS1IT', studentsTable: 'fs1it_students', resultsTable: 'fs1it_exam_results', sessionsTable: 'fs1it_active_sessions' },
        'fscivil': { type: 'FS1CIVIL', studentsTable: 'fs1civil_students', resultsTable: 'fs1civil_exam_results', sessionsTable: 'fs1civil_active_sessions' },
        'fcse': { type: 'FCSE', studentsTable: 'fcse_students', resultsTable: 'fcse_exam_results' },
        'faids': { type: 'FAIDS', studentsTable: 'faids_students', resultsTable: 'faids_exam_results' },
        'fit': { type: 'FIT', studentsTable: 'fit_students', resultsTable: 'fit_exam_results' },
        'fcivil': { type: 'FCIVIL', studentsTable: 'fcivil_students', resultsTable: 'fcivil_exam_results' },
        'ffcse': { type: 'FFCSE', studentsTable: 'ffcse_students', resultsTable: 'ffcse_exam_results' },
        'ffit': { type: 'FFIT', studentsTable: 'ffit_students', resultsTable: 'ffit_exam_results' },
        'ffaids': { type: 'FFAIDS', studentsTable: 'ffaids_students', resultsTable: 'ffaids_exam_results' },
        'ffece': { type: 'FFECE', studentsTable: 'ffece_students', resultsTable: 'ffece_exam_results' },
        'fffcse': { type: 'FFFCSE', studentsTable: 'fffcse_students', resultsTable: 'fffcse_exam_results' },
        'fffece': { type: 'FFFECE', studentsTable: 'fffece_students', resultsTable: 'fffece_exam_results' },
        'fffaids': { type: 'FFFAIDS', studentsTable: 'fffaids_students', resultsTable: 'fffaids_exam_results' },
        'fffit': { type: 'FFFIT', studentsTable: 'fffit_students', resultsTable: 'fffit_exam_results' },
        'fffcivil': { type: 'FFFCIVIL', studentsTable: 'fffcivil_students', resultsTable: 'fffcivil_exam_results' },
        'fs4cse': { type: 'FS4CSE', studentsTable: 'fs4cse_students', resultsTable: 'fs4cse_exam_results' },
        'fs4it': { type: 'FS4IT', studentsTable: 'fs4it_students', resultsTable: 'fs4it_exam_results' },
        'fece': { type: 'FECE', studentsTable: 'fece_students', resultsTable: 'fece_exam_results' }
    };
    
    return examTypes[uniqueCode] || null;
}

// Validate student credentials against Neon database
async function validateCredentials(rollNumber, uniqueCode) {
    if (!neonClient.isInitialized) {
        return {
            valid: false,
            error: 'Database connection not available. Please try again later.'
        };
    }

    const examType = detectExamType(uniqueCode);
    if (!examType) {
        return {
            valid: false,
            error: 'Invalid unique code. Please check your credentials.'
        };
    }

    try {
        const result = await neonClient
            .from(examType.studentsTable)
            .select('*')
            .eq('roll_number', rollNumber)
            .eq('unique_code', uniqueCode)
            .eq('is_active', true)
            .single()
            .execute();

        if (result.error) {
            if (result.error.code === 'PGRST116') {
                return {
                    valid: false,
                    error: 'Invalid roll number or unique code. Please check your credentials.'
                };
            }
            console.error('Error validating credentials:', result.error);
            return {
                valid: false,
                error: 'Authentication error. Please check your internet connection and try again.'
            };
        }

        return { valid: true, error: null, student: result.data, examType: examType.type };
    } catch (err) {
        console.error('Exception validating credentials:', err);
        return { valid: false, error: 'Network error. Please check your internet connection and try again.' };
    }
}

// Save exam results to Neon database
async function saveExamResults(rollNumber, correctAnswers, wrongAnswers, totalQuestions, percentage, userAnswers, shuffledQuestions) {
    if (!neonClient.isInitialized) {
        console.warn('Neon client not initialized - results will not be saved');
        return { success: true, warning: 'Results not saved - database not configured' };
    }
    
    const examType = window.currentExamType || detectExamType(window.currentUniqueCode);
    if (!examType) {
        console.error('Exam type not detected');
        return { success: true, warning: 'Results not saved - exam type unknown' };
    }
    
    const violationDetected = shuffledQuestions.violationDetected || false;
    const violationType = shuffledQuestions.violation || null;
    
    try {
        const resultData = {
            roll_number: rollNumber,
            correct_answers: correctAnswers,
            wrong_answers: wrongAnswers,
            total_questions: totalQuestions,
            percentage: percentage,
            user_answers: userAnswers,
            violation_detected: violationDetected,
            violation_type: violationType,
            additional_data: {
                score: `${correctAnswers}/${totalQuestions}`,
                shuffled_questions: shuffledQuestions,
                exam_date: new Date().toISOString(),
                exam_completed: true
            }
        };
        
        if (examType.type === 'THIRDIT' || examType.type === 'FS1CSE' || examType.type === 'FS1AIDS' || examType.type === 'FS1IT' || examType.type === 'FS1CIVIL') {
            if (typeof generateDeviceFingerprint !== 'undefined' && typeof getBrowserInfo !== 'undefined') {
                resultData.device_fingerprint = generateDeviceFingerprint();
                resultData.browser_info = getBrowserInfo();
                resultData.exam_started_at = window.examStartTime || new Date().toISOString();
                resultData.exam_completed_at = new Date().toISOString();
            }
        }
        
        const { data, error } = await neonClient
            .from(examType.resultsTable)
            .insert([resultData]);

        if (error) {
            console.error('Error saving results to Neon:', error);
            return { success: true, warning: 'Results could not be saved to database', error: error };
        }
        
        if (examType.type === 'THIRDIT' || examType.type === 'FS1CSE' || examType.type === 'FS1AIDS' || examType.type === 'FS1IT' || examType.type === 'FS1CIVIL') {
            if (typeof deactivateSession !== 'undefined') {
                await deactivateSession(rollNumber, window.currentUniqueCode);
            }
        }

        return { success: true, data };
    } catch (err) {
        console.error('Exception saving results:', err);
        return { success: true, warning: 'Results could not be saved', error: err.message };
    }
}

// Check if student has already taken the exam
async function checkExamStatus(rollNumber, uniqueCode) {
    if (!neonClient.isInitialized) {
        console.error('Neon client not initialized');
        return { alreadyTaken: false, error: 'Database connection not available' };
    }
    
    const examType = detectExamType(uniqueCode);
    if (!examType) {
        console.error('Exam type not detected');
        return { alreadyTaken: false, error: 'Exam type not identified' };
    }
    
    try {
        const { data, error } = await neonClient
            .from(examType.resultsTable)
            .select('*')
            .eq('roll_number', rollNumber)
            .single()
            .execute();

        if (error && error.code !== 'PGRST116') {
            console.error('Error checking exam status:', error);
            return { alreadyTaken: false, error: error };
        }

        return { alreadyTaken: !!data, data };
    } catch (err) {
        console.error('Exception checking exam status:', err);
        return { alreadyTaken: false, error: err.message };
    }
}

// Generate device fingerprint
function generateDeviceFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Device', 2, 2);
    const canvasData = canvas.toDataURL();
    
    const fingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen: `${screen.width}x${screen.height}x${screen.colorDepth}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        canvas: canvasData.substring(0, 100),
        memory: navigator.deviceMemory || 'unknown',
        hardwareConcurrency: navigator.hardwareConcurrency || 'unknown'
    };
    
    const fingerprintString = JSON.stringify(fingerprint);
    let hash = 0;
    for (let i = 0; i < fingerprintString.length; i++) {
        const char = fingerprintString.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    
    return Math.abs(hash).toString(36);
}

// Get browser info
function getBrowserInfo() {
    return {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen: {
            width: screen.width,
            height: screen.height,
            colorDepth: screen.colorDepth
        },
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        online: navigator.onLine,
        cookieEnabled: navigator.cookieEnabled,
        memory: navigator.deviceMemory || 'unknown',
        cores: navigator.hardwareConcurrency || 'unknown'
    };
}

// Check active session
async function checkActiveSession(rollNumber, uniqueCode) {
    if (!neonClient.isInitialized) {
        return { hasActiveSession: false };
    }
    
    const examType = detectExamType(uniqueCode);
    if (!examType || !examType.sessionsTable) {
        return { hasActiveSession: false };
    }
    
    try {
        const { data, error } = await neonClient
            .from(examType.sessionsTable)
            .select('*')
            .eq('roll_number', rollNumber)
            .eq('is_active', true)
            .execute();

        if (error || !data || data.length === 0) {
            return { hasActiveSession: false };
        }

        return { 
            hasActiveSession: true, 
            sessionData: data[0],
            deviceFingerprint: data[0].device_fingerprint
        };
    } catch (err) {
        return { hasActiveSession: false };
    }
}

// Create active session
async function createActiveSession(rollNumber, uniqueCode) {
    if (!neonClient.isInitialized) {
        return { success: false };
    }
    
    const examType = detectExamType(uniqueCode);
    if (!examType || !examType.sessionsTable) {
        return { success: true };
    }
    
    try {
        const deviceFingerprint = generateDeviceFingerprint();
        const browserInfo = getBrowserInfo();
        
        const sessionData = {
            roll_number: rollNumber,
            device_fingerprint: deviceFingerprint,
            browser_info: browserInfo,
            session_started_at: new Date().toISOString(),
            last_activity_at: new Date().toISOString(),
            is_active: true
        };
        
        const { data, error } = await neonClient
            .from(examType.sessionsTable)
            .upsert(sessionData, { onConflict: 'roll_number' });

        if (error) {
            console.error('Error creating session:', error);
            return { success: false, error };
        }

        return { success: true, deviceFingerprint, data };
    } catch (err) {
        return { success: false, error: err.message };
    }
}

// Deactivate session
async function deactivateSession(rollNumber, uniqueCode) {
    if (!neonClient.isInitialized) {
        return { success: false };
    }
    
    const examType = detectExamType(uniqueCode);
    if (!examType || !examType.sessionsTable) {
        return { success: true };
    }
    
    try {
        const { data, error } = await neonClient
            .from(examType.sessionsTable)
            .eq('roll_number', rollNumber)
            .update({ is_active: false });

        if (error) {
            return { success: false, error };
        }

        return { success: true, data };
    } catch (err) {
        return { success: false, error: err.message };
    }
}

// Verification system - mark student as verified when they login
async function markStudentVerified(rollNumber, uniqueCode) {
    if (!neonClient.isInitialized) {
        console.log('❌ Database not initialized for verification');
        return { success: false, error: 'Database not available' };
    }
    
    try {
        console.log('🔍 Checking verification for:', rollNumber, uniqueCode);
        
        // First check if credentials match in verification table
        const checkResult = await neonClient
            .from('student_verification')
            .select('*')
            .eq('roll_number', rollNumber)
            .eq('unique_code', uniqueCode)
            .single()
            .execute();
        
        if (checkResult.error) {
            console.log('⚠️ Verification table check failed:', checkResult.error);
            // Don't fail - verification table might not exist yet
            return { success: false, error: 'Verification table not found', silent: true };
        }
        
        if (!checkResult.data) {
            console.log('⚠️ Credentials not found in verification table');
            return { success: false, error: 'Credentials not in verification table', silent: true };
        }
        
        console.log('✅ Found in verification table, updating...');
        
        // Update to mark as verified
        const updateSql = `
            UPDATE student_verification 
            SET verified_text = 'Verified', 
                verified_at = NOW() 
            WHERE roll_number = '${rollNumber.replace(/'/g, "''")}' 
            AND unique_code = '${uniqueCode.replace(/'/g, "''")}'
        `;
        
        const result = await neonClient.query(updateSql);
        
        if (result.error) {
            console.log('❌ Update failed:', result.error);
            return { success: false, error: result.error };
        }
        
        console.log('✅ VERIFICATION MARKED IN DATABASE!');
        console.log('✅ Roll:', rollNumber, '| Status: Verified');
        
        return { success: true, verified: true };
    } catch (err) {
        console.error('❌ Error marking student verified:', err);
        return { success: false, error: err.message, silent: true };
    }
}

// Export for use in other scripts
window.neonClient = neonClient;
window.markStudentVerified = markStudentVerified;
