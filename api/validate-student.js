// Vercel Serverless Function for Student Validation
// Validates student credentials (roll number + unique code)

import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { rollNumber, uniqueCode, tableName } = req.body;

    // Validate required fields
    if (!rollNumber || !uniqueCode || !tableName) {
        return res.status(400).json({ 
            success: false,
            error: 'Roll number, unique code, and table name are required' 
        });
    }

    try {
        // Initialize Neon connection
        const sql = neon(process.env.NEON_DATABASE_URL);
        
        // Query to validate student
        const query = `
            SELECT * FROM ${tableName}
            WHERE roll_number = $1 
            AND unique_code = $2
            AND is_active = true
            LIMIT 1
        `;
        
        const params = [rollNumber, uniqueCode];
        
        // Execute query
        const result = await sql(query, params);
        
        if (result.length > 0) {
            // Student found and credentials are valid
            console.log('✅ Student validated:', rollNumber);
            return res.status(200).json({
                success: true,
                valid: true,
                student: result[0]
            });
        } else {
            // Student not found or credentials invalid
            console.log('❌ Invalid credentials:', rollNumber);
            return res.status(200).json({
                success: true,
                valid: false,
                message: 'Invalid credentials'
            });
        }
        
    } catch (error) {
        console.error('❌ Error validating student:', error);
        return res.status(500).json({
            success: false,
            error: error.message,
            details: 'Failed to validate student credentials'
        });
    }
}
