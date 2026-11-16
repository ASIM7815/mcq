-- ============================================
-- VERIFICATION TRACKING TABLE
-- ============================================
-- This is a SEPARATE table just for tracking verification
-- NOT connected to students/cse_students tables
-- Run this in Neon Console SQL Editor

-- Create verification tracking table
CREATE TABLE IF NOT EXISTS student_verification (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    verified_text VARCHAR(50) DEFAULT NULL,
    verified_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_verification_roll_number 
ON student_verification(roll_number);

-- Insert test student with roll 12345678 and code 123
-- BEFORE verification, verified_text is NULL
INSERT INTO student_verification (roll_number, unique_code, verified_text, verified_at) 
VALUES ('12345678', '123', NULL, NULL)
ON CONFLICT (roll_number) DO UPDATE 
SET unique_code = '123', verified_text = NULL, verified_at = NULL;

-- Check the record (should show NULL for verified_text)
SELECT 
    roll_number,
    unique_code,
    COALESCE(verified_text, 'Not Verified Yet') as status,
    verified_at,
    created_at
FROM student_verification 
WHERE roll_number = '12345678';

-- ============================================
-- WHAT THIS DOES:
-- ============================================
-- 1. Creates a new table: student_verification
-- 2. Adds roll number: 12345678
-- 3. Adds unique code: 123
-- 4. verified_text starts as NULL (empty)
-- 5. When student logs in on website, it becomes "Verified"
-- ============================================

-- ============================================
-- TO CHECK VERIFICATION STATUS ANYTIME:
-- ============================================
-- SELECT * FROM student_verification WHERE roll_number = '12345678';
-- 
-- BEFORE login shows: verified_text = NULL
-- AFTER login shows: verified_text = "Verified"
-- ============================================
