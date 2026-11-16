# 🔐 Environment Variables Guide

This document lists ALL environment variables needed for the ISL Exam Portal.

---

## 📋 Required Variables

### 1. NEON_DATABASE_URL

**Purpose:** Connects your application to Neon PostgreSQL database

**Where to get it:**
1. Go to https://console.neon.tech
2. Login and select your project
3. Click "Connection Details"
4. Copy the **Connection String** (NOT the pooled connection)

**Format:**
```
postgresql://username:password@ep-xxxxx-xxxx.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**Example:**
```env
NEON_DATABASE_URL=postgresql://neondb_owner:npg_ABC123xyz@ep-late-union-bd6zxw2g.us-east-2.aws.neon.tech/neondb?sslmode=require
```

**Add to Vercel:**
1. Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add variable:
   - **Key:** `NEON_DATABASE_URL`
   - **Value:** (paste your connection string)
   - **Environments:** Check all (Production, Preview, Development)
3. Click "Save"

---

## 🎯 Optional Variables (S3 Backup)

These are ONLY needed if you want to backup exam results to AWS S3.

### 2. AWS_ACCESS_KEY_ID

**Purpose:** AWS authentication for S3 uploads

**Where to get it:**
1. Login to AWS Console: https://console.aws.amazon.com
2. Go to IAM → Users
3. Create new user or select existing
4. Go to "Security credentials"
5. Click "Create access key"
6. Save the **Access Key ID**

**Example:**
```env
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
```

### 3. AWS_SECRET_ACCESS_KEY

**Purpose:** AWS secret key for authentication

**Where to get it:**
- Same place as Access Key ID
- **IMPORTANT:** You can only see this ONCE when creating the key
- Store it securely

**Example:**
```env
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

### 4. AWS_REGION

**Purpose:** AWS region where your S3 bucket is located

**Common values:**
- `us-east-1` - US East (N. Virginia)
- `us-east-2` - US East (Ohio)
- `us-west-1` - US West (N. California)
- `us-west-2` - US West (Oregon)
- `ap-south-1` - Asia Pacific (Mumbai)
- `ap-southeast-1` - Asia Pacific (Singapore)

**Example:**
```env
AWS_REGION=us-east-2
```

### 5. AWS_S3_BUCKET

**Purpose:** Name of your S3 bucket for storing backups

**Where to get it:**
1. Go to AWS S3 Console: https://s3.console.aws.amazon.com
2. Click "Create bucket"
3. Enter bucket name (must be globally unique)
4. Select region (same as AWS_REGION above)
5. Keep default settings
6. Click "Create bucket"

**Example:**
```env
AWS_S3_BUCKET=isl-exam-backups
```

---

## 📝 Complete .env File Example

Create a `.env` file in your project root (for local testing only):

```env
# Neon Database (REQUIRED)
NEON_DATABASE_URL=postgresql://neondb_owner:your_password@ep-xxxxx.us-east-2.aws.neon.tech/neondb?sslmode=require

# AWS S3 (OPTIONAL - only if you want backups)
AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
AWS_REGION=us-east-2
AWS_S3_BUCKET=isl-exam-backups

# Application
NODE_ENV=production
```

**⚠️ SECURITY WARNING:**
- NEVER commit `.env` file to Git
- NEVER share your credentials publicly
- `.env` is already in `.gitignore`

---

## 🚀 Adding to Vercel

### Method 1: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Select your project
3. Click "Settings" tab
4. Click "Environment Variables" in sidebar
5. For EACH variable:
   - Click "Add"
   - Enter **Key** (e.g., `NEON_DATABASE_URL`)
   - Enter **Value** (paste the actual value)
   - Select environments: ✅ Production ✅ Preview ✅ Development
   - Click "Save"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Add environment variables
vercel env add NEON_DATABASE_URL production
# Paste your value when prompted

vercel env add AWS_ACCESS_KEY_ID production
# Paste your value when prompted

# etc...
```

### Method 3: Import from .env file

```bash
# Install Vercel CLI
npm install -g vercel

# Link your project
vercel link

# Pull existing env vars (if any)
vercel env pull

# Add your variables to .env.local
# Then push to Vercel
vercel env add NEON_DATABASE_URL production < .env.local
```

---

## ✅ Verification Checklist

After adding environment variables:

- [ ] `NEON_DATABASE_URL` added ✅
- [ ] All environments selected (Production, Preview, Development) ✅
- [ ] Redeployed application after adding variables ✅
- [ ] Opened deployment URL ✅
- [ ] Checked browser console - no connection errors ✅
- [ ] Tested login with a valid student ✅
- [ ] Exam loads successfully ✅

---

## 🐛 Troubleshooting

### Error: "Database connection failed"

**Check:**
1. ✅ Variable name is exactly `NEON_DATABASE_URL` (case-sensitive)
2. ✅ No extra spaces before/after the connection string
3. ✅ Connection string includes `?sslmode=require` at the end
4. ✅ Neon database is not paused (check Neon Console)
5. ✅ Redeployed after adding variables

**Test connection:**
```bash
# In Vercel logs, you should see successful database queries
# Check: Vercel Dashboard → Deployments → View Function Logs
```

### Error: "process.env.NEON_DATABASE_URL is undefined"

**Solution:**
1. Variables were added AFTER deployment
2. You MUST redeploy after adding environment variables
3. Go to: Deployments → Latest → ... → Redeploy

### S3 Upload Fails (Optional Feature)

**Check:**
1. ✅ AWS credentials are correct
2. ✅ S3 bucket exists
3. ✅ Bucket region matches `AWS_REGION`
4. ✅ IAM user has `s3:PutObject` permission
5. ✅ Bucket policy allows uploads

---

## 🔑 Security Best Practices

1. ✅ **Never commit** `.env` to Git
2. ✅ **Use different credentials** for development and production
3. ✅ **Rotate keys** periodically (every 90 days)
4. ✅ **Limit IAM permissions** - only grant what's needed
5. ✅ **Enable MFA** on AWS account
6. ✅ **Monitor usage** - check CloudWatch/Neon logs

---

## 📞 Where to Get Help

| Issue | Resource |
|-------|----------|
| Neon Database | https://neon.tech/docs |
| AWS S3 | https://docs.aws.amazon.com/s3/ |
| Vercel Environment Variables | https://vercel.com/docs/environment-variables |
| Vercel Deployment | https://vercel.com/docs |

---

## 🎯 Minimum Required Setup

To get started quickly, you ONLY need:

```env
NEON_DATABASE_URL=your_neon_connection_string
```

That's it! The exam portal will work without S3 backup.

---

**Last Updated:** 2026-11-16
