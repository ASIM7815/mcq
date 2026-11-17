-- Performance Optimization for High Concurrency (400+ simultaneous users)
-- Add indexes to speed up writes and prevent duplicate submissions

-- ============================================
-- DM EXAM INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_dm_results_rollno ON "2ndyearstudentscseresults"(roll_number);
CREATE INDEX IF NOT EXISTS idx_dm_results_created ON "2ndyearstudentscseresults"(created_at);

-- ============================================
-- DSA EXAM INDEXES
-- ============================================
CREATE INDEX IF NOT EXISTS idx_dsa_results_rollno ON "2nddsaresults"(roll_number);
CREATE INDEX IF NOT EXISTS idx_dsa_results_created ON "2nddsaresults"(created_at);

-- ============================================
-- ALC EXAM INDEXES (Already added in setup)
-- ============================================
-- Already has: idx_alc_roll_number, idx_alc_results_roll_number, idx_alc_created_at

-- ============================================
-- CS EXAM INDEXES (Already added in setup)
-- ============================================
-- Already has: idx_cs_roll_number, idx_cs_results_roll_number, idx_cs_created_at

-- ============================================
-- SE EXAM INDEXES (Already added in setup)
-- ============================================
-- Already has: idx_se_roll_number, idx_se_results_roll_number, idx_se_created_at

-- ============================================
-- PREVENT DUPLICATE SUBMISSIONS
-- Add unique constraint to prevent same student submitting twice
-- ============================================

-- DM: Prevent duplicate submissions
ALTER TABLE "2ndyearstudentscseresults" 
DROP CONSTRAINT IF EXISTS unique_dm_submission;

ALTER TABLE "2ndyearstudentscseresults" 
ADD CONSTRAINT unique_dm_submission UNIQUE (roll_number);

-- DSA: Prevent duplicate submissions
ALTER TABLE "2nddsaresults" 
DROP CONSTRAINT IF EXISTS unique_dsa_submission;

ALTER TABLE "2nddsaresults" 
ADD CONSTRAINT unique_dsa_submission UNIQUE (roll_number);

-- ALC: Prevent duplicate submissions
ALTER TABLE "3rdcsealcresults" 
DROP CONSTRAINT IF EXISTS unique_alc_submission;

ALTER TABLE "3rdcsealcresults" 
ADD CONSTRAINT unique_alc_submission UNIQUE (roll_number);

-- CS: Prevent duplicate submissions
ALTER TABLE "3rdcsecsresults" 
DROP CONSTRAINT IF EXISTS unique_cs_submission;

ALTER TABLE "3rdcsecsresults" 
ADD CONSTRAINT unique_cs_submission UNIQUE (roll_number);

-- SE: Prevent duplicate submissions
ALTER TABLE "3rdcsesesresults" 
DROP CONSTRAINT IF EXISTS unique_se_submission;

ALTER TABLE "3rdcsesesresults" 
ADD CONSTRAINT unique_se_submission UNIQUE (roll_number);

-- ============================================
-- VERIFY INDEXES
-- ============================================
SELECT 
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE schemaname = 'public'
AND (
    tablename LIKE '%results%' 
    OR tablename LIKE '%students%'
    OR tablename LIKE '%alc%'
    OR tablename LIKE '%cs%'
    OR tablename LIKE '%se%'
)
ORDER BY tablename, indexname;

-- ============================================
-- ANALYZE TABLES FOR QUERY OPTIMIZATION
-- ============================================
ANALYZE "2ndyearstudentscse";
ANALYZE "2ndyearstudentscseresults";
ANALYZE "2ndcsedsa";
ANALYZE "2nddsaresults";
ANALYZE "3rdcsealc";
ANALYZE "3rdcsealcresults";
ANALYZE "3rdcsecs";
ANALYZE "3rdcsecsresults";
ANALYZE "3rdcsese";
ANALYZE "3rdcsesesresults";

SELECT 'Performance indexes and constraints added successfully!' as status;
