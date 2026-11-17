// Frontend Database Client
// Simple wrapper for making API calls to backend

class DBClient {
    constructor() {
        this.apiUrl = '/api/db-query';
        this.baseUrl = window.location.origin;
    }

    // Execute any SQL query
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

    // Validate student credentials
    async validateStudent(rollNumber, uniqueCode, tableName) {
        try {
            const response = await fetch('/api/validate-student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rollNumber,
                    uniqueCode,
                    tableName
                })
            });

            const result = await response.json();
            
            if (result.success && result.valid) {
                return { 
                    valid: true, 
                    error: null, 
                    student: result.student 
                };
            } else {
                return { 
                    valid: false, 
                    error: result.error || 'Invalid credentials' 
                };
            }
        } catch (error) {
            console.error('Validation error:', error);
            return { 
                valid: false, 
                error: 'Network error. Please check your connection.' 
            };
        }
    }

    // Save exam results
    async saveResults(tableName, rollNumber, correctAnswers, wrongAnswers, totalQuestions, percentage, userAnswers, violationDetected = false, violationType = null) {
        try {
            const response = await fetch('/api/save-results', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tableName,
                    rollNumber,
                    correctAnswers,
                    wrongAnswers,
                    totalQuestions,
                    percentage,
                    userAnswers,
                    violationDetected,
                    violationType
                })
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error saving results:', error);
            return { 
                success: false, 
                error: error.message 
            };
        }
    }

    // Update verification status
    async markVerified(rollNumber, uniqueCode) {
        try {
            const response = await fetch('/api/update-verification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rollNumber,
                    uniqueCode
                })
            });

            const result = await response.json();
            
            if (result.success) {
                console.log('✅ Student marked as VERIFIED in database!');
                console.log('✅ Roll:', rollNumber, '| Status: Verified');
            }
            
            return result;
        } catch (error) {
            console.error('Error marking verification:', error);
            return { 
                success: false, 
                error: error.message 
            };
        }
    }

    // Health check
    async healthCheck() {
        try {
            const response = await fetch('/api/health');
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Health check failed:', error);
            return { 
                status: 'ERROR', 
                message: error.message 
            };
        }
    }

    // Get all tables
    async getTables() {
        try {
            const response = await fetch('/api/tables');
            const result = await response.json();
            return result;
        } catch (error) {
            console.error('Error fetching tables:', error);
            return { 
                success: false, 
                error: error.message 
            };
        }
    }
}

// Create global instance
const dbClient = new DBClient();

// Export for use in other files
if (typeof window !== 'undefined') {
    window.dbClient = dbClient;
}

// Create validateCredentials function for backward compatibility
async function validateCredentials(rollNumber, uniqueCode) {
    console.log('🔍 Validating credentials:', rollNumber, uniqueCode);
    
    // Try student_verification table first
    const result = await dbClient.validateStudent(rollNumber, uniqueCode, 'student_verification');
    
    if (result.valid) {
        return {
            valid: true,
            error: null,
            student: result.student,
            examType: { type: 'TEST', studentsTable: 'student_verification', resultsTable: 'exam_results' }
        };
    }
    
    // Try students table
    const result2 = await dbClient.validateStudent(rollNumber, uniqueCode, 'students');
    
    if (result2.valid) {
        return {
            valid: true,
            error: null,
            student: result2.student,
            examType: { type: 'TEST', studentsTable: 'students', resultsTable: 'exam_results' }
        };
    }
    
    return {
        valid: false,
        error: 'Invalid roll number or unique code. Please check your credentials.'
    };
}

// Create markStudentVerified function
async function markStudentVerified(rollNumber, uniqueCode) {
    return await dbClient.markVerified(rollNumber, uniqueCode);
}

// Export functions globally
if (typeof window !== 'undefined') {
    window.validateCredentials = validateCredentials;
    window.markStudentVerified = markStudentVerified;
}

