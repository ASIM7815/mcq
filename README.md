# Student Exam System - Neon Database & S3 Storage

This is an online exam portal for ISL Engineering College students, now powered by **Neon Database** (serverless PostgreSQL) and **AWS S3 Storage** for scalable, reliable exam management.

## 🚀 Features

- **Multi-department exam support** (CSE, IT, AIDS, ECE, Civil, MBA)
- **Neon Database** - Serverless PostgreSQL with auto-scaling
- **AWS S3 Storage** - Optional file storage for exam backups
- **Cross-platform** - Works on any device with internet (PC, phone, tablet)
- **Anti-cheating measures** - Session tracking, device fingerprinting
- **Real-time results** - Instant score calculation and storage

## 📁 Project Structure

### Frontend Files
- `index.html` - Main exam interface
- `styles.css` - Application styling
- `script.js` - Main application logic and anti-cheating features
- `neon-config.js` - **NEW** Neon database configuration
- `s3-storage.js` - **NEW** S3 storage integration (optional)
- `students-config.js` - Student configuration
- `questions-loader.js` - Question loading logic
- All `*-questions.js` files - Question banks for different exams

### Database Files (SQL)
- `CREATE_*.sql` - Table creation scripts for all departments
- `ADD_*.sql` - Data modification scripts
- `FIX_*.sql` - RLS policy fixes
- `UPDATE_*.sql` - Data update scripts

### Configuration
- `.env.example` - Environment variable template
- `package.json` - Dependencies
- `vercel.json` - Deployment configuration

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This installs:
- `@aws-sdk/client-s3` - AWS S3 client
- `@aws-sdk/s3-request-presigner` - Pre-signed URL generation
- `dotenv` - Environment variable management

### 2. Configure Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Update `.env` with your credentials:

```env
# Neon Database
NEON_DATABASE_URL=postgresql://neondb_owner:npg_brkFjvyl0TW2@ep-late-union-bd6zxw2g-pooler.c-8.us-east-2.aws.neon.tech/neondb?sslmode=require
NEON_REST_API_URL=https://ep-late-union-bd6zxw2g.apirest.c-8.us-east-2.aws.neon.tech/neondb/rest/v1

# AWS S3 (Optional)
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-2
AWS_S3_BUCKET=assets
```

### 3. Set Up Neon Database

1. **Create tables** - Run all `CREATE_*.sql` files in your Neon database console
2. **Add students** - Run `ADD_*.sql` scripts to populate student data
3. **Set up policies** - Run `FIX_*.sql` scripts for Row Level Security

You can run SQL directly in the Neon Console or use the connection string with any PostgreSQL client.

### 4. Run the Application

```bash
npm run dev
```

Opens on `http://localhost:8000`

## 🌐 How It Works

### Database Connection
The system uses **Neon's REST API** which works across any network:
- ✅ Works on any WiFi
- ✅ Works on mobile data
- ✅ No CORS issues
- ✅ No VPN needed
- ✅ Serverless auto-scaling

### Data Flow
1. Student enters roll number + unique code
2. Frontend validates credentials via Neon REST API
3. Exam loads with shuffled questions
4. Answers are submitted to Neon database
5. Results stored with device fingerprint for security

### Storage (Optional)
- S3 can backup exam results as JSON files
- Pre-signed URLs for secure uploads
- Organized by date and exam type

## 📱 Cross-Platform Support

Works seamlessly on:
- 💻 **Desktop** - Windows, Mac, Linux
- 📱 **Mobile** - Android, iOS (any browser)
- 🌐 **Any Network** - WiFi, mobile data, public networks

## 🔒 Security Features

- Session tracking prevents multiple simultaneous logins
- Device fingerprinting detects suspicious activity
- Anti-cheating measures (no tab switching, fullscreen mode)
- Secure database connection with SSL
- Row Level Security (RLS) policies

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

Set environment variables in Vercel dashboard.

### Any Static Host
The frontend is pure HTML/CSS/JS - deploy to:
- GitHub Pages
- Netlify
- CloudFlare Pages
- Any web server

## 📊 Database Schema

Each exam type has:
- `{exam}_students` - Student credentials table
- `{exam}_exam_results` - Results storage table
- `{exam}_active_sessions` - Session tracking (optional)

## 🆘 Troubleshooting

**Database connection fails:**
- Check NEON_REST_API_URL in browser console
- Verify internet connectivity
- Check Neon database is active

**Questions not loading:**
- Check question files are included in index.html
- Verify exam type detection in neon-config.js

**Exam won't submit:**
- Check browser console for errors
- Verify student exists in database
- Check network connection

## 📝 Migration from Supabase

If you're migrating from Supabase:

1. ✅ Export data from Supabase
2. ✅ Import into Neon using SQL scripts
3. ✅ Update `neon-config.js` with your Neon URL
4. ✅ Replace `supabase-config.js` references with `neon-config.js`
5. ✅ Test authentication flow
6. ✅ Deploy

## 📄 License

MIT - ISL Engineering College

## 🤝 Support

For issues or questions, contact the IT department.
