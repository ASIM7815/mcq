# ✅ Deployment Checklist

Use this checklist to ensure everything is set up correctly before deploying to production.

## 📋 Pre-Deployment Checklist

### 1. Local Environment Setup
- [ ] Node.js installed (v14 or higher)
- [ ] Dependencies installed (`npm install`)
- [ ] `.env` file created from `.env.example`
- [ ] `.env` has correct Neon credentials

### 2. Database Setup
- [ ] Logged into Neon Console
- [ ] Created all required tables (ran CREATE_*.sql scripts)
- [ ] Added student data (ran ADD_*.sql scripts)
- [ ] Applied security policies (ran FIX_*.sql scripts)
- [ ] Verified tables exist with `CHECK_ALL_F_TABLES.sql`

### 3. Connection Testing
- [ ] Opened `test-neon-connection.html` in browser
- [ ] ✅ Basic connection test passed
- [ ] ✅ Tables listed successfully
- [ ] ✅ Student query works
- [ ] ✅ Authentication flow tested

### 4. Functionality Testing
- [ ] Opened `index.html` in browser
- [ ] Login works with test credentials
- [ ] Exam loads correctly
- [ ] Questions display properly
- [ ] Timer works
- [ ] Navigation (Next/Previous) works
- [ ] Submit exam works
- [ ] Results save to database
- [ ] Results display correctly

### 5. Cross-Device Testing
- [ ] Tested on desktop browser (Chrome/Firefox/Safari)
- [ ] Tested on mobile phone
- [ ] Tested on tablet (if available)
- [ ] Tested on different WiFi networks
- [ ] Tested on mobile data

### 6. Security Verification
- [ ] DevTools detection works
- [ ] Fullscreen enforcement works
- [ ] Tab switching triggers auto-submit
- [ ] Session tracking works (for applicable exams)
- [ ] Violation detection works
- [ ] `.env` file is in `.gitignore`

### 7. Code Review
- [ ] Removed all console.log statements (optional)
- [ ] No hardcoded credentials in code
- [ ] All API endpoints use environment variables
- [ ] Error handling in place
- [ ] Loading states implemented

## 🚀 Deployment Steps

### Option A: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```
   - [ ] Vercel CLI installed

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   - [ ] Logged in to Vercel

3. **Deploy**
   ```bash
   vercel
   ```
   - [ ] Project deployed
   - [ ] Deployment URL received

4. **Set Environment Variables**
   - [ ] Go to Vercel Dashboard → Project → Settings → Environment Variables
   - [ ] Add `NEON_DATABASE_URL`
   - [ ] Add `NEON_REST_API_URL`
   - [ ] Add `AWS_ACCESS_KEY_ID` (if using S3)
   - [ ] Add `AWS_SECRET_ACCESS_KEY` (if using S3)
   - [ ] Redeploy after adding variables

5. **Test Production**
   - [ ] Visit production URL
   - [ ] Test login
   - [ ] Complete test exam
   - [ ] Verify results in database

### Option B: Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```
   - [ ] Netlify CLI installed

2. **Login to Netlify**
   ```bash
   netlify login
   ```
   - [ ] Logged in to Netlify

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```
   - [ ] Project deployed
   - [ ] Deployment URL received

4. **Set Environment Variables**
   - [ ] Go to Netlify Dashboard → Site Settings → Environment Variables
   - [ ] Add all environment variables
   - [ ] Redeploy

5. **Test Production**
   - [ ] Visit production URL
   - [ ] Test functionality

### Option C: Custom Server

1. **Prepare Files**
   ```bash
   # Create deployment package
   tar -czf exam-portal.tar.gz *.html *.css *.js *.png package.json
   ```
   - [ ] Files packaged

2. **Upload to Server**
   - [ ] Files uploaded to web server
   - [ ] Permissions set correctly (644 for files, 755 for directories)

3. **Configure Web Server**
   - [ ] Web server configured (Apache/Nginx)
   - [ ] SSL certificate installed
   - [ ] Environment variables set

4. **Test Production**
   - [ ] Visit production URL
   - [ ] Test functionality

## 📱 Post-Deployment Checklist

### 1. Smoke Tests
- [ ] Homepage loads
- [ ] Login page works
- [ ] Instructions page displays
- [ ] Exam page loads
- [ ] Timer starts
- [ ] Questions render
- [ ] Submit works
- [ ] Results display

### 2. Performance Testing
- [ ] Page load time < 3 seconds
- [ ] Database queries < 1 second
- [ ] No console errors
- [ ] Images load properly
- [ ] Mobile responsive

### 3. Security Verification
- [ ] HTTPS enabled (SSL)
- [ ] No credentials in browser console
- [ ] DevTools blocking works
- [ ] Session management works
- [ ] Database connection secure

### 4. Database Monitoring
- [ ] Check Neon dashboard for activity
- [ ] Verify queries are executing
- [ ] Check for errors in logs
- [ ] Monitor connection count
- [ ] Verify data is being saved

### 5. User Testing
- [ ] Create test accounts for each exam type
- [ ] Have someone else test login
- [ ] Test on different devices
- [ ] Get feedback on UX
- [ ] Fix any reported issues

## 🐛 Common Issues & Solutions

### Issue: "Database connection not available"
**Solution:**
- [ ] Check NEON_REST_API_URL is correct
- [ ] Verify internet connectivity
- [ ] Check Neon database is not suspended

### Issue: "Questions not loading"
**Solution:**
- [ ] Verify all question files are uploaded
- [ ] Check index.html includes all scripts
- [ ] Check browser console for errors

### Issue: "Login fails"
**Solution:**
- [ ] Verify student exists in database
- [ ] Check is_active = true
- [ ] Verify unique_code matches

### Issue: "Results not saving"
**Solution:**
- [ ] Check browser console
- [ ] Verify table exists in database
- [ ] Check RLS policies are correct
- [ ] Test database connection

## 📊 Monitoring Setup

### 1. Neon Dashboard
- [ ] Bookmark Neon Console URL
- [ ] Set up email alerts
- [ ] Check usage regularly

### 2. Analytics (Optional)
- [ ] Add Google Analytics (if desired)
- [ ] Track exam completions
- [ ] Monitor error rates

### 3. Backup Strategy
- [ ] Enable Neon automatic backups
- [ ] Set up S3 backup (optional)
- [ ] Test restore procedure
- [ ] Document backup schedule

## 🎓 Student Communication

### Before Launch
- [ ] Prepare student guide/instructions
- [ ] Share exam URL
- [ ] Share login credentials
- [ ] Set exam date/time
- [ ] Send reminder notifications

### During Exam
- [ ] Monitor database for activity
- [ ] Be available for technical support
- [ ] Watch for unusual patterns
- [ ] Have backup plan ready

### After Exam
- [ ] Export results from database
- [ ] Verify all submissions
- [ ] Generate reports
- [ ] Archive exam data

## 📞 Emergency Contacts

### Technical Support
- **Neon Support:** https://neon.tech/docs
- **Vercel Support:** https://vercel.com/support
- **AWS Support:** https://aws.amazon.com/support/

### Internal Contacts
- Database Admin: _____________
- IT Department: _____________
- System Administrator: _____________

## 🎉 Launch Readiness

### Final Checks
- [ ] All checklist items completed
- [ ] Production URL tested
- [ ] Students notified
- [ ] Support team ready
- [ ] Backup plan in place

### Go/No-Go Decision
- [ ] **GO** - All systems ready
- [ ] **NO-GO** - Issues remaining (document below)

**Issues to resolve before launch:**
_____________________________________________
_____________________________________________
_____________________________________________

## ✅ Sign-Off

**Tested by:** _______________ **Date:** _______________

**Approved by:** _______________ **Date:** _______________

**Launch Date:** _______________ **Time:** _______________

---

**🎓 Good luck with your exam deployment!**
