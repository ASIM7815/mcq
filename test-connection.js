// Test Neon PostgreSQL Database Connection
// Run this with: npm test

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

async function testConnection() {
    console.log('🔍 Testing Neon PostgreSQL connection...\n');
    
    try {
        // Test basic connection
        const client = await pool.connect();
        console.log('✅ Connected to Neon PostgreSQL database!\n');
        
        // Get database info
        const dbInfo = await client.query('SELECT version(), current_database(), current_user');
        console.log('📊 Database Information:');
        console.log('   Version:', dbInfo.rows[0].version.split(' ')[0], dbInfo.rows[0].version.split(' ')[1]);
        console.log('   Database:', dbInfo.rows[0].current_database);
        console.log('   User:', dbInfo.rows[0].current_user);
        console.log('');
        
        // List all tables
        const tablesQuery = `
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
            ORDER BY table_name
        `;
        const tables = await client.query(tablesQuery);
        console.log('📋 Tables in database:');
        if (tables.rows.length > 0) {
            tables.rows.forEach((row, index) => {
                console.log(`   ${index + 1}. ${row.table_name}`);
            });
        } else {
            console.log('   No tables found');
        }
        console.log('');
        
        // Test student_verification table if it exists
        const checkTable = await client.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name = 'student_verification'
            )
        `);
        
        if (checkTable.rows[0].exists) {
            const students = await client.query('SELECT * FROM student_verification LIMIT 5');
            console.log('👤 Sample students in verification table:');
            students.rows.forEach((student, index) => {
                console.log(`   ${index + 1}. Roll: ${student.roll_number}, Code: ${student.unique_code}, Status: ${student.verified_text || 'Not Verified'}`);
            });
            console.log('');
        }
        
        client.release();
        
        console.log('✅ All tests passed! Database is ready.\n');
        process.exit(0);
        
    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        console.error('');
        console.error('💡 Troubleshooting:');
        console.error('   1. Check if .env file exists with DATABASE_URL');
        console.error('   2. Verify your Neon database is active');
        console.error('   3. Check internet connection');
        console.error('');
        process.exit(1);
    }
}

testConnection();
