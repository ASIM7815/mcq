-- Setup Database for 3rd Year AIDS AI Exam
-- 125 Students (160524747001-120 + 160524747301-305 + 160522747016 + 160523747073,081,100)
-- Unique Code: AIAIDS210
-- Random 10 questions from 30 AI questions, 5 marks total

-- ============================================
-- DROP EXISTING TABLES IF ANY
-- ============================================

DROP TABLE IF EXISTS "3rdaidsai" CASCADE;
DROP TABLE IF EXISTS "3rdaidsairesults" CASCADE;

-- ============================================
-- CREATE STUDENTS TABLE
-- ============================================

CREATE TABLE "3rdaidsai" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL DEFAULT 'AIAIDS210',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP
);

-- ============================================
-- CREATE RESULTS TABLE
-- ============================================

CREATE TABLE "3rdaidsairesults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "3rdaidsai"(roll_number) ON DELETE CASCADE
);

-- ============================================
-- INSERT STUDENT ROLL NUMBERS
-- ============================================

-- Insert 160524747001 to 160524747120 (120 students)
INSERT INTO "3rdaidsai" (roll_number, unique_code) 
SELECT 
    '160524747' || LPAD(num::TEXT, 3, '0'),
    'AIAIDS210'
FROM generate_series(1, 120) AS num;

-- Insert 160524747301 to 160524747305 (5 students)
INSERT INTO "3rdaidsai" (roll_number, unique_code) 
SELECT 
    '160524747' || LPAD((300 + num)::TEXT, 3, '0'),
    'AIAIDS210'
FROM generate_series(1, 5) AS num;

-- Insert special roll numbers
INSERT INTO "3rdaidsai" (roll_number, unique_code) VALUES 
('160522747016', 'AIAIDS210'),
('160523747073', 'AIAIDS210'),
('160523747081', 'AIAIDS210'),
('160523747100', 'AIAIDS210');

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_3rdaidsai_rollno ON "3rdaidsai"(roll_number);
CREATE INDEX idx_3rdaidsai_code ON "3rdaidsai"(unique_code);
CREATE INDEX idx_3rdaidsai_active ON "3rdaidsai"(is_active);
CREATE INDEX idx_3rdaidsairesults_rollno ON "3rdaidsairesults"(roll_number);
CREATE INDEX idx_3rdaidsairesults_submitted ON "3rdaidsairesults"(submitted_at);

-- ============================================
-- VERIFY DATA
-- ============================================

SELECT 
    COUNT(*) as total_students,
    COUNT(CASE WHEN is_active = true THEN 1 END) as active_students,
    unique_code
FROM "3rdaidsai"
GROUP BY unique_code;

-- Show sample students
SELECT * FROM "3rdaidsai" 
WHERE roll_number IN ('160524747001', '160524747120', '160524747301', '160522747016', '160523747073') 
ORDER BY roll_number;

-- ============================================
-- SUCCESS MESSAGE
-- ============================================

DO $$
BEGIN
    RAISE NOTICE '✅ 3rd Year AIDS AI Database Setup Complete!';
    RAISE NOTICE '📊 Total Students: 129';
    RAISE NOTICE '🔑 Unique Code: AIAIDS210';
    RAISE NOTICE '📚 Questions: 30 (Random 10 per exam)';
    RAISE NOTICE '📝 Max Marks: 5';
    RAISE NOTICE '🧠 Topics: Neural Networks, Deep Learning, Reinforcement Learning';
END $$;
