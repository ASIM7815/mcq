-- Setup Database for 2nd Year AIDS DM Exam
-- 98 Students (160525747001-096 + 160525747301 + 160525747119)
-- Unique Code: DMAIDS117
-- Random 10 questions from 50 DM questions, 5 marks total

-- ============================================
-- DROP EXISTING TABLES IF ANY
-- ============================================

DROP TABLE IF EXISTS "2ndaidsdm" CASCADE;
DROP TABLE IF EXISTS "2ndaidsdmresults" CASCADE;

-- ============================================
-- CREATE STUDENTS TABLE
-- ============================================

CREATE TABLE "2ndaidsdm" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL DEFAULT 'DMAIDS117',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP
);

-- ============================================
-- CREATE RESULTS TABLE
-- ============================================

CREATE TABLE "2ndaidsdmresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "2ndaidsdm"(roll_number) ON DELETE CASCADE
);

-- ============================================
-- INSERT STUDENT ROLL NUMBERS
-- ============================================

-- Insert 160525747001 to 160525747096 (96 students)
INSERT INTO "2ndaidsdm" (roll_number, unique_code) 
SELECT 
    '160525747' || LPAD(num::TEXT, 3, '0'),
    'DMAIDS117'
FROM generate_series(1, 96) AS num;

-- Insert 160525747301 (1 student)
INSERT INTO "2ndaidsdm" (roll_number, unique_code) 
VALUES ('160525747301', 'DMAIDS117');

-- Insert 160525747119 (1 student)
INSERT INTO "2ndaidsdm" (roll_number, unique_code) 
VALUES ('160525747119', 'DMAIDS117');

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_2ndaidsdm_rollno ON "2ndaidsdm"(roll_number);
CREATE INDEX idx_2ndaidsdm_code ON "2ndaidsdm"(unique_code);
CREATE INDEX idx_2ndaidsdm_active ON "2ndaidsdm"(is_active);
CREATE INDEX idx_2ndaidsdmresults_rollno ON "2ndaidsdmresults"(roll_number);
CREATE INDEX idx_2ndaidsdmresults_submitted ON "2ndaidsdmresults"(submitted_at);

-- ============================================
-- VERIFY DATA
-- ============================================

SELECT 
    COUNT(*) as total_students,
    COUNT(CASE WHEN is_active = true THEN 1 END) as active_students,
    unique_code
FROM "2ndaidsdm"
GROUP BY unique_code;

-- Show first and last students
SELECT * FROM "2ndaidsdm" WHERE roll_number IN ('160525747001', '160525747096', '160525747301', '160525747119') ORDER BY roll_number;

-- ============================================
-- SUCCESS MESSAGE
-- ============================================

DO $$
BEGIN
    RAISE NOTICE '✅ 2nd Year AIDS DM Database Setup Complete!';
    RAISE NOTICE '📊 Total Students: 98';
    RAISE NOTICE '🔑 Unique Code: DMAIDS117';
    RAISE NOTICE '📚 Questions: 50 (Random 10 per exam)';
    RAISE NOTICE '📝 Max Marks: 5';
END $$;
