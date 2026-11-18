-- RE-ENABLE ALL EXAMS
-- Use this script when you want to activate all subjects again

-- ============================================
-- ENABLE 2ND YEAR CSE EXAMS
-- ============================================

-- Enable DM Exam (2nd Year CSE)
UPDATE "2ndyearstudentscse" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- Enable DSA Exam (2nd Year CSE)
UPDATE "2ndcsedsa" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- ============================================
-- ENABLE 3RD YEAR CSE EXAMS
-- ============================================

-- Enable ALC Exam (3rd Year CSE)
UPDATE "3rdcsealc" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- Enable CS Exam (3rd Year CSE)
UPDATE "3rdcsecs" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- Enable SE Exam (3rd Year CSE)
UPDATE "3rdcsese" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- ============================================
-- ENABLE IT ALC (Already active, but just in case)
-- ============================================
UPDATE "3rditalc" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- ============================================
-- ENABLE IT ML (Already active, but just in case)
-- ============================================
UPDATE "3rditml" 
SET is_active = TRUE
WHERE is_active = FALSE;

-- ============================================
-- VERIFY STATUS
-- ============================================
SELECT 
    '2ndyearstudentscse (DM)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "2ndyearstudentscse"

UNION ALL

SELECT 
    '2ndcsedsa (DSA)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "2ndcsedsa"

UNION ALL

SELECT 
    '3rdcsealc (ALC)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "3rdcsealc"

UNION ALL

SELECT 
    '3rdcsecs (CS)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "3rdcsecs"

UNION ALL

SELECT 
    '3rdcsese (SE)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "3rdcsese"

UNION ALL

SELECT 
    '3rditalc (IT ALC)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "3rditalc"

UNION ALL

SELECT 
    '3rditml (IT ML)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students
FROM "3rditml"

ORDER BY table_name;

-- ============================================
-- SUMMARY MESSAGE
-- ============================================
SELECT 
    '✅ ALL EXAMS ENABLED' as status,
    'All students can login now' as message;
