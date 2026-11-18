-- Setup 3rd Year ECE Microprocessors and Microcontrollers (MPMC) Exam System
-- Table 1: Student Verification Table (3rd Year ECE)
-- Table 2: Results Table
-- 71 MPMC MCQs (Unit III: 36 Qs, Unit IV: 35 Qs)
-- 8051 Microcontroller Architecture and Programming
-- Unique Code: MPMC771

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "3rdecempmcresults" CASCADE;
DROP TABLE IF EXISTS "3rdecempmc" CASCADE;

-- Create Student Verification Table
CREATE TABLE "3rdecempmc" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'MPMC771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "3rdecempmcresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "3rdecempmc"(roll_number) ON DELETE CASCADE
);

-- Insert all 24 3rd Year ECE roll numbers with unique code 'MPMC771'
INSERT INTO "3rdecempmc" (roll_number, unique_code) VALUES
('160524735001', 'MPMC771'),
('160524735002', 'MPMC771'),
('160524735003', 'MPMC771'),
('160524735004', 'MPMC771'),
('160524735005', 'MPMC771'),
('160524735006', 'MPMC771'),
('160524735007', 'MPMC771'),
('160524735008', 'MPMC771'),
('160524735009', 'MPMC771'),
('160524735010', 'MPMC771'),
('160524735011', 'MPMC771'),
('160524735012', 'MPMC771'),
('160524735013', 'MPMC771'),
('160524735014', 'MPMC771'),
('160524735015', 'MPMC771'),
('160524735016', 'MPMC771'),
('160524735017', 'MPMC771'),
('160524735018', 'MPMC771'),
('160524735019', 'MPMC771'),
('160524735020', 'MPMC771'),
('160524735301', 'MPMC771'),
('160524735302', 'MPMC771'),
('160524735303', 'MPMC771'),
('160524735304', 'MPMC771');

-- Create indexes for better performance
CREATE INDEX idx_mpmc_roll_number ON "3rdecempmc"(roll_number);
CREATE INDEX idx_mpmc_results_roll_number ON "3rdecempmcresults"(roll_number);
CREATE INDEX idx_mpmc_created_at ON "3rdecempmcresults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "3rdecempmcresults" 
ADD CONSTRAINT unique_mpmc_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "3rdecempmc";
