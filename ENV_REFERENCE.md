# Environment Variables - Complete Reference

## 📋 All Variables by Category

### ✅ REQUIRED (Core Functionality)

| Variable | Type | Example | Notes |
|----------|------|---------|-------|
| `DATABASE_PROVIDER` | string | `sqlite` or `postgresql` | Determines database adapter |
| `DATABASE_URL` | string | `file:./prisma/dev.db` or `postgresql://...` | Connection string |
| `BETTER_AUTH_SECRET` | string | `any-random-secret-string` | Min 8 chars, used for auth token signing |
| `BETTER_AUTH_URL` | string | `http://localhost:3000` | Server-side auth base URL |
| `NEXT_PUBLIC_BETTER_AUTH_URL` | string | `http://localhost:3000/api/auth` | Client-side auth endpoint |
| `NODE_ENV` | string | `development` | Automatically set by Next.js |

**Status**: Without these, the app **will not start**.

---

### 🟡 OPTIONAL (Authentication)

| Variable | Type | Example | Impact if Missing |
|----------|------|---------|-------------------|
| `GOOGLE_CLIENT_ID` | string | `123456.apps.googleusercontent.com` | Google OAuth unavailable |
| `GOOGLE_CLIENT_SECRET` | string | `GOCSPX-...` | Email/password auth still works |

**Status**: When missing, only email/password authentication available.

**How to Get**:
1. [Google Cloud Console](https://console.cloud.google.com)
2. Create OAuth 2.0 credentials for "Web application"
3. Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs

---

### 💳 OPTIONAL (Payments)

| Variable | Type | Example | Impact if Missing |
|----------|------|---------|-------------------|
| `NEXT_PUBLIC_PADDLE_ENVIRONMENT` | string | `sandbox` or `production` | Payment UI disabled |
| `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` | string | `ptk_...` | No checkout available |
| `PADDLE_API_KEY` | string | `pad_...` | Server-side payment logic disabled |
| `PADDLE_WEBHOOK_SECRET_KEY` | string | `whsec_...` | Webhooks won't verify |

**Status**: When missing, payment features gracefully disabled. All users appear as free tier.

**How to Get**:
1. [Paddle.com](https://www.paddle.com)
2. Create account and get sandbox credentials
3. Copy from Dashboard → API keys

**Local Testing**: ✅ Works fine without Paddle

---

### 🤖 OPTIONAL (AI/OpenAI)

| Variable | Type | Example | Impact if Missing |
|----------|------|---------|-------------------|
| `OPENAI_API_KEY` | string | `sk-proj-...` | AI features show error message |

**Status**: When missing, error message shown gracefully. All other features work.

**How to Get**:
1. [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Create new API key
3. Copy to `.env.local`

**Local Testing**: ❌ AI features disabled (this is fine)

---

### 📧 OPTIONAL (Email)

| Variable | Type | Example | Impact if Missing |
|----------|------|---------|-------------------|
| `RESEND_API_KEY` | string | `re_...` | Template request emails logged to console |

**Status**: When missing, form submissions succeed locally, emails logged to console instead of sent.

**How to Get**:
1. [resend.com](https://resend.com)
2. Sign up and get API key
3. Copy to `.env.local`

**Local Testing**: ✅ Requests logged to console (perfect for development)

---

### 📊 OPTIONAL (Analytics)

| Variable | Type | Example | Impact if Missing |
|----------|------|---------|-------------------|
| `UMAMI_WEBSITE_ID` | string | `your-website-id` | Analytics disabled (no impact on app) |

**Status**: Purely optional. No functionality impact.

**How to Get**:
1. [umami.is](https://umami.is)
2. Create account and website
3. Get website ID

**Local Testing**: ✅ Can be completely omitted

---

## 🗂️ Environment Variables by File

### Where Each Variable is Used

```
DATABASE_PROVIDER
├── lib/db.ts ..................... Selects Prisma adapter
├── lib/auth.ts ................... Configures Better-Auth provider
└── prisma/schema.prisma .......... Sets datasource provider

DATABASE_URL
├── lib/db.ts ..................... Connection string for Prisma
├── prisma.config.ts .............. Prisma config
└── scripts/check-users.js ........ Database connection

BETTER_AUTH_SECRET
└── lib/auth.ts ................... Auth token signing

BETTER_AUTH_URL
└── lib/auth.ts ................... Server auth base URL

NEXT_PUBLIC_BETTER_AUTH_URL
├── lib/auth-client.ts ............ Client auth endpoint
└── app/layout.tsx ................ Auth client initialization

GOOGLE_CLIENT_ID
└── lib/auth.ts ................... Google OAuth provider

GOOGLE_CLIENT_SECRET
└── lib/auth.ts ................... Google OAuth provider

NEXT_PUBLIC_PADDLE_ENVIRONMENT
└── lib/paddle.ts ................. Paddle environment (sandbox/prod)

NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
└── lib/paddle.ts ................. Paddle client-side initialization

PADDLE_API_KEY
└── (Future payment webhooks)

PADDLE_WEBHOOK_SECRET_KEY
└── (Future webhook verification)

OPENAI_API_KEY
└── server/ai.ts .................. OpenAI API calls

RESEND_API_KEY
└── app/(site)/request/actions.ts . Email sending

UMAMI_WEBSITE_ID
└── app/layout.tsx ................ Analytics script tag

NODE_ENV
├── lib/db.ts ..................... SSL configuration
├── scripts/check-users.js ........ Connection handling
└── (Throughout app)
```

---

## 🔄 Development Workflows

### Workflow 1: Minimal Local Dev (Recommended)

**Files to Update**: `.env.local` with these ONLY:

```bash
NODE_ENV=development
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:./prisma/dev.db
BETTER_AUTH_SECRET=dev-secret-change-me
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000/api/auth
```

**Features Available**:
- ✅ User auth (email/password)
- ✅ Database persistence
- ✅ All 404 templates
- ❌ Google OAuth (use email/password)
- ❌ Payments
- ❌ AI features
- ❌ Email notifications

**Setup Time**: < 2 minutes

---

### Workflow 2: Add Google OAuth

**Add to `.env.local`**:

```bash
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

**Setup Time**: ~10 minutes (requires Google Cloud setup)

---

### Workflow 3: Full Local Stack

**Add to `.env.local`**:

```bash
# Payments (optional)
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_token
PADDLE_API_KEY=your_api_key

# AI (optional)
OPENAI_API_KEY=sk-proj-your_key

# Email (optional)
RESEND_API_KEY=your_resend_key
```

**Setup Time**: ~30 minutes

---

### Workflow 4: Production Setup

**Replace in production environment**:

```bash
NODE_ENV=production
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://user:pass@prod-db:5432/error404
BETTER_AUTH_SECRET=your-production-secret-32-chars-min
BETTER_AUTH_URL=https://yourdomain.com
NEXT_PUBLIC_BETTER_AUTH_URL=https://yourdomain.com/api/auth

# All production services enabled
GOOGLE_CLIENT_ID=prod_client_id
GOOGLE_CLIENT_SECRET=prod_client_secret
NEXT_PUBLIC_PADDLE_ENVIRONMENT=production
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=prod_token
PADDLE_API_KEY=prod_api_key
PADDLE_WEBHOOK_SECRET_KEY=prod_webhook_secret
OPENAI_API_KEY=prod_openai_key
RESEND_API_KEY=prod_resend_key
UMAMI_WEBSITE_ID=prod_umami_id
```

**Deployment Platforms**:
- Vercel: Dashboard → Settings → Environment Variables
- Railway: Project → Variables
- Render: Environment
- Fly.io: `fly secrets set VAR_NAME=value`

---

## ⚠️ Common Issues & Solutions

### Issue: "DATABASE_PROVIDER is not defined"

**Cause**: `.env.local` missing

**Solution**:
```bash
# Copy template
cp .env.example .env.local

# Edit .env.local with your values
```

### Issue: "Cannot find module '@prisma/adapter-pg'"

**Cause**: Using SQLite but code requires PostgreSQL adapter

**Solution**: Ensure `.env.local` has:
```bash
DATABASE_PROVIDER=sqlite
```

### Issue: "BETTER_AUTH_SECRET is required"

**Cause**: Environment variable not set

**Solution**:
```bash
echo "BETTER_AUTH_SECRET=local-dev-secret" >> .env.local
```

### Issue: "Paddle is not configured"

**This is fine in local dev!** It means:
- ✅ Payments gracefully disabled
- ✅ App still works
- ✅ All other features available

To enable testing: Add Paddle credentials to `.env.local`

### Issue: "OpenAI failed"

**This is fine in local dev!** It means:
- ✅ AI features disabled
- ✅ App still works
- ✅ Error message shown to user

To enable: Add `OPENAI_API_KEY` to `.env.local`

---

## 🔐 Security Best Practices

### Never Commit `.env.local`
```bash
# Already in .gitignore
cat .gitignore | grep env.local
```

### For Production

1. **Never hardcode secrets** in environment files
2. **Use platform secrets management**:
   - Vercel: Environment Variables
   - AWS: Secrets Manager
   - Azure: Key Vault
   - GitHub: Secrets

3. **Rotate secrets regularly**:
   - API keys (quarterly)
   - Auth secrets (annually)
   - Database passwords (every 6 months)

4. **Separate credentials by environment**:
   - Dev credentials (less sensitive)
   - Staging credentials (moderate sensitivity)
   - Production credentials (highly sensitive, rotate frequently)

---

## 📱 Quick Reference Card

```bash
# Minimal local setup
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:./prisma/dev.db
BETTER_AUTH_SECRET=dev-secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000/api/auth

# Full local setup
[Above] +
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=...
PADDLE_API_KEY=...
OPENAI_API_KEY=sk-proj-...
RESEND_API_KEY=...

# Production setup
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://...
[All services configured with prod credentials]
```

---

## 🎯 Decision Matrix: Which Variables Do I Need?

```
Question: Do you need...?

✅ Basic app functionality (auth, database)?
   → Need: DATABASE_PROVIDER, DATABASE_URL, BETTER_AUTH_*

❓ Google login option?
   → Optional: GOOGLE_CLIENT_ID/SECRET
   → Fallback: Email/password auth still works

💳 Payment/subscription features?
   → Optional: PADDLE_* vars
   → Fallback: All users are free tier

🤖 AI-powered customization?
   → Optional: OPENAI_API_KEY
   → Fallback: Error message to user

📧 Sending template request emails?
   → Optional: RESEND_API_KEY
   → Fallback: Logged to console in local dev

📊 Analytics tracking?
   → Optional: UMAMI_WEBSITE_ID
   → Fallback: No tracking (no impact)
```

---

## 📞 Support

For issues or questions:

1. Check [LOCAL_SETUP.md](LOCAL_SETUP.md) for step-by-step guide
2. See [REFACTORING_OPPORTUNITIES.md](REFACTORING_OPPORTUNITIES.md) for architecture improvements
3. Review [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for common fixes

