-- Setup 3rd Year ECE Antennas & Wave Propagation (AWP) Exam System
-- Table 1: Student Verification Table (3rd Year ECE)
-- Table 2: Results Table
-- 75 AWP MCQs (Units III & IV)
-- Unique Code: EWP771

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "3rdeceewpresults" CASCADE;
DROP TABLE IF EXISTS "3rdeceewp" CASCADE;

-- Create Student Verification Table
CREATE TABLE "3rdeceewp" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'EWP771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "3rdeceewpresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "3rdeceewp"(roll_number) ON DELETE CASCADE
);

-- Insert all 24 3rd Year ECE roll numbers with unique code 'EWP771'
INSERT INTO "3rdeceewp" (roll_number, unique_code) VALUES
('160524735001', 'EWP771'),
('160524735002', 'EWP771'),
('160524735003', 'EWP771'),
('160524735004', 'EWP771'),
('160524735005', 'EWP771'),
('160524735006', 'EWP771'),
('160524735007', 'EWP771'),
('160524735008', 'EWP771'),
('160524735009', 'EWP771'),
('160524735010', 'EWP771'),
('160524735011', 'EWP771'),
('160524735012', 'EWP771'),
('160524735013', 'EWP771'),
('160524735014', 'EWP771'),
('160524735015', 'EWP771'),
('160524735016', 'EWP771'),
('160524735017', 'EWP771'),
('160524735018', 'EWP771'),
('160524735019', 'EWP771'),
('160524735020', 'EWP771'),
('160524735301', 'EWP771'),
('160524735302', 'EWP771'),
('160524735303', 'EWP771'),
('160524735304', 'EWP771');

-- Create indexes for better performance
CREATE INDEX idx_awp_roll_number ON "3rdeceewp"(roll_number);
CREATE INDEX idx_awp_results_roll_number ON "3rdeceewpresults"(roll_number);
CREATE INDEX idx_awp_created_at ON "3rdeceewpresults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "3rdeceewpresults" 
ADD CONSTRAINT unique_awp_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "3rdeceewp";
