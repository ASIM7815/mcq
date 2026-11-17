-- ============================================
-- ADD MORE STUDENTS TO YOUR EXAM SYSTEM
-- ============================================
-- Customize this with your actual student data

-- Add multiple students to verification table
INSERT INTO student_verification (roll_number, unique_code) 
VALUES 
    ('12345678', '123'),
    ('12345679', '123'),
    ('12345680', '123'),
    ('12345681', '123'),
    ('12345682', '123')
ON CONFLICT (roll_number) DO NOTHING;

-- Add same students to main students table
INSERT INTO students (roll_number, unique_code, is_active) 
VALUES 
    ('12345678', '123', true),
    ('12345679', '123', true),
    ('12345680', '123', true),
    ('12345681', '123', true),
    ('12345682', '123', true)
ON CONFLICT (roll_number) DO NOTHING;

-- ============================================
-- VIEW ALL STUDENTS
-- ============================================

SELECT 
    roll_number,
    unique_code,
    COALESCE(verified_text, 'Not Verified') as status,
    created_at
FROM student_verification
ORDER BY roll_number;

-- ============================================
-- TEMPLATE: Add Your Own Students
-- ============================================
-- Copy and modify this template:
--
-- INSERT INTO student_verification (roll_number, unique_code) 
-- VALUES 
--     ('YOUR_ROLL_1', 'YOUR_CODE'),
--     ('YOUR_ROLL_2', 'YOUR_CODE'),
--     ('YOUR_ROLL_3', 'YOUR_CODE');
--
-- INSERT INTO students (roll_number, unique_code, is_active) 
-- VALUES 
--     ('YOUR_ROLL_1', 'YOUR_CODE', true),
--     ('YOUR_ROLL_2', 'YOUR_CODE', true),
--     ('YOUR_ROLL_3', 'YOUR_CODE', true);
-- ============================================
