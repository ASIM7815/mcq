# Discrete Mathematics Exam Setup Guide

## 📋 System Overview

### Database Tables Created:
1. **`2ndyearstudentscse`** - Student verification table
   - 218 roll numbers (160525733001 to 160525733310)
   - Unique code: `dm771`
   
2. **`2ndyearstudentscseresults`** - Exam results table
   - Stores: correct answers, wrong answers, marks, percentage
   - Max marks: 5 (for 10 questions)

### Question Bank:
- **Total Questions:** 50 MCQs
- **Topics:** Counting Principles, Permutations, Combinations, Binomial Theorem, Pigeonhole Principle, Recurrence Relations, Generating Functions
- **Random Selection:** 10 questions per exam
- **Corrected Answer:** Question 9 Part 1 = 30 (not 20)

---

## 🚀 Setup Instructions

### Step 1: Run SQL in Neon Console

1. Go to: https://console.neon.tech
2. Select your database: `neondb`
3. Open **SQL Editor**
4. Copy and paste the entire content from: `setup-dm-database.sql`
5. Click **Run** to execute

This will:
- Drop old tables (if exist)
- Create new tables with proper structure
- Insert all 218 roll numbers with code `dm771`

### Step 2: Verify Database Setup

Run this query in Neon SQL Editor:

```sql
-- Check if tables are created
SELECT table_name FROM information_schema.tables 
WHERE table_name IN ('2ndyearstudentscse', '2ndyearstudentscseresults');

-- Check student count
SELECT COUNT(*) as total_students FROM "2ndyearstudentscse";

-- View first 5 students
SELECT * FROM "2ndyearstudentscse" LIMIT 5;
```

Expected output:
- 2 tables found
- 218 students
- Roll numbers starting from 160525733001

---

## 🌐 Access the Exam

### Local Testing:
1. Start server: `node server.js`
2. Open: http://localhost:3000/dm-exam.html
3. Test credentials:
   - Roll: `160525733001`
   - Code: `dm771`

### Production (Vercel):
- URL: https://mcq-seven-delta.vercel.app/dm-exam.html
- Make sure `DATABASE_URL` environment variable is set in Vercel

---

## 🎯 Exam Logic

### Login Flow:
1. Student enters Roll Number + Unique Code (`dm771`)
2. System validates against `2ndyearstudentscse` table
3. Updates `verified_at` timestamp
4. Starts exam

### Exam Flow:
1. **Random Selection:** 10 questions randomly selected from 50
2. **Navigation:** Previous/Next buttons to move between questions
3. **Answer Tracking:** All answers stored in memory
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
- 0/10 correct = 0.00 marks (0%)

### Results Storage:
Data saved in `2ndyearstudentscseresults`:
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

### Query to see all results:
```sql
SELECT 
    roll_number,
    correct_answers,
    wrong_answers,
    marks,
    percentage,
    created_at
FROM "2ndyearstudentscseresults"
ORDER BY marks DESC, created_at DESC;
```

### Query to see top performers:
```sql
SELECT 
    roll_number,
    marks,
    percentage
FROM "2ndyearstudentscseresults"
WHERE marks >= 4.0
ORDER BY marks DESC;
```

### Query to check student's result:
```sql
SELECT * FROM "2ndyearstudentscseresults"
WHERE roll_number = '160525733001';
```

---

## 🎨 Features

### UI/UX:
- ✅ Math-friendly fonts (Georgia, Cambria Math)
- ✅ MathJax support for complex equations
- ✅ Superscripts/subscripts rendering
- ✅ Color-coded results (Green > 80%, Orange > 60%, Red < 60%)
- ✅ Gradient design with purple theme
- ✅ Responsive layout
- ✅ Progress counter

### Security:
- ✅ Roll number validation
- ✅ Unique code verification
- ✅ Active status check
- ✅ Timestamp tracking
- ✅ Results stored securely in database

---

## 🔧 Troubleshooting

### Issue: "Invalid credentials"
**Solution:** 
- Check roll number format (e.g., 160525733001)
- Verify unique code is exactly: `dm771`
- Ensure database tables are created

### Issue: "System not ready"
**Solution:**
- Check if server is running: `node server.js`
- Verify DATABASE_URL in .env file
- Test database connection: http://localhost:3000/api/health

### Issue: Results not saving
**Solution:**
- Check server logs for errors
- Verify `2ndyearstudentscseresults` table exists
- Ensure roll number exists in `2ndyearstudentscse` table

---

## 📁 File Structure

```
mcq/
├── dm-exam.html              # Exam interface
├── dm-exam.js                # Exam logic
├── dm-questions.js           # 50 MCQ question bank
├── setup-dm-database.sql     # Database setup script
├── server.js                 # Backend API (updated)
├── db-client.js              # Database client wrapper
├── styles.css                # Shared styles
└── .env                      # DATABASE_URL (not in git)
```

---

## ✅ Verification Checklist

- [ ] SQL script executed successfully
- [ ] 218 students visible in `2ndyearstudentscse`
- [ ] Can login with test credentials
- [ ] 10 random questions displayed
- [ ] Can navigate between questions
- [ ] Answers are being tracked
- [ ] Submit button works on question 10
- [ ] Results display correctly
- [ ] Results saved in database
- [ ] Math notation renders properly

---

## 🚀 Production Deployment (Vercel)

### Already Done:
✅ Code pushed to GitHub
✅ Vercel auto-deploys on push
✅ Static files configured in vercel.json

### Required Action:
1. Add environment variable in Vercel:
   - Key: `DATABASE_URL`
   - Value: Your Neon connection string
   
2. Redeploy (automatic after env var added)

3. Test: https://mcq-seven-delta.vercel.app/dm-exam.html

---

## 📞 Support

If you encounter any issues:
1. Check server logs: `node server.js`
2. Check browser console: F12 → Console tab
3. Verify database in Neon console
4. Test API health: `/api/health`

---

**System Status:** ✅ Ready to Use
**Last Updated:** November 17, 2026
