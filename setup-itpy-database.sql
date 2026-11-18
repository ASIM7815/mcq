-- Setup IT Python Programming Exam System
-- Table 1: Student Verification Table (2nd Year IT)
-- Table 2: Results Table

-- Drop existing tables if they exist
DROP TABLE IF EXISTS "2nditpythonresults" CASCADE;
DROP TABLE IF EXISTS "2nditpython" CASCADE;

-- Create Student Verification Table
CREATE TABLE "2nditpython" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) UNIQUE NOT NULL,
    unique_code VARCHAR(20) NOT NULL DEFAULT 'PY771',
    is_active BOOLEAN DEFAULT TRUE,
    verified_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Results Table
CREATE TABLE "2nditpythonresults" (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(20) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL DEFAULT 10,
    marks DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (roll_number) REFERENCES "2nditpython"(roll_number) ON DELETE CASCADE
);

-- Insert all 46 2nd Year IT roll numbers with unique code 'PY771'
INSERT INTO "2nditpython" (roll_number, unique_code) VALUES
('160525737001', 'PY771'),
('160525737002', 'PY771'),
('160525737003', 'PY771'),
('160525737004', 'PY771'),
('160525737005', 'PY771'),
('160525737006', 'PY771'),
('160525737007', 'PY771'),
('160525737008', 'PY771'),
('160525737009', 'PY771'),
('160525737010', 'PY771'),
('160525737011', 'PY771'),
('160525737012', 'PY771'),
('160525737013', 'PY771'),
('160525737014', 'PY771'),
('160525737015', 'PY771'),
('160525737016', 'PY771'),
('160525737017', 'PY771'),
('160525737018', 'PY771'),
('160525737019', 'PY771'),
('160525737020', 'PY771'),
('160525737021', 'PY771'),
('160525737022', 'PY771'),
('160525737023', 'PY771'),
('160525737024', 'PY771'),
('160525737025', 'PY771'),
('160525737026', 'PY771'),
('160525737027', 'PY771'),
('160525737028', 'PY771'),
('160525737029', 'PY771'),
('160525737030', 'PY771'),
('160525737031', 'PY771'),
('160525737032', 'PY771'),
('160525737033', 'PY771'),
('160525737034', 'PY771'),
('160525737035', 'PY771'),
('160525737036', 'PY771'),
('160525737037', 'PY771'),
('160525737038', 'PY771'),
('160525737039', 'PY771'),
('160525737040', 'PY771'),
('160525737041', 'PY771'),
('160525737042', 'PY771'),
('160525737043', 'PY771'),
('160525737044', 'PY771'),
('160525737045', 'PY771'),
('160525737046', 'PY771');

-- Create indexes for better performance
CREATE INDEX idx_itpy_roll_number ON "2nditpython"(roll_number);
CREATE INDEX idx_itpy_results_roll_number ON "2nditpythonresults"(roll_number);
CREATE INDEX idx_itpy_created_at ON "2nditpythonresults"(created_at);

-- Prevent duplicate submissions
ALTER TABLE "2nditpythonresults" 
ADD CONSTRAINT unique_itpy_submission UNIQUE (roll_number);

-- Verify data
SELECT COUNT(*) as total_students FROM "2nditpython";
