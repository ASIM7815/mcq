-- Setup 2nd Year ECE Signals and Systems Exam System
-- Table 1: Student Verification Table (2nd Year ECE)
-- Table 2: Results Table
-- 60 Signals MCQs (5 Units - 12 questions each)
-- Unique Code: signal771

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "2ndecesignalresults" CASCADE;
DROP TABLE IF EXISTS "2ndecesignal" CASCADE;

-- Create Student Verification Table
CREATE TABLE "2ndecesignal" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'signal771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "2ndecesignalresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "2ndecesignal"(roll_number) ON DELETE CASCADE
);

-- Insert all 13 2nd Year ECE roll numbers with unique code 'signal771'
INSERT INTO "2ndecesignal" (roll_number, unique_code) VALUES
('160525735001', 'signal771'),
('160525735002', 'signal771'),
('160525735003', 'signal771'),
('160525735004', 'signal771'),
('160525735005', 'signal771'),
('160525735006', 'signal771'),
('160525735007', 'signal771'),
('160525735008', 'signal771'),
('160525735009', 'signal771'),
('160525735301', 'signal771'),
('160525735302', 'signal771'),
('160525735303', 'signal771'),
('160525735304', 'signal771');

-- Create indexes for better performance
CREATE INDEX idx_signals_roll_number ON "2ndecesignal"(roll_number);
CREATE INDEX idx_signals_results_roll_number ON "2ndecesignalresults"(roll_number);
CREATE INDEX idx_signals_created_at ON "2ndecesignalresults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "2ndecesignalresults" 
ADD CONSTRAINT unique_signals_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "2ndecesignal";
