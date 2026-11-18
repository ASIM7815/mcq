-- Setup 3rd Year ECE Digital Signal Processing (DSP) Exam System
-- Table 1: Student Verification Table (3rd Year ECE)
-- Table 2: Results Table
-- 60 DSP MCQs (5 Units - 12 questions per unit)
-- Unique Code: DSP771

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "3rdecedspresults" CASCADE;
DROP TABLE IF EXISTS "3rdecedsp" CASCADE;

-- Create Student Verification Table
CREATE TABLE "3rdecedsp" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'DSP771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "3rdecedspresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "3rdecedsp"(roll_number) ON DELETE CASCADE
);

-- Insert all 24 3rd Year ECE roll numbers with unique code 'DSP771'
INSERT INTO "3rdecedsp" (roll_number, unique_code) VALUES
('160524735001', 'DSP771'),
('160524735002', 'DSP771'),
('160524735003', 'DSP771'),
('160524735004', 'DSP771'),
('160524735005', 'DSP771'),
('160524735006', 'DSP771'),
('160524735007', 'DSP771'),
('160524735008', 'DSP771'),
('160524735009', 'DSP771'),
('160524735010', 'DSP771'),
('160524735011', 'DSP771'),
('160524735012', 'DSP771'),
('160524735013', 'DSP771'),
('160524735014', 'DSP771'),
('160524735015', 'DSP771'),
('160524735016', 'DSP771'),
('160524735017', 'DSP771'),
('160524735018', 'DSP771'),
('160524735019', 'DSP771'),
('160524735020', 'DSP771'),
('160524735301', 'DSP771'),
('160524735302', 'DSP771'),
('160524735303', 'DSP771'),
('160524735304', 'DSP771');

-- Create indexes for better performance
CREATE INDEX idx_dsp_roll_number ON "3rdecedsp"(roll_number);
CREATE INDEX idx_dsp_results_roll_number ON "3rdecedspresults"(roll_number);
CREATE INDEX idx_dsp_created_at ON "3rdecedspresults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "3rdecedspresults" 
ADD CONSTRAINT unique_dsp_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "3rdecedsp";
