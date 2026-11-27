-- Verification Query: Check if all results tables exist
-- Run this in Neon to verify tables are created

-- Check all results tables
SELECT 
    table_name,
    table_schema
FROM information_schema.tables 
WHERE table_name LIKE '%results%'
  AND table_schema = 'public'
ORDER BY table_name;

-- Count students in each AIDS table
SELECT '3rdaidsai students' as description, COUNT(*) as count FROM "3rdaidsai"
UNION ALL
SELECT '3rdaidsiot students', COUNT(*) FROM "3rdaidsiot"
UNION ALL
SELECT '3rdaidsalc students', COUNT(*) FROM "3rdaidsalc"
UNION ALL
SELECT '2ndaidspy students', COUNT(*) FROM "2ndaidspy"
UNION ALL
SELECT '2ndaidsdsa students', COUNT(*) FROM "2ndaidsdsa"
UNION ALL
SELECT '2ndaidsdm students', COUNT(*) FROM "2ndaidsdm";

-- Check if results tables exist (this will error if they don't)
SELECT COUNT(*) as ai_results FROM "3rdaidsairesults";
SELECT COUNT(*) as iot_results FROM "3rdaidsiotresults";
SELECT COUNT(*) as alc_results FROM "3rdaidsalcresults";
