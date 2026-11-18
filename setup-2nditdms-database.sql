-- Setup 2nd Year IT Discrete Mathematics Exam System
-- Table 1: Student Verification Table (2nd Year IT)
-- Table 2: Results Table
-- Uses existing dm-questions.js (50 questions)
-- Unique Code: DMS771

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "2nditdmsresults" CASCADE;
DROP TABLE IF EXISTS "2nditdms" CASCADE;

-- Create Student Verification Table
CREATE TABLE "2nditdms" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'DMS771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "2nditdmsresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "2nditdms"(roll_number) ON DELETE CASCADE
);

-- Insert all 46 2nd Year IT roll numbers with unique code 'DMS771'
INSERT INTO "2nditdms" (roll_number, unique_code) VALUES
('160525737001', 'DMS771'),
('160525737002', 'DMS771'),
('160525737003', 'DMS771'),
('160525737004', 'DMS771'),
('160525737005', 'DMS771'),
('160525737006', 'DMS771'),
('160525737007', 'DMS771'),
('160525737008', 'DMS771'),
('160525737009', 'DMS771'),
('160525737010', 'DMS771'),
('160525737011', 'DMS771'),
('160525737012', 'DMS771'),
('160525737013', 'DMS771'),
('160525737014', 'DMS771'),
('160525737015', 'DMS771'),
('160525737016', 'DMS771'),
('160525737017', 'DMS771'),
('160525737018', 'DMS771'),
('160525737019', 'DMS771'),
('160525737020', 'DMS771'),
('160525737021', 'DMS771'),
('160525737022', 'DMS771'),
('160525737023', 'DMS771'),
('160525737024', 'DMS771'),
('160525737025', 'DMS771'),
('160525737026', 'DMS771'),
('160525737027', 'DMS771'),
('160525737028', 'DMS771'),
('160525737029', 'DMS771'),
('160525737030', 'DMS771'),
('160525737031', 'DMS771'),
('160525737032', 'DMS771'),
('160525737033', 'DMS771'),
('160525737034', 'DMS771'),
('160525737035', 'DMS771'),
('160525737036', 'DMS771'),
('160525737037', 'DMS771'),
('160525737038', 'DMS771'),
('160525737039', 'DMS771'),
('160525737040', 'DMS771'),
('160525737041', 'DMS771'),
('160525737042', 'DMS771'),
('160525737043', 'DMS771'),
('160525737044', 'DMS771'),
('160525737045', 'DMS771'),
('160525737046', 'DMS771');

-- Create indexes for better performance
CREATE INDEX idx_2nditdms_roll_number ON "2nditdms"(roll_number);
CREATE INDEX idx_2nditdms_results_roll_number ON "2nditdmsresults"(roll_number);
CREATE INDEX idx_2nditdms_created_at ON "2nditdmsresults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "2nditdmsresults" 
ADD CONSTRAINT unique_2nditdms_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "2nditdms";
