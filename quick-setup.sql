-- Quick Setup - Copy and paste this entire block into Neon Console

CREATE TABLE IF NOT EXISTS student_verification (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    verified_text VARCHAR(50) DEFAULT NULL,
    verified_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS exam_results (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    violation_detected BOOLEAN DEFAULT false,
    violation_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO student_verification (roll_number, unique_code) VALUES ('12345678', '123');
INSERT INTO students (roll_number, unique_code) VALUES ('12345678', '123');

SELECT 'Setup Complete!' as status;
