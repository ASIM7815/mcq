// Local Testing Configuration
// This provides a mock database for testing when Neon connection fails
// Use this for local development, then switch to real Neon for production

class LocalMockDB {
    constructor() {
        this.isInitialized = true;
        this.useMockData = true;
        
        // Mock students data for testing
        this.mockStudents = [
            {
                id: 1,
                roll_number: '160524733210',
                unique_code: '123',
                is_active: true,
                created_at: new Date().toISOString()
            }
        ];
        
        this.mockResults = [];
        
        console.log('🧪 Mock Database initialized with test student:', this.mockStudents[0]);
    }

    // Mock query method
    async query(sql, params = []) {
        console.log('Mock query:', sql);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Check if this is a SELECT query
        if (sql.toUpperCase().includes('SELECT')) {
            // Parse basic SELECT queries
            if (sql.includes('students')) {
                return { data: this.mockStudents, error: null };
            }
            if (sql.includes('exam_results')) {
                return { data: this.mockResults, error: null };
            }
        }
        
        // For INSERT into exam_results
        if (sql.toUpperCase().includes('INSERT INTO') && sql.includes('exam_results')) {
            const mockResult = { id: this.mockResults.length + 1, created_at: new Date().toISOString() };
            this.mockResults.push(mockResult);
            return { data: [mockResult], error: null };
        }
        
        return { data: [], error: null };
    }

    // Mock from() method
    from(table) {
        return new MockQueryBuilder(this, table);
    }
}

class MockQueryBuilder {
    constructor(db, table) {
        this.db = db;
        this.table = table;
        this.whereConditions = [];
        this.singleResult = false;
    }

    select(columns = '*') {
        this.selectColumns = columns;
        return this;
    }

    eq(column, value) {
        this.whereConditions.push({ column, value });
        return this;
    }

    single() {
        this.singleResult = true;
        return this;
    }

    async execute() {
        let data;
        
        if (this.table === 'students') {
            data = this.db.mockStudents.filter(student => {
                return this.whereConditions.every(condition => {
                    return student[condition.column] == condition.value;
                });
            });
        } else if (this.table.includes('exam_results')) {
            data = this.db.mockResults;
        } else {
            data = [];
        }
        
        if (this.singleResult) {
            if (data.length === 0) {
                return { data: null, error: { code: 'PGRST116' } };
            }
            return { data: data[0], error: null };
        }
        
        return { data, error: null };
    }

    async insert(dataArray) {
        console.log('Mock insert:', this.table, dataArray);
        
        if (this.table.includes('exam_results')) {
            dataArray.forEach(item => {
                this.db.mockResults.push({
                    ...item,
                    id: this.db.mockResults.length + 1,
                    created_at: new Date().toISOString()
                });
            });
        }
        
        return { data: dataArray, error: null };
    }

    async update(data) {
        console.log('Mock update:', this.table, data);
        return { data: [data], error: null };
    }

    async upsert(data, options = {}) {
        console.log('Mock upsert:', this.table, data);
        return { data: [data], error: null };
    }
}

// Initialize with mock database for local testing
const neonClient = new LocalMockDB();

// Detect exam type (same as before)
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

// Validate credentials (same logic as neon-config.js)
async function validateCredentials(rollNumber, uniqueCode) {
    console.log('🔍 Validating credentials:', rollNumber, uniqueCode);
    
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

        console.log('✅ ============================================');
        console.log('✅ AUTHENTICATION SUCCESSFUL (LOCAL MOCK)');
        console.log('✅ ============================================');
        console.log('📊 Database: Local Mock Database (Testing Mode)');
        console.log('👤 Student:', result.data);
        console.log('🎓 Exam Type:', examType.type);
        console.log('✅ Credentials verified in local mock!');
        console.log('💡 For real database: Deploy to Vercel');
        console.log('============================================');
        return { valid: true, error: null, student: result.data, examType: examType.type };
    } catch (err) {
        console.error('Exception validating credentials:', err);
        return { valid: false, error: 'Network error. Please check your internet connection and try again.' };
    }
}

// Save exam results
async function saveExamResults(rollNumber, correctAnswers, wrongAnswers, totalQuestions, percentage, userAnswers, shuffledQuestions) {
    console.log('💾 Saving exam results for:', rollNumber);
    
    if (!neonClient.isInitialized) {
        console.warn('Database not initialized - results will not be saved');
        return { success: true, warning: 'Results not saved - database not configured' };
    }
    
    const examType = window.currentExamType || detectExamType(window.currentUniqueCode);
    if (!examType) {
        console.error('Exam type not detected');
        return { success: true, warning: 'Results not saved - exam type unknown' };
    }
    
    try {
        const resultData = {
            roll_number: rollNumber,
            correct_answers: correctAnswers,
            wrong_answers: wrongAnswers,
            total_questions: totalQuestions,
            percentage: percentage,
            user_answers: userAnswers,
            violation_detected: false,
            violation_type: null,
            additional_data: {
                score: `${correctAnswers}/${totalQuestions}`,
                exam_date: new Date().toISOString(),
                exam_completed: true
            }
        };
        
        const { data, error } = await neonClient
            .from(examType.resultsTable)
            .insert([resultData]);

        if (error) {
            console.error('Error saving results:', error);
            return { success: true, warning: 'Results could not be saved to database', error: error };
        }
        
        console.log('✅ Results saved successfully!', data);
        return { success: true, data };
    } catch (err) {
        console.error('Exception saving results:', err);
        return { success: true, warning: 'Results could not be saved', error: err.message };
    }
}

// Other required functions (stubs for compatibility)
async function checkExamStatus(rollNumber, uniqueCode) {
    return { alreadyTaken: false };
}

function generateDeviceFingerprint() {
    return 'mock-fingerprint-' + Date.now();
}

function getBrowserInfo() {
    return { userAgent: navigator.userAgent, platform: navigator.platform };
}

async function checkActiveSession(rollNumber, uniqueCode) {
    return { hasActiveSession: false };
}

async function createActiveSession(rollNumber, uniqueCode) {
    return { success: true };
}

async function deactivateSession(rollNumber, uniqueCode) {
    return { success: true };
}

// Export
window.neonClient = neonClient;

console.log('🧪 Local Mock Database loaded. Test credentials:');
console.log('   Roll Number: 160524733210');
console.log('   Unique Code: 123');
