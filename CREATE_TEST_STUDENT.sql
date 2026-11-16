-- ============================================
-- CREATE TEST STUDENT FOR FRONTEND TESTING
-- ============================================
-- Run this in Neon Console SQL Editor
-- URL: https://console.neon.tech/

-- Step 1: Create the students table (if not exists)
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Step 2: Create the exam_results table (if not exists)
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

-- Step 3: Insert test student with unique code 123
INSERT INTO students (roll_number, unique_code, is_active) 
VALUES ('160524733210', '123', true)
ON CONFLICT (roll_number) DO UPDATE 
SET unique_code = '123', is_active = true;

-- Step 4: Verify the student was created
SELECT * FROM students WHERE roll_number = '160524733210';

-- ============================================
-- TESTING INSTRUCTIONS
-- ============================================
-- After running this script:
-- 1. Go to http://localhost:8000/index.html
-- 2. Enter Roll Number: 160524733210
-- 3. Enter Unique Code: 123
-- 4. Click Continue
-- 5. You should be authenticated successfully!
-- ============================================
