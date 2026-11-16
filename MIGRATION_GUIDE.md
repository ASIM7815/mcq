# Migration Guide: Supabase → Neon + S3

This guide explains how to migrate your exam system from Supabase to Neon Database with optional S3 storage.

## ✅ What's Changed

| Component | Before | After |
|-----------|--------|-------|
| Database | Supabase PostgreSQL | Neon Serverless PostgreSQL |
| Storage | Supabase Storage | AWS S3 (optional) |
| Auth | Supabase Client | Neon REST API |
| Config File | `supabase-config.js` | `neon-config.js` |

## 🔄 Migration Steps

### Step 1: Set Up Neon Database

1. **Your Neon Database is already created:**
   - URL: `postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require`
   - REST API: `https://ep-late-union-bd6zxw2g.apirest.c-8.us-east-2.aws.neon.tech/neondb/rest/v1`

2. **Run SQL Scripts in Neon Console:**
   ```bash
   # Create all tables
   CREATE_STUDENTS_TABLE.sql
   CREATE_CSE_TABLES.sql
   CREATE_AIDS_TABLES.sql
   CREATE_ECE_TABLES.sql
   CREATE_CIVIL_TABLES.sql
   CREATE_IT_TABLES.sql
   CREATE_MBA_REGULAR_TABLES.sql
   # ... and all other CREATE_*.sql files
   ```

3. **Add Student Data:**
   ```bash
   ADD_NEW_STUDENTS.sql
   ADD_STOCK_MARKET_STUDENT.sql
   # ... other ADD_*.sql files
   ```

4. **Set Up Security Policies:**
   ```bash
   FIX_RLS_POLICIES_ALL_TABLES.sql
   FIX_RLS_POLICIES_F_TABLES.sql
   ```

### Step 2: Export Data from Supabase (If Needed)

If you have existing data in Supabase:

```bash
# Using Supabase CLI
supabase db dump > supabase_dump.sql

# Or use pg_dump directly
pg_dump "postgresql://postgres:[PASSWORD]@db.wofjapxwmowdhxchcjqs.supabase.co:5432/postgres" > supabase_data.sql
```

### Step 3: Import Data to Neon

```bash
# Using psql
psql "postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require" < supabase_data.sql

# Or use Neon Console's SQL Editor
# Copy and paste your SQL directly
```

### Step 4: Update Frontend Configuration

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```bash
   cp .env.example .env
   ```

3. **Update `.env` with your credentials:**
   ```env
   NEON_DATABASE_URL=postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require
   NEON_REST_API_URL=https://ep-late-union-bd6zxw2g.apirest.c-8.us-east-2.aws.neon.tech/neondb/rest/v1
   ```

4. **HTML files already updated:**
   - ✅ `index.html` now loads `neon-config.js` instead of Supabase
   - ✅ All references updated

### Step 5: Test the Migration

1. **Start local server:**
   ```bash
   npm run dev
   ```

2. **Test authentication:**
   - Go to `http://localhost:8000`
   - Try logging in with a test student
   - Verify roll number and unique code work

3. **Test exam flow:**
   - Complete a full exam
   - Verify results are saved to Neon database
   - Check database for the result entry

4. **Verify in Neon Console:**
   ```sql
   -- Check if student exists
   SELECT * FROM students WHERE roll_number = 'TEST123';
   
   -- Check if result was saved
   SELECT * FROM exam_results WHERE roll_number = 'TEST123';
   ```

### Step 6: Set Up S3 Storage (Optional)

S3 is optional and used for backup storage of exam results.

1. **Create S3 Bucket:**
   - Go to AWS Console
   - Create bucket named `assets` (or your preferred name)
   - Enable versioning (recommended)
   - Set appropriate permissions

2. **Create IAM User:**
   - Create user with S3 access
   - Get Access Key ID and Secret Access Key
   - Update `.env`:
     ```env
     AWS_ACCESS_KEY_ID=your_access_key
     AWS_SECRET_ACCESS_KEY=your_secret_key
     AWS_REGION=us-east-2
     AWS_S3_BUCKET=assets
     ```

3. **Enable S3 in code (optional):**
   ```html
   <!-- Add to index.html if you want S3 backup -->
   <script src="./s3-storage.js"></script>
   ```

### Step 7: Deploy to Production

**Option 1: Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# NEON_DATABASE_URL
# NEON_REST_API_URL
```

**Option 2: Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Option 3: Any Static Host**
- Upload all files to your web server
- Ensure `.env` is NOT uploaded (use server environment variables)

## 🔍 Verification Checklist

- [ ] Neon database tables created
- [ ] Student data imported
- [ ] Security policies applied
- [ ] Frontend updated to use `neon-config.js`
- [ ] Environment variables configured
- [ ] Local testing successful
- [ ] Authentication works
- [ ] Exam submission works
- [ ] Results saved to Neon
- [ ] Deployed to production
- [ ] Production testing complete

## 🌐 Key Advantages of Neon

### 1. **Works Everywhere**
- ✅ Any WiFi network
- ✅ Mobile data (4G/5G)
- ✅ Public networks
- ✅ No VPN needed
- ✅ No CORS issues

### 2. **Auto-Scaling**
- Automatically scales with usage
- Pay only for what you use
- No database maintenance

### 3. **REST API**
- Direct browser access via HTTPS
- No connection pooling issues
- Simple fetch() calls

### 4. **Performance**
- Fast connection times
- CDN-like edge caching
- Low latency

## 🔧 API Comparison

### Before (Supabase):
```javascript
const { data, error } = await supabaseClient
  .from('students')
  .select('*')
  .eq('roll_number', rollNumber)
  .single();
```

### After (Neon):
```javascript
const { data, error } = await neonClient
  .from('students')
  .select('*')
  .eq('roll_number', rollNumber)
  .single()
  .execute();
```

**Note:** The API is nearly identical! Only minor changes needed.

## 🐛 Troubleshooting

### Issue: "Database connection not available"
**Solution:**
- Check NEON_REST_API_URL is correct
- Verify internet connection
- Check Neon database is not suspended (free tier may sleep)

### Issue: "Invalid credentials"
**Solution:**
- Verify student exists in database:
  ```sql
  SELECT * FROM students WHERE roll_number = 'YOUR_ROLL_NO';
  ```
- Check `is_active` is `true`
- Verify `unique_code` matches

### Issue: "Exam results not saving"
**Solution:**
- Check browser console for errors
- Verify results table exists
- Check table permissions (RLS policies)

### Issue: "CORS error"
**Solution:**
- Neon REST API shouldn't have CORS issues
- If you see this, you might be using wrong endpoint
- Use REST API URL, not connection string in browser

## 📊 Database Differences

| Feature | Supabase | Neon |
|---------|----------|------|
| Access Method | JS Client | REST API |
| Real-time | ✅ Built-in | ❌ Not available |
| Storage | ✅ Built-in | Use S3 |
| Auth | ✅ Built-in | Custom (via DB) |
| Edge Functions | ✅ Yes | Use Vercel/Netlify |
| Auto-scaling | Limited | ✅ Full auto-scale |
| Pricing | Flat rate | Pay-per-use |

## 🎯 Best Practices

1. **Always use prepared statements** (prevents SQL injection)
2. **Enable RLS policies** on all tables
3. **Use connection pooling** in Neon settings
4. **Monitor usage** in Neon console
5. **Backup regularly** (S3 or Neon backups)
6. **Test on multiple devices** before production
7. **Set up error logging** for debugging

## 📞 Support Resources

- **Neon Documentation:** https://neon.tech/docs
- **AWS S3 Guide:** https://aws.amazon.com/s3/getting-started/
- **PostgreSQL Docs:** https://www.postgresql.org/docs/

## 🎉 Migration Complete!

Once all steps are verified, your exam system is successfully migrated to Neon Database! 

Your system now:
- ✅ Works on any network
- ✅ Scales automatically
- ✅ Has optional S3 backup
- ✅ Maintains all features
- ✅ Improved reliability
