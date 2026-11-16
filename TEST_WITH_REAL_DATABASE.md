# ✅ Test on Localhost with Real Neon Database

Now you can test on localhost (http://localhost:3000) with the REAL Neon database!

## 🚀 Quick Start (3 Steps)

### Step 1: Add Student to Neon Database

Go to **https://console.neon.tech/** → SQL Editor and run:

```sql
-- Update existing student
UPDATE students 
SET unique_code = '123', is_active = true 
WHERE roll_number = '160524733210';

-- Or insert if not exists
INSERT INTO students (roll_number, unique_code, is_active) 
VALUES ('160524733210', '123', true)
ON CONFLICT (roll_number) DO UPDATE 
SET unique_code = '123', is_active = true;

-- Verify
SELECT * FROM students WHERE roll_number = '160524733210';
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- `@neondatabase/serverless` - Neon database driver
- `express` - Web server
- `cors` - Cross-origin support
- `dotenv` - Environment variables

### Step 3: Start Local Server

```bash
npm run dev
```

You should see:
```
🚀 ============================================
🚀 Local Development Server with Neon Database
🚀 ============================================

   Server running at: http://localhost:3000
   Exam portal: http://localhost:3000/index.html
   
📊 Database: Neon PostgreSQL
🧪 Test credentials:
   Roll Number: 160524733210
   Unique Code: 123
```

## 🧪 Test Now!

1. **Open browser:** http://localhost:3000/index.html

2. **Login with:**
   - Roll Number: `160524733210`
   - Unique Code: `123`

3. **Expected result:**
   - ✅ Authentication successful!
   - ✅ Connected to REAL Neon database
   - ✅ Can complete exam
   - ✅ Results saved to database

## 🔍 Verify Results in Database

After completing the exam, check in Neon Console:

```sql
SELECT * FROM exam_results 
WHERE roll_number = '160524733210' 
ORDER BY created_at DESC 
LIMIT 1;
```

You should see your test result! ✅

## 🌐 How It Works

```
Browser (localhost:3000)
    ↓
  Local Node.js Server (server.js)
    ↓
  Neon Database (PostgreSQL)
    ↓
  Results Returned
```

**Benefits:**
- ✅ Test with REAL database on localhost
- ✅ No deployment needed for testing
- ✅ Same as production behavior
- ✅ Real data persistence

## 📊 What's Different from Mock?

| Feature | Mock (neon-config-local.js) | Real (server.js) |
|---------|----------------------------|------------------|
| Database | In-memory (browser) | Neon PostgreSQL |
| Data Persistence | Lost on refresh | Permanent |
| Network Required | No | Yes |
| Setup | Zero | npm install |
| Use Case | Quick testing | Full testing |

## ➕ Add More Students

In Neon Console:

```sql
INSERT INTO students (roll_number, unique_code, is_active) VALUES
('160524733210', '123', true),
('STUDENT001', '123', true),
('STUDENT002', '123', true);
```

## 🔄 Port Already in Use?

If port 3000 is busy, edit `server.js`:

```javascript
const PORT = 3001; // Change to any available port
```

## 🛑 Stop Server

Press `Ctrl+C` in the terminal

## 📱 Access from Phone (Same WiFi)

1. Find your computer's IP:
   ```bash
   # Linux/Mac:
   ifconfig | grep inet
   
   # Windows:
   ipconfig
   ```

2. On phone's browser:
   ```
   http://YOUR_IP:3000/index.html
   ```
   Example: `http://192.168.1.100:3000/index.html`

## 🐛 Troubleshooting

### "Cannot find module @neondatabase/serverless"
**Solution:**
```bash
npm install
```

### "ECONNREFUSED" or database connection error
**Solution:**
1. Check internet connection
2. Verify `NEON_DATABASE_URL` in `.env` file
3. Check Neon database is not suspended

### "Port 3000 already in use"
**Solution:**
Change port in `server.js` or kill existing process:
```bash
# Linux/Mac:
lsof -ti:3000 | xargs kill

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Authentication fails
**Solution:**
1. Verify student exists in Neon database
2. Check `unique_code = '123'` exactly
3. Check `is_active = true`

## 🎯 Ready for Production?

When everything works on localhost:

1. **Deploy to Vercel:**
   ```bash
   vercel
   ```

2. **Add environment variable in Vercel dashboard:**
   ```
   NEON_DATABASE_URL=postgresql://...
   ```

3. **Share production URL** with students

## ✅ Current Setup

**Files:**
- `server.js` - Local Node.js server
- `neon-config.js` - Frontend database client
- `.env` - Database credentials (not in git)
- `api/db-query.js` - Serverless function (for Vercel)

**Configuration:**
- ✅ index.html uses `neon-config.js`
- ✅ Unique code `123` recognized
- ✅ `.env` file configured
- ✅ Real database connection ready

## 📝 Summary

**To test with real Neon database on localhost:**

```bash
# 1. Install
npm install

# 2. Start server
npm run dev

# 3. Open browser
http://localhost:3000/index.html

# 4. Login
Roll Number: 160524733210
Unique Code: 123
```

**That's it! You're testing with the real database! 🎉**

---

**Server logs will show all database queries in real-time.**
