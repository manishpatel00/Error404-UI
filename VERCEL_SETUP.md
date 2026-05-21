# Vercel Deployment Setup Guide

## ✅ Step 1: Environment Variables on Vercel

Go to: **https://vercel.com/projects/error404-ui/settings/environment-variables**

Add these variables:

### Production & Preview Environment

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = pk_test_cHVtcGVkLWR1Y2stMi5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY = sk_test_bOriSufST8Yd4rIlWub7wUIgeHadwCUHGEOMiphOLt
DATABASE_URL = postgresql://neondb_owner:npg_hxpsWO8mbB0z@ep-red-truth-aqndrrwn-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
BETTER_AUTH_SECRET = your-random-secure-string-here-min-32-chars
NODE_ENV = production
NEXT_PUBLIC_BETTER_AUTH_URL = https://error404-ui.vercel.app/api/auth
BETTER_AUTH_URL = https://error404-ui.vercel.app
REQUEST_TEMPLATE_EMAIL_TO = manishpatel953249@gmail.com
```

---

## ✅ Step 2: Update Vercel Domain Settings

1. Go to **Settings → Domains**
2. Your domain will be: `error404-ui.vercel.app`
3. Update Clerk redirect URLs with this domain

**Clerk Updates Required:**

- Sign-in callback: `https://error404-ui.vercel.app/auth/callback/clerk`
- Sign-up callback: `https://error404-ui.vercel.app/auth/callback/clerk`

---

## ✅ Step 3: Redeploy

1. Go to **Deployments** tab
2. Find the latest failed deployment
3. Click **Redeploy** button
4. Wait for build to complete

---

## 🧪 Step 4: Test the Deployment

Once deployed:

1. Visit `https://error404-ui.vercel.app`
2. Test Sign In / Sign Up
3. Check database connection
4. Verify 404 components load

---

## 🚨 Common Issues & Fixes

### Issue: "PrismaClient not found"

✅ **Fixed** - Build script now includes `prisma generate`

### Issue: "Environment variable missing"

✅ **Fix** - Add all variables in Vercel Settings → Environment Variables

### Issue: "Database connection failed"

✅ **Fix** - Verify DATABASE_URL is correct (should start with `postgresql://`)

### Issue: "Clerk authentication failed"

✅ **Fix** - Verify NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY are set

---

## 📚 Database Setup (Already Done)

Your database is configured to use **Neon PostgreSQL**:

- ✅ Host: `ep-red-truth-aqndrrwn-pooler.c-8.us-east-1.aws.neon.tech`
- ✅ Database: `neondb`
- ✅ Connection: Secure (SSL enabled)

### Run Migrations on Vercel

After first deployment, SSH into Vercel and run:

```bash
pnpm prisma migrate deploy
```

Or use Vercel's one-time command:

1. Go to deployment
2. Click "Function Logs"
3. Verify migrations ran

---

## ✅ Deployment Checklist

- [x] GitHub repository linked
- [x] Environment variables set
- [x] Build script optimized (prisma generate included)
- [x] Database configured
- [x] Vercel domain set
- [ ] First deployment in progress
- [ ] Run migrations
- [ ] Test Sign In/Sign Up
- [ ] Verify 404 components
- [ ] Monitor logs for errors

---

## 📊 Monitoring

After deployment:

1. **View Logs**: Deployments → Recent build → Logs
2. **Function Logs**: Real-time server-side logs
3. **Errors**: Check Vercel's error tracking
4. **Performance**: Check Vercel Analytics tab

---

## 🔄 Auto-Deployments

✅ Enabled: Any push to `main` branch auto-deploys to Vercel

---

**Your deployment is now ready! 🚀**
