-- DISABLE ALL EXAMS EXCEPT IT ALC (3rditalc)
-- This script sets is_active = FALSE for all students in all tables
-- ONLY IT ALC students will be able to login

-- ============================================
-- DISABLE 2ND YEAR CSE EXAMS
-- ============================================

-- Disable DM Exam (2nd Year CSE)
UPDATE "2ndyearstudentscse" 
SET is_active = FALSE
WHERE is_active = TRUE;

-- Disable DSA Exam (2nd Year CSE)
UPDATE "2ndcsedsa" 
SET is_active = FALSE
WHERE is_active = TRUE;

-- ============================================
-- DISABLE 3RD YEAR CSE EXAMS
-- ============================================

-- Disable ALC Exam (3rd Year CSE)
UPDATE "3rdcsealc" 
SET is_active = FALSE
WHERE is_active = TRUE;

-- Disable CS Exam (3rd Year CSE)
UPDATE "3rdcsecs" 
SET is_active = FALSE
WHERE is_active = TRUE;

-- Disable SE Exam (3rd Year CSE)
UPDATE "3rdcsese" 
SET is_active = FALSE
WHERE is_active = TRUE;

-- ============================================
-- KEEP IT ALC AND IT ML ACTIVE (DO NOT TOUCH)
-- ============================================
-- IT ALC (3rditalc) remains ACTIVE - no changes
-- IT ML (3rditml) remains ACTIVE - no changes

-- ============================================
-- VERIFY STATUS
-- ============================================
SELECT 
    '2ndyearstudentscse (DM)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "2ndyearstudentscse"

UNION ALL

SELECT 
    '2ndcsedsa (DSA)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "2ndcsedsa"

UNION ALL

SELECT 
    '3rdcsealc (ALC)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "3rdcsealc"

UNION ALL

SELECT 
    '3rdcsecs (CS)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "3rdcsecs"

UNION ALL

SELECT 
    '3rdcsese (SE)' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "3rdcsese"

UNION ALL

SELECT 
    '3rditalc (IT ALC) ✅ ACTIVE' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "3rditalc"

UNION ALL

SELECT 
    '3rditml (IT ML) ✅ ACTIVE' as table_name,
    COUNT(*) as total_students,
    SUM(CASE WHEN is_active = TRUE THEN 1 ELSE 0 END) as active_students,
    SUM(CASE WHEN is_active = FALSE THEN 1 ELSE 0 END) as inactive_students
FROM "3rditml"

ORDER BY table_name;

-- ============================================
-- SUMMARY MESSAGE
-- ============================================
SELECT 
    '✅ ALL EXAMS DISABLED EXCEPT IT ALC AND IT ML' as status,
    'Only 3rditalc (ITALC771) and 3rditml (ML771) students can login now' as message;
