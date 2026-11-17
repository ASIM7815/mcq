// Node.js Backend Server for ISL Exam Portal
// Connects to Neon PostgreSQL Database

const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files (HTML, CSS, JS)

// Create PostgreSQL connection pool
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Test database connection on startup
pool.connect((err, client, release) => {
    if (err) {
        console.error('❌ Error connecting to Neon database:', err.stack);
    } else {
        console.log('✅ Successfully connected to Neon PostgreSQL database!');
        release();
    }
});

// ============================================
// API ENDPOINTS
// ============================================

// Health check endpoint
app.get('/api/health', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            status: 'OK',
            message: 'Server and database connection healthy',
            database: 'Neon PostgreSQL',
            timestamp: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            status: 'ERROR',
            message: 'Database connection failed',
            error: error.message
        });
    }
});

// Generic database query endpoint (POST)
app.post('/api/db-query', async (req, res) => {
    const { query, params = [] } = req.body;

    if (!query) {
        return res.status(400).json({
            success: false,
            error: 'Query is required'
        });
    }

    try {
        console.log('📊 Executing query:', query);
        const result = await pool.query(query, params);
        
        console.log('✅ Query successful:', result.rowCount, 'rows affected');
        
        res.json({
            success: true,
            rows: result.rows,
            rowCount: result.rowCount
        });
    } catch (error) {
        console.error('❌ Database query error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Validate student credentials
app.post('/api/validate-student', async (req, res) => {
    const { rollNumber, uniqueCode, tableName } = req.body;

    if (!rollNumber || !uniqueCode || !tableName) {
        return res.status(400).json({
            success: false,
            error: 'Roll number, unique code, and table name are required'
        });
    }

    try {
        const query = `
            SELECT * FROM ${tableName} 
            WHERE roll_number = $1 
            AND unique_code = $2 
            AND is_active = true
            LIMIT 1
        `;
        
        const result = await pool.query(query, [rollNumber, uniqueCode]);
        
        if (result.rows.length > 0) {
            res.json({
                success: true,
                valid: true,
                student: result.rows[0]
            });
        } else {
            res.json({
                success: true,
                valid: false,
                error: 'Invalid credentials'
            });
        }
    } catch (error) {
        console.error('❌ Validation error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Save exam results
app.post('/api/save-results', async (req, res) => {
    const {
        tableName,
        rollNumber,
        correctAnswers,
        wrongAnswers,
        totalQuestions,
        percentage,
        userAnswers,
        violationDetected = false,
        violationType = null
    } = req.body;

    if (!tableName || !rollNumber) {
        return res.status(400).json({
            success: false,
            error: 'Table name and roll number are required'
        });
    }

    try {
        const query = `
            INSERT INTO ${tableName} (
                roll_number,
                correct_answers,
                wrong_answers,
                total_questions,
                percentage,
                user_answers,
                violation_detected,
                violation_type,
                created_at
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
            RETURNING *
        `;

        const values = [
            rollNumber,
            correctAnswers,
            wrongAnswers,
            totalQuestions,
            percentage,
            JSON.stringify(userAnswers),
            violationDetected,
            violationType
        ];

        const result = await pool.query(query, values);
        
        res.json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error('❌ Error saving results:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Update verification status
app.post('/api/update-verification', async (req, res) => {
    const { rollNumber, uniqueCode } = req.body;

    if (!rollNumber || !uniqueCode) {
        return res.status(400).json({
            success: false,
            error: 'Roll number and unique code are required'
        });
    }

    try {
        // Check if student exists in verification table
        const checkQuery = `
            SELECT * FROM student_verification 
            WHERE roll_number = $1 AND unique_code = $2
        `;
        const checkResult = await pool.query(checkQuery, [rollNumber, uniqueCode]);

        if (checkResult.rows.length === 0) {
            return res.json({
                success: false,
                error: 'Student not found in verification table'
            });
        }

        // Update verification status
        const updateQuery = `
            UPDATE student_verification 
            SET verified_text = 'Verified', 
                verified_at = NOW() 
            WHERE roll_number = $1 AND unique_code = $2
            RETURNING *
        `;
        
        const result = await pool.query(updateQuery, [rollNumber, uniqueCode]);
        
        console.log('✅ Verification updated for roll:', rollNumber);
        
        res.json({
            success: true,
            verified: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error('❌ Error updating verification:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Get all tables in database
app.get('/api/tables', async (req, res) => {
    try {
        const query = `
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
            ORDER BY table_name
        `;
        
        const result = await pool.query(query);
        
        res.json({
            success: true,
            tables: result.rows.map(row => row.table_name)
        });
    } catch (error) {
        console.error('❌ Error fetching tables:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 handler for undefined routes
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('💥 Server error:', err.stack);
    res.status(500).json({
        error: 'Internal server error',
        message: err.message
    });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, '0.0.0.0', () => {
    console.log('');
    console.log('🚀 ============================================');
    console.log('🚀 ISL Exam Portal Server - Node.js + Neon');
    console.log('🚀 ============================================');
    console.log('');
    console.log(`   🌐 Server: http://localhost:${PORT}`);
    console.log(`   📱 Local Network: http://192.168.x.x:${PORT}`);
    console.log(`   📄 Exam Portal: http://localhost:${PORT}/index.html`);
    console.log('');
    console.log('   📊 Database: Neon PostgreSQL');
    console.log('   🔗 Health Check: http://localhost:${PORT}/api/health');
    console.log('');
    console.log('   📡 API Endpoints:');
    console.log('      POST /api/db-query');
    console.log('      POST /api/validate-student');
    console.log('      POST /api/save-results');
    console.log('      POST /api/update-verification');
    console.log('      GET  /api/tables');
    console.log('');
    console.log('   🔧 Press Ctrl+C to stop');
    console.log('');
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('👋 SIGTERM received, closing server...');
    pool.end(() => {
        console.log('Database connection pool closed');
        process.exit(0);
    });
});
