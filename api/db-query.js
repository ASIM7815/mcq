// Vercel Serverless Function for Neon Database Queries
// This proxies database requests to avoid CORS and authentication issues

import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { query, params } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Query is required' });
    }

    try {
        // Initialize Neon connection
        const sql = neon(process.env.NEON_DATABASE_URL);
        
        // Execute query
        const result = await sql(query, params || []);
        
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
}
