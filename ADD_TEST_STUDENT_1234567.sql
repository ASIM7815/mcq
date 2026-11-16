-- ============================================
-- ADD TEST STUDENT: Roll No 1234567, Code 123
-- ============================================
-- Run this in Neon Console SQL Editor
-- URL: https://console.neon.tech/

-- This will add a test student that you can use to verify the website
-- Roll Number: 1234567
-- Unique Code: 123

-- ============================================
-- OPTION 1: Add to main students table
-- ============================================

-- Create students table if it doesn't exist
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert test student
INSERT INTO students (roll_number, unique_code, is_active) 
VALUES ('1234567', '123', true)
ON CONFLICT (roll_number) DO UPDATE 
SET unique_code = '123', is_active = true;

-- ============================================
-- OPTION 2: Add to CSE students table
-- ============================================

-- Create cse_students table if it doesn't exist
CREATE TABLE IF NOT EXISTS cse_students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert test student
INSERT INTO cse_students (roll_number, unique_code, is_active) 
VALUES ('1234567', '123', true)
ON CONFLICT (roll_number) DO UPDATE 
SET unique_code = '123', is_active = true;

-- ============================================
-- OPTION 3: Add to MBA students table
-- ============================================

-- Create mba_regular_students table if it doesn't exist
CREATE TABLE IF NOT EXISTS mba_regular_students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert test student
INSERT INTO mba_regular_students (roll_number, unique_code, is_active) 
VALUES ('1234567', '123', true)
ON CONFLICT (roll_number) DO UPDATE 
SET unique_code = '123', is_active = true;

-- ============================================
-- CREATE EXAM RESULTS TABLES (if not exist)
-- ============================================

-- Main exam results table
CREATE TABLE IF NOT EXISTS exam_results (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    additional_data JSONB,
    violation_detected BOOLEAN DEFAULT false,
    violation_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- CSE exam results table
CREATE TABLE IF NOT EXISTS cse_exam_results (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    additional_data JSONB,
    violation_detected BOOLEAN DEFAULT false,
    violation_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- MBA exam results table
CREATE TABLE IF NOT EXISTS mba_regular_exam_results (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    additional_data JSONB,
    violation_detected BOOLEAN DEFAULT false,
    violation_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================
-- VERIFY THE STUDENT WAS ADDED
-- ============================================

-- Check in students table
SELECT 'students' as table_name, * FROM students WHERE roll_number = '1234567'
UNION ALL
-- Check in cse_students table
SELECT 'cse_students' as table_name, * FROM cse_students WHERE roll_number = '1234567'
UNION ALL
-- Check in mba_regular_students table
SELECT 'mba_regular_students' as table_name, * FROM mba_regular_students WHERE roll_number = '1234567';

-- ============================================
-- TESTING INSTRUCTIONS
-- ============================================
-- After running this script in Neon Console:
--
-- 1. Go to your website: https://mcq-seven-gamma.vercel.app
-- 2. Enter Roll Number: 1234567
-- 3. Enter Unique Code: 123
-- 4. Click Continue
-- 5. You should be authenticated successfully!
--
-- The student is now in ALL three tables (students, cse_students, mba_regular_students)
-- so it will work regardless of which exam type is detected.
-- ============================================

-- ============================================
-- QUICK COPY VERSION (Run this if you just want the basics)
-- ============================================
-- INSERT INTO students (roll_number, unique_code) VALUES ('1234567', '123');
-- INSERT INTO cse_students (roll_number, unique_code) VALUES ('1234567', '123');
-- INSERT INTO mba_regular_students (roll_number, unique_code) VALUES ('1234567', '123');
-- ============================================
