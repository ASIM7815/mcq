const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

async function setupDatabase() {
    const client = await pool.connect();
    
    try {
        console.log('🔧 Setting up database tables...\n');
        
        // Create tables
        await client.query(`
            CREATE TABLE IF NOT EXISTS student_verification (
                id SERIAL PRIMARY KEY,
                roll_number VARCHAR(50) UNIQUE NOT NULL,
                unique_code VARCHAR(50) NOT NULL,
                verified_text VARCHAR(50) DEFAULT NULL,
                verified_at TIMESTAMP DEFAULT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Created student_verification table');
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS students (
                id SERIAL PRIMARY KEY,
                roll_number VARCHAR(50) UNIQUE NOT NULL,
                unique_code VARCHAR(50) NOT NULL,
                is_active BOOLEAN DEFAULT true,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Created students table');
        
        await client.query(`
            CREATE TABLE IF NOT EXISTS exam_results (
                id SERIAL PRIMARY KEY,
                roll_number VARCHAR(50) NOT NULL,
                correct_answers INTEGER NOT NULL,
                wrong_answers INTEGER NOT NULL,
                total_questions INTEGER NOT NULL,
                percentage DECIMAL(5,2) NOT NULL,
                user_answers JSONB,
                violation_detected BOOLEAN DEFAULT false,
                violation_type VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);
        console.log('✅ Created exam_results table');
        
        // Insert test student
        await client.query(`
            INSERT INTO student_verification (roll_number, unique_code) 
            VALUES ('12345678', '123')
            ON CONFLICT (roll_number) DO NOTHING;
        `);
        
        await client.query(`
            INSERT INTO students (roll_number, unique_code, is_active) 
            VALUES ('12345678', '123', true)
            ON CONFLICT (roll_number) DO NOTHING;
        `);
        console.log('✅ Inserted test student (12345678, 123)\n');
        
        // Verify
        const result = await client.query('SELECT * FROM student_verification WHERE roll_number = $1', ['12345678']);
        console.log('📊 Test Student Data:');
        console.log('   Roll:', result.rows[0].roll_number);
        console.log('   Code:', result.rows[0].unique_code);
        console.log('   Verified:', result.rows[0].verified_text || 'Not Yet');
        console.log('\n✅ Database setup complete!\n');
        
    } catch (error) {
        console.error('❌ Setup failed:', error.message);
    } finally {
        client.release();
        await pool.end();
    }
}

setupDatabase();
