-- ============================================
-- ISL EXAM PORTAL - DATABASE SETUP
-- ============================================
-- Run this in Neon Console: https://console.neon.tech
-- This will create all necessary tables for your exam system

-- ============================================
-- 1. VERIFICATION TABLE (Tracks who logged in)
-- ============================================

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

-- ============================================
-- 2. STUDENTS TABLE (Main student records)
-- ============================================

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_students_roll_number 
ON students(roll_number);

-- ============================================
-- 3. EXAM RESULTS TABLE (Stores exam scores)
-- ============================================

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

CREATE INDEX IF NOT EXISTS idx_exam_results_roll_number 
ON exam_results(roll_number);

-- ============================================
-- 4. ADD TEST STUDENTS
-- ============================================

-- Test student for verification system
INSERT INTO student_verification (roll_number, unique_code) 
VALUES ('12345678', '123')
ON CONFLICT (roll_number) DO NOTHING;

-- Test student for main system
INSERT INTO students (roll_number, unique_code, is_active) 
VALUES ('12345678', '123', true)
ON CONFLICT (roll_number) DO NOTHING;

-- ============================================
-- 5. VERIFY TABLES CREATED
-- ============================================

SELECT 
    'student_verification' as table_name,
    COUNT(*) as record_count
FROM student_verification
UNION ALL
SELECT 
    'students' as table_name,
    COUNT(*) as record_count
FROM students
UNION ALL
SELECT 
    'exam_results' as table_name,
    COUNT(*) as record_count
FROM exam_results;

-- ============================================
-- 6. VIEW TEST STUDENT DATA
-- ============================================

SELECT 
    'VERIFICATION TABLE' as info,
    roll_number,
    unique_code,
    COALESCE(verified_text, 'Not Verified Yet') as status,
    verified_at
FROM student_verification 
WHERE roll_number = '12345678';

-- ============================================
-- SETUP COMPLETE!
-- ============================================
-- You now have:
-- ✅ student_verification table (tracks logins)
-- ✅ students table (main student records)
-- ✅ exam_results table (stores exam scores)
-- ✅ Test student: Roll=12345678, Code=123
--
-- Next Steps:
-- 1. Test on website: http://localhost:3000/index.html
-- 2. Login with Roll: 12345678, Code: 123
-- 3. Check verified_text column updates to "Verified"
-- ============================================
