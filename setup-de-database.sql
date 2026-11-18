-- Setup 2nd Year ECE Digital Electronics (DE) Exam System
-- Table 1: Student Verification Table (2nd Year ECE)
-- Table 2: Results Table
-- 74 DE MCQs (Unit III: 40 Qs PLDs, Unit IV: 34 Qs Sequential)
-- Unique Code: DE771

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "2ndecederesults" CASCADE;
DROP TABLE IF EXISTS "2ndecede" CASCADE;

-- Create Student Verification Table
CREATE TABLE "2ndecede" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'DE771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "2ndecederesults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "2ndecede"(roll_number) ON DELETE CASCADE
);

-- Insert all 13 2nd Year ECE roll numbers with unique code 'DE771'
INSERT INTO "2ndecede" (roll_number, unique_code) VALUES
('160525735001', 'DE771'),
('160525735002', 'DE771'),
('160525735003', 'DE771'),
('160525735004', 'DE771'),
('160525735005', 'DE771'),
('160525735006', 'DE771'),
('160525735007', 'DE771'),
('160525735008', 'DE771'),
('160525735009', 'DE771'),
('160525735301', 'DE771'),
('160525735302', 'DE771'),
('160525735303', 'DE771'),
('160525735304', 'DE771');

-- Create indexes for better performance
CREATE INDEX idx_de_roll_number ON "2ndecede"(roll_number);
CREATE INDEX idx_de_results_roll_number ON "2ndecederesults"(roll_number);
CREATE INDEX idx_de_created_at ON "2ndecederesults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "2ndecederesults" 
ADD CONSTRAINT unique_de_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "2ndecede";
