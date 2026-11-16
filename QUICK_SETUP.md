# 🚀 Quick Setup Guide

Get your exam system running in 5 minutes!

## Step 1: Install Dependencies (1 minute)

```bash
npm install
```

## Step 2: Configure Environment (1 minute)

```bash
# Copy example environment file
cp .env.example .env
```

Your `.env` is already pre-configured with Neon credentials:
```env
NEON_DATABASE_URL=postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require
NEON_REST_API_URL=https://ep-late-union-bd6zxw2g.apirest.c-8.us-east-2.aws.neon.tech/neondb/rest/v1
```

## Step 3: Set Up Database (2 minutes)

### Option A: Using Neon Console (Recommended)

1. Go to [Neon Console](https://console.neon.tech/)
2. Select your database: `ep-late-union-bd6zxw2g`
3. Open SQL Editor
4. Run scripts in this order:

```sql
-- 1. Create basic tables
Run: CREATE_STUDENTS_TABLE.sql
Run: CREATE_CSE_TABLES.sql
Run: CREATE_AIDS_TABLES.sql
Run: CREATE_IT_TABLES.sql
Run: CREATE_MBA_REGULAR_TABLES.sql

-- 2. Add students (optional for testing)
Run: ADD_NEW_STUDENTS.sql

-- 3. Set up security
Run: FIX_RLS_POLICIES_ALL_TABLES.sql
```

### Option B: Using Command Line

```bash
# Install PostgreSQL client if needed
# Ubuntu/Debian:
sudo apt-get install postgresql-client

# macOS:
brew install postgresql

# Connect to Neon
psql "postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require"

# Then run:
\i CREATE_STUDENTS_TABLE.sql
\i CREATE_CSE_TABLES.sql
# ... etc
```

## Step 4: Test Connection (30 seconds)

```bash
npm run dev
```

Open browser to: `http://localhost:8000/test-neon-connection.html`

Click **"Test Connection"** - you should see ✅ Connection Successful!

## Step 5: Run the Exam Portal (30 seconds)

Open: `http://localhost:8000/index.html`

### Test Credentials (after adding students):

Create a test student in Neon console:
```sql
INSERT INTO students (roll_number, unique_code, is_active) 
VALUES ('TEST123', 'fsmba2026', true);
```

Then login with:
- Roll Number: `TEST123`
- Unique Code: `fsmba2026`

## ✅ You're Done!

Your exam system is now running with:
- ✅ Neon Database
- ✅ Cross-platform support (PC, mobile, tablet)
- ✅ Works on any network (WiFi, mobile data)
- ✅ Real-time result saving

## 📱 Access from Phone

1. Find your computer's local IP:
   ```bash
   # Linux/Mac:
   ifconfig | grep inet
   
   # Windows:
   ipconfig
   ```

2. On your phone's browser, go to:
   ```
   http://YOUR_IP_ADDRESS:8000
   ```
   Example: `http://192.168.1.100:8000`

## 🌐 Deploy to Internet

### Vercel (Free, 2 minutes)

```bash
npm i -g vercel
vercel login
vercel
```

Follow prompts, then:
1. Add environment variables in Vercel dashboard
2. Done! Your site is live at `https://your-project.vercel.app`

### Netlify (Free, 2 minutes)

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

## 🐛 Troubleshooting

### "npm: command not found"
Install Node.js: https://nodejs.org/

### Database connection fails
- Check internet connection
- Verify Neon database is active (may sleep on free tier)
- Check URL in `neon-config.js` matches your Neon project

### Questions not loading
- Check all `*-questions.js` files exist
- Verify they're loaded in `index.html`
- Check browser console for errors

### Can't access from phone
- Ensure phone and PC are on same WiFi
- Check firewall isn't blocking port 8000
- Try using computer's hostname instead of IP

## 📞 Need Help?

- Check `MIGRATION_GUIDE.md` for detailed docs
- Check `README.md` for full documentation
- Test connection at `/test-neon-connection.html`

## 🎉 Next Steps

1. Add your real students to database
2. Customize questions in `*-questions.js` files
3. Update styling in `styles.css`
4. Deploy to production
5. Share exam URL with students

**That's it! Your exam system is ready to use!** 🎓
