-- Setup Database for 3rd Year AIDS ALC Exam
-- 129 Students (160524747001-120 + 160524747301-305 + 160522747016 + 160523747073,081,100)
-- Unique Code: ALCAIDS210
-- Random 10 questions from 50 ALC questions (reusing CSE ALC questions), 5 marks total

-- ============================================
-- DROP EXISTING TABLES IF ANY
-- ============================================

DROP TABLE IF EXISTS "3rdaidsalc" CASCADE;
DROP TABLE IF EXISTS "3rdaidsalcresults" CASCADE;

-- ============================================
-- CREATE STUDENTS TABLE
-- ============================================

CREATE TABLE "3rdaidsalc" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL DEFAULT 'ALCAIDS210',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified_at TIMESTAMP
);

-- ============================================
-- CREATE RESULTS TABLE
-- ============================================

CREATE TABLE "3rdaidsalcresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "3rdaidsalc"(roll_number) ON DELETE CASCADE
);

-- ============================================
-- INSERT STUDENT ROLL NUMBERS
-- ============================================

-- Insert 160524747001 to 160524747120 (120 students)
INSERT INTO "3rdaidsalc" (roll_number, unique_code) 
SELECT 
    '160524747' || LPAD(num::TEXT, 3, '0'),
    'ALCAIDS210'
FROM generate_series(1, 120) AS num;

-- Insert 160524747301 to 160524747305 (5 students)
INSERT INTO "3rdaidsalc" (roll_number, unique_code) 
SELECT 
    '160524747' || LPAD((300 + num)::TEXT, 3, '0'),
    'ALCAIDS210'
FROM generate_series(1, 5) AS num;

-- Insert special roll numbers
INSERT INTO "3rdaidsalc" (roll_number, unique_code) VALUES 
('160522747016', 'ALCAIDS210'),
('160523747073', 'ALCAIDS210'),
('160523747081', 'ALCAIDS210'),
('160523747100', 'ALCAIDS210');

-- ============================================
-- CREATE INDEXES FOR PERFORMANCE
-- ============================================

CREATE INDEX idx_3rdaidsalc_rollno ON "3rdaidsalc"(roll_number);
CREATE INDEX idx_3rdaidsalc_code ON "3rdaidsalc"(unique_code);
CREATE INDEX idx_3rdaidsalc_active ON "3rdaidsalc"(is_active);
CREATE INDEX idx_3rdaidsalcresults_rollno ON "3rdaidsalcresults"(roll_number);
CREATE INDEX idx_3rdaidsalcresults_submitted ON "3rdaidsalcresults"(submitted_at);

-- ============================================
-- VERIFY DATA
-- ============================================

SELECT 
    COUNT(*) as total_students,
    COUNT(CASE WHEN is_active = true THEN 1 END) as active_students,
    unique_code
FROM "3rdaidsalc"
GROUP BY unique_code;

-- ============================================
-- SUCCESS MESSAGE
-- ============================================

DO $$
BEGIN
    RAISE NOTICE '✅ 3rd Year AIDS ALC Database Setup Complete!';
    RAISE NOTICE '📊 Total Students: 129';
    RAISE NOTICE '🔑 Unique Code: ALCAIDS210';
    RAISE NOTICE '📚 Questions: 50 (Reusing CSE ALC questions)';
    RAISE NOTICE '📝 Max Marks: 5';
    RAISE NOTICE '📖 Topics: Automata Theory, Finite Automata, Regular Expressions, Context-Free Grammars';
END $$;
