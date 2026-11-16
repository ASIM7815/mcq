# 🚀 Vercel Deployment Guide

## Prerequisites

1. ✅ Neon Database account: https://neon.tech
2. ✅ Vercel account: https://vercel.com
3. ✅ GitHub account (optional but recommended)
4. ✅ Git installed on your computer

---

## Step 1: Setup Neon Database

### 1.1 Create Neon Project
1. Go to https://console.neon.tech
2. Click "Create Project"
3. Choose a name (e.g., "isl-exam-portal")
4. Select region closest to your users (e.g., US East, Asia)
5. Click "Create Project"

### 1.2 Get Database Connection String
1. In Neon Console, click on your project
2. Go to "Connection Details"
3. Copy the **Connection String** (starts with `postgresql://`)
4. It looks like:
   ```
   postgresql://username:password@ep-xxxx-yyyy.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```

### 1.3 Run SQL Scripts
1. In Neon Console, click "SQL Editor"
2. Run these scripts IN ORDER:

```sql
-- 1. Create students table
-- Copy and paste content from CREATE_STUDENTS_TABLE.sql

-- 2. Create department tables
-- Run CREATE_CSE_TABLES.sql
-- Run CREATE_IT_TABLES.sql
-- Run CREATE_AIDS_TABLES.sql
-- etc. for all departments you need

-- 3. Add students
-- Run ADD_NEW_STUDENTS.sql

-- 4. Fix RLS policies (optional but recommended)
-- Run FIX_RLS_POLICIES_ALL_TABLES.sql
```

---

## Step 2: Push to GitHub (Recommended)

### 2.1 Initialize Git Repository
```bash
cd /path/to/mcq
git init
git add .
git commit -m "Initial commit - ISL Exam Portal"
```

### 2.2 Create GitHub Repository
1. Go to https://github.com/new
2. Create repository name: `isl-exam-portal`
3. DO NOT initialize with README (we already have one)
4. Click "Create repository"

### 2.3 Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/isl-exam-portal.git
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Option A: Deploy from GitHub (Recommended)

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your GitHub repository `isl-exam-portal`
4. Vercel will auto-detect the project settings
5. Click "Deploy"

### Option B: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

---

## Step 4: Configure Environment Variables in Vercel

### 4.1 Go to Project Settings
1. In Vercel dashboard, select your project
2. Go to "Settings" → "Environment Variables"

### 4.2 Add Required Variables

Add these environment variables:

#### **REQUIRED:**

| Variable Name | Value | Example |
|--------------|-------|---------|
| `NEON_DATABASE_URL` | Your Neon connection string | `postgresql://user:pass@ep-xxx.neon.tech/neondb?sslmode=require` |

#### **OPTIONAL (S3 Backup):**

| Variable Name | Value | Where to Get |
|--------------|-------|--------------|
| `AWS_ACCESS_KEY_ID` | Your AWS access key | AWS IAM Console |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret key | AWS IAM Console |
| `AWS_REGION` | AWS region | e.g., `us-east-2` |
| `AWS_S3_BUCKET` | S3 bucket name | e.g., `isl-exam-backups` |

### 4.3 Apply to All Environments
- Check "Production", "Preview", and "Development"
- Click "Save"

---

## Step 5: Redeploy

After adding environment variables:
1. Go to "Deployments" tab
2. Click "..." on latest deployment
3. Click "Redeploy"
4. Select "Use existing Build Cache"
5. Click "Redeploy"

---

## Step 6: Test Your Deployment

### 6.1 Get Vercel URL
Your app will be deployed at:
```
https://your-project-name.vercel.app
```

### 6.2 Test Connection
1. Open your Vercel URL
2. It should show the login page
3. Check browser console (F12) for errors

### 6.3 Test Login
Try logging in with a test student:
- Roll Number: (from your database)
- Unique Code: (from your database)

---

## Environment Variables Summary

### Copy these to Vercel:

```env
# REQUIRED
NEON_DATABASE_URL=postgresql://username:password@ep-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require

# OPTIONAL (if using S3)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-2
AWS_S3_BUCKET=your-bucket-name
```

---

## Custom Domain (Optional)

### Add Custom Domain in Vercel
1. Go to "Settings" → "Domains"
2. Add your domain (e.g., `exam.islec.edu.in`)
3. Follow DNS configuration instructions
4. Wait for DNS propagation (5-30 minutes)

---

## Troubleshooting

### "Database connection failed"
- ✅ Check `NEON_DATABASE_URL` is correct in Vercel
- ✅ Ensure no extra spaces in the connection string
- ✅ Verify Neon database is active (not paused)

### "Method not allowed"
- ✅ Check API route exists at `/api/db-query.js`
- ✅ Redeploy after adding environment variables

### "Invalid credentials"
- ✅ Verify students exist in database
- ✅ Run SQL query: `SELECT * FROM cse_students;`
- ✅ Check roll number and unique code match exactly

### "Questions not loading"
- ✅ Check browser console for JavaScript errors
- ✅ Verify question files are included in `index.html`
- ✅ Clear browser cache and hard refresh (Ctrl+F5)

---

## Quick Deployment Checklist

- [ ] Neon Database created
- [ ] SQL scripts executed
- [ ] Students added to database
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Application redeployed
- [ ] Login tested
- [ ] Exam flow tested
- [ ] Results saving tested

---

## 🎉 You're Done!

Your exam portal is now live at:
```
https://your-project-name.vercel.app
```

Share this URL with your students! 🚀

---

## Support

- **Neon Docs:** https://neon.tech/docs
- **Vercel Docs:** https://vercel.com/docs
- **Issues:** Check browser console and Vercel logs
