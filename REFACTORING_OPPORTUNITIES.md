# Error404 Environment Setup Refactoring Opportunities

## Overview

This document identifies opportunities to improve the current environment variable handling, service initialization, and configuration management in the Error404 codebase.

---

## 🔴 High Priority Refactors

### 1. **Create Service Initialization Wrappers**

**Current Issue**: Services (Paddle, Resend, OpenAI) are initialized directly without consistent error handling.

**Current State**:
```typescript
// lib/paddle.ts - throws if token missing
token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN!

// server/ai.ts - throws on error
export async function getAIResponse(prompt: string)

// app/(site)/request/actions.ts - initialized without check
const resend = new Resend(process.env.RESEND_API_KEY)
```

**Recommended Refactor**:
```typescript
// lib/services.ts
export interface ServiceStatus {
  enabled: boolean;
  reason?: string;
}

export const paddle = {
  isEnabled: () => !!process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
  getStatus: (): ServiceStatus => ({
    enabled: !!process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
    reason: process.env.NODE_ENV === "development" ? "Disabled in local dev" : undefined,
  }),
};

export const resend = {
  isEnabled: () => !!process.env.RESEND_API_KEY,
  getStatus: (): ServiceStatus => ({
    enabled: !!process.env.RESEND_API_KEY,
    reason: process.env.NODE_ENV === "development" ? "Disabled in local dev" : undefined,
  }),
};

export const openai = {
  isEnabled: () => !!process.env.OPENAI_API_KEY,
  getStatus: (): ServiceStatus => ({
    enabled: !!process.env.OPENAI_API_KEY,
    reason: "AI features unavailable",
  }),
};

// In components/actions:
if (!resend.isEnabled()) {
  return userFriendlyMessage("Email not available in local dev");
}
```

**Benefits**:
- Centralized service status checking
- Consistent error messages
- Easier to test (mock service status)
- Single source of truth for feature availability

---

### 2. **Create Environment Validation Schema**

**Current Issue**: No runtime validation of environment variables. Errors only appear when services are used.

**Recommended Refactor**:
```typescript
// lib/env.ts
import { z } from "zod";

const envSchema = z.object({
  // Core (required)
  NODE_ENV: z.enum(["development", "production", "test"]),
  DATABASE_URL: z.string().url(),
  DATABASE_PROVIDER: z.enum(["sqlite", "postgresql"]).default("sqlite"),
  BETTER_AUTH_SECRET: z.string().min(8),
  BETTER_AUTH_URL: z.string().url(),
  NEXT_PUBLIC_BETTER_AUTH_URL: z.string().url(),

  // Optional - Auth
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),

  // Optional - Services
  PADDLE_API_KEY: z.string().optional(),
  NEXT_PUBLIC_PADDLE_CLIENT_TOKEN: z.string().optional(),
  NEXT_PUBLIC_PADDLE_ENVIRONMENT: z.enum(["sandbox", "production"]).optional(),
  OPENAI_API_KEY: z.string().optional(),
  RESEND_API_KEY: z.string().optional(),
  UMAMI_WEBSITE_ID: z.string().optional(),
});

export const env = envSchema.parse(process.env);

// Add to app layout or middleware
if (process.env.NODE_ENV === "development") {
  validateEnvironment();
}
```

**Benefits**:
- Early validation on app startup
- Clear error messages about missing required vars
- Type-safe env access throughout app
- Prevents runtime surprises

---

### 3. **Extract Database Configuration**

**Current Issue**: Database configuration is split between multiple files.

**Current State**:
- `lib/db.ts` - Prisma client initialization
- `prisma/schema.prisma` - Database provider
- `prisma.config.ts` - Config file
- `.env.local` - Connection string

**Recommended Refactor**:
```typescript
// lib/db-config.ts
export const dbConfig = {
  isPostgres: process.env.DATABASE_PROVIDER === "postgresql",
  isSqlite: process.env.DATABASE_PROVIDER === "sqlite",
  isDev: process.env.NODE_ENV === "development",
  connectionString: process.env.DATABASE_URL,
  
  getAdapter: () => {
    if (dbConfig.isPostgres) {
      return new PrismaPg(pool);
    }
    return undefined; // SQLite uses default
  },
};

// lib/db.ts
import { dbConfig } from "./db-config";

const adapter = dbConfig.getAdapter();
```

**Benefits**:
- Single source of truth for DB config
- Easier to add new database providers
- Clearer adapter selection logic

---

## 🟡 Medium Priority Refactors

### 4. **Create Environment Setup Checklist**

**Recommended File**: `ENVIRONMENT_SETUP.md`

```markdown
## Development Environment Checklist

- [ ] Copy `.env.local` from template
- [ ] Set `DATABASE_PROVIDER=sqlite` (or postgresql)
- [ ] Run `pnpm exec prisma migrate dev`
- [ ] Test basic auth with email/password
- [ ] Optional: Add Google OAuth credentials
- [ ] Optional: Add Paddle credentials
- [ ] Optional: Add OpenAI API key
- [ ] Run `pnpm dev` and verify at http://localhost:3000
```

---

### 5. **Move Prisma Configuration to Environment-Aware File**

**Current Issue**: `prisma.config.ts` doesn't dynamically load the provider.

**Recommended Refactor**:
```typescript
// prisma.config.ts - updated
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    provider: (process.env.DATABASE_PROVIDER || "sqlite") as "sqlite" | "postgresql",
    url: process.env.DATABASE_URL,
  },
});
```

---

### 6. **Consolidate Auth Configuration**

**Current Issue**: Auth setup is split and OAuth is mandatory in code.

**Refactored Approach** (already implemented):
- ✓ Make Google OAuth optional in `lib/auth.ts`
- ✓ Provide clear error messages when disabled

**Next Steps**:
- Create auth feature flags
- Allow disabling auth providers per environment
- Add auth test utilities

---

## 🟢 Low Priority Refactors

### 7. **Create Service Mock Utilities**

**For Testing**: Mock external services in tests without API calls.

```typescript
// lib/__mocks__/services.ts
export const mockPaddle = {
  getPaddle: async () => undefined,
  isEnabled: () => false,
};

export const mockResend = {
  emails: {
    send: async () => ({ error: null }),
  },
};
```

---

### 8. **Add Environment Startup Warnings**

**Goal**: Warn developers about missing optional services on dev server start.

```typescript
// lib/dev-warnings.ts
export function logStartupWarnings() {
  if (process.env.NODE_ENV !== "development") return;

  console.log("\n📋 Development Environment Status:\n");
  
  if (!process.env.OPENAI_API_KEY) {
    console.warn("⚠️  OPENAI_API_KEY not set - AI features disabled");
  }
  if (!process.env.RESEND_API_KEY) {
    console.warn("⚠️  RESEND_API_KEY not set - Email disabled");
  }
  if (!process.env.GOOGLE_CLIENT_ID) {
    console.warn("⚠️  GOOGLE_CLIENT_ID not set - Google OAuth disabled");
  }
  if (!process.env.PADDLE_API_KEY) {
    console.warn("⚠️  PADDLE_API_KEY not set - Payments disabled");
  }
  console.log("");
}

// app/layout.tsx
import { logStartupWarnings } from "@/lib/dev-warnings";

export default function RootLayout() {
  logStartupWarnings();
  // ...
}
```

---

### 9. **Document Feature Flags per Environment**

**Recommended File**: `FEATURE_FLAGS.md`

```markdown
# Feature Flags by Environment

| Feature | Local | Staging | Production |
|---------|-------|---------|-----------|
| Email (Resend) | ❌ | ✅ | ✅ |
| Payments (Paddle) | ❌ | ✅ (sandbox) | ✅ |
| AI Features (OpenAI) | ❌ | ✅ | ✅ |
| Google OAuth | ❓ | ✅ | ✅ |
| Umami Analytics | ❌ | ✅ | ✅ |
```

---

### 10. **Create Environment-Specific Middleware**

**Goal**: Handle missing services gracefully with middleware.

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const servicesStatus = {
    payment: !!process.env.PADDLE_API_KEY,
    email: !!process.env.RESEND_API_KEY,
    ai: !!process.env.OPENAI_API_KEY,
  };

  // Add to response headers for debugging
  const response = NextResponse.next();
  response.headers.set("X-Services-Status", JSON.stringify(servicesStatus));
  return response;
}
```

---

## 📊 Implementation Priority Matrix

| Refactor | Impact | Effort | Priority |
|----------|--------|--------|----------|
| Service Initialization Wrappers | High | Medium | 🔴 High |
| Environment Validation Schema | High | Low | 🔴 High |
| Extract DB Configuration | High | Low | 🔴 High |
| Setup Checklist | Medium | Very Low | 🟢 Low |
| Prisma Config Updates | Medium | Low | 🟡 Medium |
| Auth Feature Flags | Medium | Medium | 🟡 Medium |
| Service Mocks | Low | Medium | 🟢 Low |
| Startup Warnings | Low | Low | 🟢 Low |
| Feature Flags Doc | Low | Very Low | 🟢 Low |
| Environment Middleware | Low | Medium | 🟢 Low |

---

## 🚀 Quick Wins (Start Here)

1. **Today**: ✅ Use SQLite locally with `.env.local`
2. **This Week**: ✅ Add environment validation schema (Zod)
3. **This Sprint**: Consolidate service initialization
4. **Next Sprint**: Add environment-specific middleware

---

## 🔗 Related Files

- [LOCAL_SETUP.md](LOCAL_SETUP.md) - Setup instructions
- [.env.local](.env.local) - Current configuration
- [lib/db.ts](lib/db.ts) - Database client
- [lib/auth.ts](lib/auth.ts) - Authentication setup
- [prisma/schema.prisma](prisma/schema.prisma) - Database schema

