# ISL Exam Portal - Node.js + Neon PostgreSQL

Online exam system with Node.js backend and Neon PostgreSQL database.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Database
The `.env` file is already configured with your Neon connection string:
```
DATABASE_URL=postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### 3. Test Database Connection
```bash
npm test
```

### 4. Start Server
```bash
npm start
```

The server will start on: **http://localhost:3000**

## 📱 Access Points

- **Local Computer:** http://localhost:3000
- **Same WiFi Network:** http://192.168.7.7:3000
- **Exam Portal:** http://localhost:3000/index.html
- **Health Check:** http://localhost:3000/api/health

## 🗄️ Create Database Tables

Run this SQL in Neon Console (https://console.neon.tech):

```sql
-- Create verification table
CREATE TABLE IF NOT EXISTS student_verification (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    verified_text VARCHAR(50) DEFAULT NULL,
    verified_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add test student
INSERT INTO student_verification (roll_number, unique_code) 
VALUES ('12345678', '123');

-- Create students table
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) UNIQUE NOT NULL,
    unique_code VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create exam results table
CREATE TABLE IF NOT EXISTS exam_results (
    id SERIAL PRIMARY KEY,
    roll_number VARCHAR(50) NOT NULL,
    correct_answers INTEGER NOT NULL,
    wrong_answers INTEGER NOT NULL,
    total_questions INTEGER NOT NULL,
    percentage DECIMAL(5,2) NOT NULL,
    user_answers JSONB,
    violation_detected BOOLEAN DEFAULT false,
    violation_type VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📡 API Endpoints

### POST /api/db-query
Execute any SQL query
```javascript
fetch('/api/db-query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: 'SELECT * FROM students WHERE roll_number = $1',
        params: ['12345678']
    })
});
```

### POST /api/validate-student
Validate student credentials
```javascript
fetch('/api/validate-student', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        rollNumber: '12345678',
        uniqueCode: '123',
        tableName: 'student_verification'
    })
});
```

### POST /api/save-results
Save exam results
```javascript
fetch('/api/save-results', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        tableName: 'exam_results',
        rollNumber: '12345678',
        correctAnswers: 8,
        wrongAnswers: 2,
        totalQuestions: 10,
        percentage: 80,
        userAnswers: []
    })
});
```

### POST /api/update-verification
Mark student as verified
```javascript
fetch('/api/update-verification', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        rollNumber: '12345678',
        uniqueCode: '123'
    })
});
```

### GET /api/tables
Get all database tables
```javascript
fetch('/api/tables')
    .then(res => res.json())
    .then(data => console.log(data.tables));
```

## 🧪 Test the System

### 1. Check Server Health
```bash
curl http://localhost:3000/api/health
```

### 2. Test Login
1. Open: http://localhost:3000/index.html
2. Enter Roll: `12345678`
3. Enter Code: `123`
4. Click Continue

### 3. Check Verification in Database
```sql
SELECT * FROM student_verification WHERE roll_number = '12345678';
```
Should show `verified_text = 'Verified'` after login.

## 📁 Project Structure

```
mcq/
├── server.js              # Node.js backend server
├── db-client.js           # Frontend database client
├── test-connection.js     # Database connection test
├── .env                   # Environment variables (DATABASE_URL)
├── package.json           # Node.js dependencies
├── index.html             # Exam portal frontend
├── script.js              # Frontend JavaScript
├── styles.css             # CSS styling
└── api/
    └── db-query.js        # (Legacy - not used with Node.js backend)
```

## 🔧 Frontend Usage

The frontend automatically connects to the backend:

```javascript
// Test database connection
dbClient.healthCheck().then(result => {
    console.log('Health:', result);
});

// Validate student
dbClient.validateStudent('12345678', '123', 'student_verification')
    .then(result => {
        if (result.valid) {
            console.log('Student authenticated!');
        }
    });

// Mark as verified
dbClient.markVerified('12345678', '123');

// Save results
dbClient.saveResults('exam_results', '12345678', 8, 2, 10, 80, []);
```

## 🐛 Troubleshooting

### Connection Issues
- Verify `.env` file exists with correct `DATABASE_URL`
- Check Neon database is active (not paused)
- Test connection: `npm test`

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Then restart
npm start
```

### Database Tables Don't Exist
Run the SQL table creation scripts in Neon Console

## 📊 Database Status

Run `npm test` to see:
- ✅ Connection status
- 📋 List of tables
- 👤 Sample data

## 🎯 Features

- ✅ Node.js v22 LTS backend
- ✅ PostgreSQL `pg` driver
- ✅ Neon serverless PostgreSQL
- ✅ Express.js REST API
- ✅ CORS enabled
- ✅ Environment variables with `dotenv`
- ✅ SSL/TLS encryption
- ✅ Connection pooling
- ✅ Error handling
- ✅ Health monitoring

---

**Server Running:** http://localhost:3000 🚀
