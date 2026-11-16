# 🚀 Quick Deployment Guide

## 1️⃣ Get Your Neon Database URL

1. Go to https://console.neon.tech
2. Create a project (or use existing)
3. Copy your connection string:
   ```
   postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require
   ```

## 2️⃣ Run SQL Scripts

In Neon SQL Editor, run these files in order:
1. `CREATE_STUDENTS_TABLE.sql`
2. `CREATE_CSE_TABLES.sql` (and other department tables you need)
3. `ADD_NEW_STUDENTS.sql`

## 3️⃣ Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/isl-exam-portal.git
git push -u origin main
```

## 4️⃣ Deploy to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Add Environment Variable:
   - **Key:** `NEON_DATABASE_URL`
   - **Value:** (your connection string from step 1)
5. Click "Deploy"

## 5️⃣ Test

Open your Vercel URL and test login!

---

**That's it! 🎉**

For detailed instructions, see `VERCEL_DEPLOYMENT.md` and `ENV_VARIABLES.md`.
