# Troubleshooting Guide - Error404 Local Development

## 🚀 Quick Diagnostics

Run this command to check your setup:

```bash
# Check Node version
node --version  # Should be 18+

# Check pnpm is installed
pnpm --version

# Check .env.local exists
ls -la .env.local

# Check database file
ls -la prisma/dev.db

# Check if dependencies installed
ls -la node_modules | wc -l
```

---

## ❌ Problem: App Won't Start

### Error: "Cannot find module '@prisma/client'"

**Diagnosis**:
```bash
npm ls @prisma/client  # Shows installation status
```

**Solution**:
```bash
# Reinstall dependencies
pnpm install

# Generate Prisma client
pnpm exec prisma generate
```

---

### Error: "PrismaClient is already instantiated"

**Cause**: Multiple instances of Prisma client created (usually in development with hot-reload)

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Clear Prisma cache
rm -rf node_modules/.prisma

# Restart dev server
pnpm dev
```

---

### Error: "Cannot read property 'get' of undefined"

**Likely Cause**: Database provider mismatch

**Check**: `.env.local` should have:
```bash
DATABASE_PROVIDER=sqlite
```

**Solution**:
```bash
# Verify env file
cat .env.local | grep DATABASE_PROVIDER

# Should output: DATABASE_PROVIDER=sqlite
```

---

## 🗄️ Problem: Database Issues

### Error: "Can't reach database server"

**Check which provider you're using**:
```bash
echo $DATABASE_URL
# Should show: file:./prisma/dev.db (for SQLite)
```

**If using SQLite**:
```bash
# Create database and run migrations
pnpm exec prisma migrate dev --name init
```

**If using PostgreSQL**:
```bash
# Ensure PostgreSQL is running
psql --version
brew services list  # on macOS

# Check connection
psql "your_connection_string_here"
```

---

### Error: "P1003: PNPM: column 'xxx' does not exist"

**Cause**: Schema mismatch with database

**Solution**:
```bash
# Backup existing database (if important)
cp prisma/dev.db prisma/dev.db.backup

# Reset database (WARNING: deletes all data)
pnpm exec prisma migrate reset

# Or manually reset SQLite
rm prisma/dev.db
pnpm exec prisma migrate dev --name init
```

---

### Error: Database file not created

**Check**:
```bash
ls -la prisma/dev.db
# Should exist after migrations

# If not, check migrations ran
pnpm exec prisma migrate status
```

**Solution**:
```bash
# Run migrations
pnpm exec prisma migrate dev --name init

# Verify file created
ls -la prisma/dev.db

# View database GUI
pnpm exec prisma studio
```

---

### Error: "Database connection closed"

**For SQLite**:
- This usually means the file was deleted or corrupted
- Solution: Delete and re-migrate

```bash
rm -f prisma/dev.db
pnpm exec prisma migrate dev --name init
```

**For PostgreSQL**:
- Ensure database server is running
- Check connection string in `.env.local`

---

## 🔐 Problem: Authentication Issues

### Error: "BETTER_AUTH_SECRET is required"

**Check**:
```bash
grep BETTER_AUTH_SECRET .env.local
# Should output a value
```

**Solution**:
```bash
# Add to .env.local if missing
echo "BETTER_AUTH_SECRET=local-dev-secret-12345" >> .env.local

# Restart dev server
pnpm dev
```

---

### Error: "BETTER_AUTH_URL not found"

**Check**:
```bash
grep BETTER_AUTH_URL .env.local
# Should output: BETTER_AUTH_URL=http://localhost:3000
```

**Solution**:
```bash
# Update .env.local
cat >> .env.local << EOF
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000/api/auth
EOF

# Restart dev server
pnpm dev
```

---

### Error: "Google OAuth failed"

**Status**: This is EXPECTED in local dev if credentials not configured.

**Choose one**:

**Option A**: Use email/password (recommended for local dev)
- No action needed
- Works perfectly for testing

**Option B**: Enable Google OAuth
```bash
# Get credentials from Google Cloud Console
# Then add to .env.local:
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret

# Restart
pnpm dev
```

---

### Error: "Callback URL mismatch" in Google OAuth

**Cause**: Redirect URI doesn't match Google Cloud credentials

**Solution**:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Select your project
3. OAuth 2.0 Credentials
4. Edit "Authorized redirect URIs"
5. Add/ensure: `http://localhost:3000/api/auth/callback/google`
6. Save and copy credentials to `.env.local`

---

## 💳 Problem: Payment/Paddle Issues

### Warning: "Paddle is not configured"

**Status**: This is EXPECTED and OK in local dev.

**If you want to enable Paddle**:
```bash
# Get sandbox credentials from paddle.com
# Then add to .env.local:
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_token
PADDLE_API_KEY=your_api_key

# Restart
pnpm dev
```

**If you want to keep it disabled**:
- Leave Paddle env vars commented out or empty
- Works fine, just no payment features
- Perfect for local development

---

## 🤖 Problem: AI/OpenAI Issues

### Error: "OpenAI API key is not configured"

**Status**: This is EXPECTED and OK in local dev.

**If you want to enable AI**:
```bash
# Get API key from platform.openai.com
# Then add to .env.local:
OPENAI_API_KEY=sk-proj-your_key

# Restart
pnpm dev
```

**If you want to keep it disabled**:
- Leave OpenAI env var unset
- App still works fine
- User gets friendly error message
- Perfect for local development

---

## 📧 Problem: Email/Resend Issues

### Warning: "Resend email not configured"

**Status**: This is EXPECTED and OK in local dev.

**When emails are sent locally**:
- Request is logged to console instead of sending
- User still sees success message
- Perfect for testing form submission flow

**Check console logs**:
```bash
# Your terminal running "pnpm dev" will show:
⚠️  Resend email not configured. Skipping email notification in local development.
Would have sent request email: {
  name: "User Name",
  email: "user@example.com",
  title: "Template Title",
  ...
}
```

**If you want to enable email sending**:
```bash
# Get API key from resend.com
# Then add to .env.local:
RESEND_API_KEY=re_your_key

# Restart
pnpm dev
```

---

## 🔄 Problem: Port Already in Use

### Error: "Port 3000 is already in use"

**Check what's using it**:
```bash
# macOS/Linux
lsof -i :3000

# Windows
netstat -ano | findstr :3000
```

**Solution Option 1**: Kill the process
```bash
# macOS/Linux
kill -9 <PID>

# Windows (PowerShell as Admin)
Stop-Process -Id <PID> -Force
```

**Solution Option 2**: Use different port
```bash
pnpm dev --port 3001
```

---

## 🌐 Problem: Connection Refused

### Error: "Cannot GET /"

**Check**:
1. Dev server is running: `pnpm dev`
2. Navigate to: http://localhost:3000 (not http://127.0.0.1:3000)
3. Check console for startup errors

**Common causes**:
```bash
# Missing dependencies
pnpm install

# Build errors
pnpm build

# Database not initialized
pnpm exec prisma migrate dev --name init
```

---

## 🔧 Problem: Build Failures

### Error: "TypeScript compilation failed"

**Check**:
```bash
# Type check entire project
pnpm tsc --noEmit

# Check specific file
pnpm tsc lib/db.ts --noEmit
```

**Common causes**:
1. Missing environment variable imports
2. Type mismatches in auth config
3. Prisma client not generated

**Solution**:
```bash
# Regenerate everything
pnpm exec prisma generate
pnpm install
pnpm build
```

---

### Error: "Module not found: '@prisma/adapter-pg'"

**Status**: Expected if using SQLite

**This is NOT an error if**:
- `DATABASE_PROVIDER=sqlite` in `.env.local`
- App works fine anyway
- Adapter is only loaded when needed

**If you really need the warning to go away**:
```bash
# Ensure dependency installed (it should be)
pnpm install

# Or use PostgreSQL (requires running Postgres server)
DATABASE_PROVIDER=postgresql
```

---

## 🐛 Problem: Unexpected Behavior

### User can't sign up

**Check**:
1. Database is initialized: `pnpm exec prisma studio`
2. `users` table exists and is accessible
3. `.env.local` has auth config

**Debug**:
```bash
# View database
pnpm exec prisma studio
# Opens http://localhost:5555
```

---

### Lost user data after restart

**This is expected with SQLite during development!**

**Why**:
- SQLite file-based database
- If deleted/corrupted, data is lost
- This is fine for local development

**If you want to preserve data**:
```bash
# Backup database before deleting
cp prisma/dev.db prisma/dev.db.backup

# Or switch to PostgreSQL
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://...
```

---

### Services not working as expected

**Check what's enabled**:
```bash
# View .env.local
cat .env.local | grep -E 'PADDLE|OPENAI|RESEND|GOOGLE'

# Check console logs
# Look for ⚠️ warnings during dev server startup
```

**Common reasons**:
1. API keys not set → service disabled
2. `NODE_ENV` not `development` → different behavior
3. Service not supported in local dev → use different provider

---

## 📊 Debug Mode

### Enable detailed logging

**Option 1**: Environment variable
```bash
echo "DEBUG=*" >> .env.local
pnpm dev
```

**Option 2**: In code (temporary)
```typescript
// lib/db.ts
const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],  // Show all logs
});
```

**Option 3**: View database GUI
```bash
pnpm exec prisma studio
# Opens interactive database browser at http://localhost:5555
```

---

## 🆘 Still Stuck?

### Collect diagnostics

```bash
# Create diagnostics file
cat > diagnostics.txt << EOF
Node version: $(node --version)
pnpm version: $(pnpm --version)
DATABASE_PROVIDER: $(grep DATABASE_PROVIDER .env.local || echo "NOT SET")
DATABASE_URL: $(grep DATABASE_URL .env.local || echo "NOT SET")
BETTER_AUTH_SECRET: $(grep BETTER_AUTH_SECRET .env.local | wc -c) chars
Prisma version: $(pnpm list @prisma/client | grep @prisma)
Database exists: $(test -f prisma/dev.db && echo "YES" || echo "NO")
Migrations: $(ls -1 prisma/migrations | wc -l)
Error: 
EOF
```

### Reset everything (nuclear option)

```bash
# Backup current work
cp -r . ../error404-backup

# Full reset
rm -rf node_modules .next .prisma
rm -f .env.local
rm -f prisma/dev.db

# Start fresh
pnpm install
cp .env.example .env.local
# Edit .env.local with correct values
pnpm exec prisma generate
pnpm exec prisma migrate dev --name init
pnpm dev
```

---

## 📞 Reporting Issues

If problem persists, create an issue with:

1. **OS & Node version**:
   ```bash
   uname -a && node --version
   ```

2. **Error message**:
   ```bash
   # Full error from terminal or browser console
   ```

3. **Diagnostics**:
   ```bash
   cat diagnostics.txt
   ```

4. **What you've tried**:
   - Reinstalled dependencies
   - Cleared `.next` cache
   - Reset database
   - etc.

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `pnpm dev` starts without errors
- [ ] Can navigate to http://localhost:3000
- [ ] Can create account with email/password
- [ ] Can sign in with created account
- [ ] Can view 404 templates
- [ ] Database persists between restarts (only reset on `prisma migrate reset`)

**If all checks pass**: 🎉 Your local dev environment is ready!

