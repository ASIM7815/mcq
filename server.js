// Local development server with Neon database connection
// Run this to test with real Neon database on localhost

import { neon } from '@neondatabase/serverless';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

// Load environment variables
config();

const app = express();
const PORT = 8080; // Changed from 3000 to avoid conflicts

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Initialize Neon connection
const sql = neon(process.env.NEON_DATABASE_URL || 'postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require');

// Database query endpoint
app.post('/api/db-query', async (req, res) => {
    const { query, params } = req.body;

    if (!query) {
        return res.status(400).json({ 
            success: false, 
            error: 'Query is required' 
        });
    }

    try {
        console.log('Executing query:', query);
        
        // Execute query
        const result = await sql(query, params || []);
        
        console.log('Query result:', result.length, 'rows');
        
        // Return results
        return res.status(200).json({
            success: true,
            rows: result,
            rowCount: result.length
        });
    } catch (error) {
        console.error('Database query error:', error);
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        message: 'Server is running',
        database: 'connected'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('');
    console.log('🚀 ============================================');
    console.log('🚀 Local Development Server with Neon Database');
    console.log('🚀 ============================================');
    console.log('');
    console.log(`   Server running at: http://localhost:${PORT}`);
    console.log(`   Exam portal: http://localhost:${PORT}/index.html`);
    console.log(`   Health check: http://localhost:${PORT}/api/health`);
    console.log('');
    console.log('📊 Database: Neon PostgreSQL');
    console.log('🧪 Test credentials:');
    console.log('   Roll Number: 160524733210');
    console.log('   Unique Code: 123');
    console.log('');
    console.log('🔧 Press Ctrl+C to stop the server');
    console.log('');
});
