# Data Structures (DSA) Exam Setup Guide

## 📋 System Overview

### Database Tables Created:
1. **`2ndcsedsa`** - Student verification table
   - 218 roll numbers (160525733001 to 160525733310)
   - Unique code: `dSA771`
   
2. **`2nddsaresults`** - Exam results table
   - Stores: correct answers, wrong answers, marks, percentage
   - Max marks: 5 (for 10 questions)

### Question Bank:
- **Total Questions:** 40 MCQs
- **Topics:** Linked Lists, Stacks, Queues, Hashing, Trees, Tree Traversals, Binary Search Trees (BST), AVL Trees
- **Random Selection:** 10 questions per exam

---

## 🚀 Setup Instructions

### Step 1: Run SQL in Neon Console

1. Go to: https://console.neon.tech
2. Select your database: `neondb`
3. Open **SQL Editor**
4. Copy and paste the entire content from: `setup-dsa-database.sql`
5. Click **Run** to execute

This will:
- Drop old DSA tables (if exist)
- Create new tables with proper structure
- Insert all 218 roll numbers with code `dSA771`

### Step 2: Verify Database Setup

Run this query in Neon SQL Editor:

```sql
-- Check if tables are created
SELECT table_name FROM information_schema.tables 
WHERE table_name IN ('2ndcsedsa', '2nddsaresults');

-- Check student count
SELECT COUNT(*) as total_students FROM "2ndcsedsa";

-- View first 5 students
SELECT * FROM "2ndcsedsa" LIMIT 5;
```

Expected output:
- 2 tables found
- 218 students
- Roll numbers starting from 160525733001
- All with unique_code = 'dSA771'

---

## 🌐 Access the Exam

### Local Testing:
1. Server should be running: http://localhost:3000
2. Open: http://localhost:3000/index.html
3. Test credentials:
   - Roll: `160525733001`
   - Code: `dSA771` (case-insensitive)

### Production (Vercel):
- URL: https://mcq-seven-delta.vercel.app
- Same credentials work on production

---

## 🎯 How It Works

### Smart Subject Detection:
The system automatically detects which exam based on the unique code entered:

| Unique Code | Subject | Tables Used | Questions |
|-------------|---------|-------------|-----------|
| `dm771` | Discrete Mathematics | 2ndyearstudentscse, 2ndyearstudentscseresults | 50 DM MCQs (10 random) |
| `dSA771` | Data Structures | 2ndcsedsa, 2nddsaresults | 40 DSA MCQs (10 random) |

### Login Flow:
1. Student enters Roll Number + Unique Code
2. System detects subject from unique code
3. Validates against correct table (2ndcsedsa for DSA)
4. Loads correct question bank (dsaQuestions)
5. Updates verified_at timestamp
6. Starts exam in fullscreen

### Exam Flow:
1. **Random Selection:** 10 questions randomly from 40 DSA questions
2. **Navigation:** Previous/Next buttons
3. **Answer Tracking:** All answers stored
4. **Submission:** Final submit button on question 10

### Marks Calculation:
```
Marks = (Correct Answers / 10) × 5
Percentage = (Correct Answers / 10) × 100
```

Examples:
- 10/10 correct = 5.00 marks (100%)
- 8/10 correct = 4.00 marks (80%)
- 5/10 correct = 2.50 marks (50%)

### Results Storage:
Data saved in `2nddsaresults`:
- Roll number
- Correct answer count
- Wrong answer count
- Total questions (10)
- Marks (out of 5)
- Percentage
- Detailed user answers (JSON)
- Timestamp

---

## 📊 View Results

### Query to see all DSA results:
```sql
SELECT 
    roll_number,
    correct_answers,
    wrong_answers,
    marks,
    percentage,
    created_at
FROM "2nddsaresults"
ORDER BY marks DESC, created_at DESC;
```

### Query to see top performers:
```sql
SELECT 
    roll_number,
    marks,
    percentage
FROM "2nddsaresults"
WHERE marks >= 4.0
ORDER BY marks DESC;
```

### Query to check student's result:
```sql
SELECT * FROM "2nddsaresults"
WHERE roll_number = '160525733001';
```

### Compare DM and DSA results for a student:
```sql
SELECT 
    'DM' as subject,
    marks,
    percentage,
    created_at
FROM "2ndyearstudentscseresults"
WHERE roll_number = '160525733001'

UNION ALL

SELECT 
    'DSA' as subject,
    marks,
    percentage,
    created_at
FROM "2nddsaresults"
WHERE roll_number = '160525733001'

ORDER BY created_at DESC;
```

---

## 🎓 Question Coverage

### Part 1: Linked Lists, Stacks, Queues, Hashing (20 Questions)
- Q1-10: Linked Lists
- Q11-15: Stacks & Queues
- Q16-20: Hashing

### Part 2: Trees and Tree Traversals (10 Questions)
- Q21-30: Tree basics and traversals

### Part 3: Binary Search Trees and AVL Trees (10 Questions)
- Q31-35: BST
- Q36-40: AVL Trees

---

## 🔧 Troubleshooting

### Issue: "Invalid unique code"
**Solution:** 
- Make sure you type: `dSA771` (case doesn't matter)
- NOT: `dsa771`, `DSA771`, or any other variation (system accepts all)
- Verify in database: `SELECT DISTINCT unique_code FROM "2ndcsedsa";`

### Issue: "Invalid credentials"
**Solution:**
- Check roll number format (e.g., 160525733001)
- Verify unique code is exactly: `dSA771`
- Ensure database tables are created
- Run: `SELECT * FROM "2ndcsedsa" WHERE roll_number = '160525733001';`

### Issue: Results not saving
**Solution:**
- Check server logs
- Verify `2nddsaresults` table exists
- Ensure roll number exists in `2ndcsedsa` table

---

## 📁 File Structure

```
mcq/
├── dsa-questions.js           # 40 DSA MCQ question bank
├── dm-questions.js            # 50 DM MCQ question bank
├── setup-dsa-database.sql     # DSA database setup script
├── setup-dm-database.sql      # DM database setup script
├── index.html                 # Main exam interface
├── exam-script.js             # Exam logic with subject detection
├── exam-styles.css            # Responsive styles
├── server.js                  # Backend API
├── db-client.js               # Database client wrapper
└── backimage.png             # Background image
```

---

## ✅ Verification Checklist

**DSA Exam:**
- [ ] SQL script executed successfully
- [ ] 218 students visible in `2ndcsedsa`
- [ ] All have unique_code = 'dSA771'
- [ ] Can login with Roll: 160525733001, Code: dSA771
- [ ] System loads 10 DSA questions
- [ ] Can navigate and answer questions
- [ ] Submit works correctly
- [ ] Results display marks out of 5
- [ ] Results saved in `2nddsaresults` table

**Multi-Subject Support:**
- [ ] Login with dm771 → DM questions load
- [ ] Login with dSA771 → DSA questions load
- [ ] Each subject saves to its own results table
- [ ] No conflicts between subjects

---

## 🚀 Both Exams Now Available!

### Discrete Mathematics (DM)
- **Code:** `dm771`
- **Questions:** 50 (10 random)
- **Tables:** 2ndyearstudentscse, 2ndyearstudentscseresults

### Data Structures (DSA)
- **Code:** `dSA771`
- **Questions:** 40 (10 random)
- **Tables:** 2ndcsedsa, 2nddsaresults

**Same students can take both exams with different codes!**

---

**System Status:** ✅ Ready to Use  
**Last Updated:** November 17, 2026
