# Error404 Local Development Setup Guide

## 📋 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Initialize Database
```bash
# Generate Prisma client
pnpm exec prisma generate

# Create SQLite database and run migrations
pnpm exec prisma migrate dev --name init
```

### 3. Start Development Server
```bash
pnpm dev
```

The app will be available at **http://localhost:3000**

---

## 🗂️ Environment Variables Overview

### Configuration Files
- **`.env.local`** - Your local development configuration (DO NOT COMMIT)
- **`.env.example`** - Template for required variables
- See [`.env.local`](.env.local) for detailed comments

### Database Provider

| Provider | Use Case | Configuration |
|----------|----------|---|
| **SQLite** | Local development (default) | `DATABASE_PROVIDER=sqlite`<br>`DATABASE_URL=file:./prisma/dev.db` |
| **PostgreSQL** | Production | `DATABASE_PROVIDER=postgresql`<br>`DATABASE_URL=postgresql://...` |

The app automatically switches based on `DATABASE_PROVIDER`.

---

## ✅ What Works Out of the Box

The following features work in local development **without any external API keys**:

- ✓ User authentication (email/password)
- ✓ User signup & login
- ✓ Database persistence
- ✓ Browse all 404 templates
- ✓ View template documentation
- ✓ Static pages (pricing, legal, etc.)
- ✓ UI/UX interactions and animations

---

## ⚠️ Features Requiring External Services

### Google OAuth (Optional)
**Status**: Disabled by default in local dev

To enable Google OAuth:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials (Web application):
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`
5. Copy credentials to `.env.local`:
   ```bash
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

**Without these**: Email/password authentication still works fine.

### Paddle Payments (Optional)
**Status**: Disabled in local development

- Premium features are disabled locally
- All users have `isPro = false`
- Payment UI won't render

To enable (for testing):
1. Get Paddle API key from [paddle.com](https://paddle.com)
2. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
   NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_token
   PADDLE_API_KEY=your_api_key
   ```

### OpenAI / AI Features (Optional)
**Status**: Gracefully disabled if not configured

- AI-powered 404 customization will show user-friendly error message
- All other features work normally

To enable:
1. Get API key from [platform.openai.com](https://platform.openai.com/api-keys)
2. Add to `.env.local`:
   ```bash
   OPENAI_API_KEY=sk-proj-your_key
   ```

### Resend / Email Notifications (Optional)
**Status**: Disabled in local development

- Template requests are logged to console instead of emailing
- User experience unchanged (success message still shown)

To enable:
1. Get API key from [resend.com](https://resend.com)
2. Add to `.env.local`:
   ```bash
   RESEND_API_KEY=your_api_key
   ```

### Umami Analytics (Optional)
**Status**: Completely optional, no impact on functionality

Skip entirely for local development.

---

## 🔄 Database Migrations

### Create a New Migration
```bash
# After modifying prisma/schema.prisma
pnpm exec prisma migrate dev --name descriptive_name
```

### View Database GUI
```bash
pnpm exec prisma studio
```

Opens an interactive GUI at http://localhost:5555

### Reset Database (Caution!)
```bash
# Drops all data and re-runs migrations
pnpm exec prisma migrate reset
```

---

## 🐛 Troubleshooting

### "DATABASE_PROVIDER is required"
**Solution**: Ensure `.env.local` has:
```bash
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:./prisma/dev.db
```

### "Cannot find module '@prisma/adapter-pg'" in local dev
**Solution**: This is expected - SQLite doesn't need the PostgreSQL adapter. The app will only load it if `DATABASE_PROVIDER=postgresql`.

### "PrismaClient is already instantiated"
**Solution**: Clear `.next` build cache:
```bash
rm -rf .next
pnpm dev
```

### "BETTER_AUTH_SECRET is required"
**Solution**: Add to `.env.local`:
```bash
BETTER_AUTH_SECRET=any_random_string_for_local_dev
```

### Database file not created
**Solution**: Run migrations:
```bash
pnpm exec prisma migrate dev --name init
```

---

## 📦 Project Structure

```
Error404/
├── .env.local                 # ← Your local config (git-ignored)
├── .env.example               # ← Reference template
├── prisma/
│   ├── schema.prisma          # ← Database schema (supports SQLite & PostgreSQL)
│   ├── dev.db                 # ← SQLite database (created after migrations)
│   └── migrations/            # ← Migration history
├── lib/
│   ├── db.ts                  # ← Prisma client (auto-switches adapters)
│   ├── auth.ts                # ← Better-auth config (disables OAuth if not configured)
│   ├── paddle.ts              # ← Gracefully handles missing Paddle config
│   └── auth-client.ts         # ← Client-side auth
├── server/
│   └── ai.ts                  # ← OpenAI integration (with error handling)
└── app/
    └── (site)/request/
        └── actions.ts         # ← Email submission (works without Resend)
```

---

## 🚀 Development Workflow

### Start with SQLite (Recommended)
```bash
# No external services needed
pnpm dev
```

### Gradually Enable Services
```bash
# Add Google OAuth (optional)
# Add Paddle for payment testing (optional)
# Add OpenAI for AI features (optional)
# Add Resend for email (optional)
```

### Switch to PostgreSQL (For Production)
```bash
# Update .env.local
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://user:password@host:5432/error404

# Re-run migrations
pnpm exec prisma migrate deploy
```

---

## 🎯 Next Steps

1. ✓ Copy `.env.local` from the generated file
2. ✓ Run `pnpm install`
3. ✓ Run `pnpm exec prisma migrate dev --name init`
4. ✓ Run `pnpm dev`
5. Open http://localhost:3000

**That's it!** Your local development server is ready.

---

## 📝 Notes for Production

- **Never** commit `.env.local` (already in `.gitignore`)
- Use environment variables from your deployment platform:
  - Vercel: Dashboard → Settings → Environment Variables
  - Railway: Project → Variables
  - Render: Environment
  - Docker: Compose file or secrets
- Always use PostgreSQL in production (not SQLite)
- Ensure all external services are configured:
  - Real Paddle API keys
  - Real OpenAI keys
  - Real Resend API key
  - Real Google OAuth credentials

---

## 🔗 Useful Links

- [Better-Auth Documentation](https://better-auth.com)
- [Prisma ORM Guide](https://www.prisma.io/docs)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables)

