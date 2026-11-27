// Vercel Serverless Function for Saving Exam Results
// Handles saving student exam results to respective results tables

import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const {
        tableName,
        rollNumber,
        correctAnswers,
        wrongAnswers,
        totalQuestions,
        marks,
        percentage,
        userAnswers
    } = req.body;

    // Validate required fields
    if (!tableName || !rollNumber) {
        return res.status(400).json({ 
            success: false,
            error: 'Table name and roll number are required' 
        });
    }

    try {
        // Initialize Neon connection
        const sql = neon(process.env.NEON_DATABASE_URL);
        
        // Clean table name - remove extra quotes if present
        const cleanTableName = tableName.replace(/"/g, '');
        
        console.log('💾 Attempting to save results:', {
            originalTableName: tableName,
            cleanTableName: cleanTableName,
            rollNumber: rollNumber,
            marks: marks
        });
        
        // Insert results into the respective results table
        // Using parameterized query with proper table name escaping
        const query = `
            INSERT INTO "${cleanTableName}" (
                roll_number,
                correct_answers,
                wrong_answers,
                total_questions,
                marks,
                percentage,
                user_answers
            ) VALUES ($1, $2, $3, $4, $5, $6, $7)
            ON CONFLICT (roll_number) DO UPDATE SET
                correct_answers = EXCLUDED.correct_answers,
                wrong_answers = EXCLUDED.wrong_answers,
                total_questions = EXCLUDED.total_questions,
                marks = EXCLUDED.marks,
                percentage = EXCLUDED.percentage,
                user_answers = EXCLUDED.user_answers,
                submitted_at = CURRENT_TIMESTAMP
            RETURNING *
        `;
        
        const params = [
            rollNumber,
            correctAnswers,
            wrongAnswers,
            totalQuestions,
            marks,
            percentage,
            JSON.stringify(userAnswers)
        ];
        
        // Execute query
        const result = await sql(query, params);
        
        console.log('✅ Results saved successfully:', {
            table: cleanTableName,
            rollNumber: rollNumber,
            marks: marks
        });
        
        // Return success
        return res.status(200).json({
            success: true,
            message: 'Results saved successfully',
            data: result[0]
        });
        
    } catch (error) {
        console.error('❌ Error saving results:', error);
        console.error('Query details:', {
            tableName: tableName,
            rollNumber: rollNumber
        });
        return res.status(500).json({
            success: false,
            error: error.message,
            details: 'Failed to save exam results to database',
            tableName: tableName
        });
    }
}
