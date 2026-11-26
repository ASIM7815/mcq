-- Setup Database for 2nd Year AIDS Python Exam
-- 97 Students (160525747001-096 + 160525747301)
-- Unique Code: PYTHONAIDS117
-- Random 10 questions from 60 Python questions, 5 marks total

-- ============================================
-- DROP EXISTING TABLES IF ANY
-- ============================================

DROP TABLE IF EXISTS "2ndaidspy" CASCADE;
DROP TABLE IF EXISTS "2ndaidspyresults" CASCADE;

-- ============================================
-- CREATE STUDENTS TABLE
-- ============================================

CREATE TABLE "2ndaidspy" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL DEFAULT 'PYTHONAIDS117',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP
);

-- ============================================
-- CREATE RESULTS TABLE
-- ============================================

CREATE TABLE "2ndaidspyresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "2ndaidspy"(roll_number) ON DELETE CASCADE
);

-- ============================================
-- INSERT STUDENT ROLL NUMBERS
-- ============================================

-- Insert 160525747001 to 160525747096 (96 students)
INSERT INTO "2ndaidspy" (roll_number, unique_code) 
SELECT 
    '160525747' || LPAD(num::TEXT, 3, '0'),
    'PYTHONAIDS117'
FROM generate_series(1, 96) AS num;

-- Insert 160525747301 (1 student)
INSERT INTO "2ndaidspy" (roll_number, unique_code) 
VALUES ('160525747301', 'PYTHONAIDS117');

-- Insert 160525747119 (1 student)
INSERT INTO "2ndaidspy" (roll_number, unique_code) 
VALUES ('160525747119', 'PYTHONAIDS117');

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_2ndaidspy_rollno ON "2ndaidspy"(roll_number);
CREATE INDEX idx_2ndaidspy_code ON "2ndaidspy"(unique_code);
CREATE INDEX idx_2ndaidspy_active ON "2ndaidspy"(is_active);
CREATE INDEX idx_2ndaidspyresults_rollno ON "2ndaidspyresults"(roll_number);
CREATE INDEX idx_2ndaidspyresults_submitted ON "2ndaidspyresults"(submitted_at);

-- ============================================
-- VERIFY DATA
-- ============================================

SELECT 
    COUNT(*) as total_students,
    COUNT(CASE WHEN is_active = true THEN 1 END) as active_students,
    unique_code
FROM "2ndaidspy"
GROUP BY unique_code;

-- Show first and last students
SELECT * FROM "2ndaidspy" WHERE roll_number IN ('160525747001', '160525747096', '160525747301', '160525747119') ORDER BY roll_number;

-- ============================================
-- SUCCESS MESSAGE
-- ============================================

DO $$
BEGIN
    RAISE NOTICE '✅ 2nd Year AIDS Python Database Setup Complete!';
    RAISE NOTICE '📊 Total Students: 98';
    RAISE NOTICE '🔑 Unique Code: PYTHONAIDS117';
    RAISE NOTICE '📚 Questions: 60 (Random 10 per exam)';
    RAISE NOTICE '📝 Max Marks: 5';
END $$;
