# Architecture & API Documentation

## Project Architecture

```
Error404 (Full-Stack Next.js Application)
│
├── Frontend Layer (React 19 + TypeScript)
│   ├── app/ (Next.js App Router)
│   │   ├── (site) - Public pages
│   │   ├── auth - Authentication pages
│   │   ├── api - API routes
│   │   └── actions - Server actions
│   └── components/ - React components
│       ├── 404/ - Error page components
│       ├── auth/ - Auth components
│       ├── site/ - Layout components
│       └── ui/ - Reusable UI components
│
├── Backend Layer (Node.js + Next.js API Routes)
│   ├── app/api/ - REST API endpoints
│   ├── app/actions/ - Server actions
│   └── server/ - Server utilities
│
├── Database Layer (PostgreSQL + Prisma)
│   ├── prisma/schema.prisma - Data model
│   └── prisma/migrations/ - Schema migrations
│
└── Infrastructure Layer
    ├── Authentication - Clerk + Better Auth
    ├── Payments - Paddle
    └── Deployment - Vercel
```

## Component Hierarchy

### 404 Components

```
404 Error Pages
├── Simple Page - Minimal design
├── Modern Page - Contemporary UI
├── Glitch Effect - Cyber aesthetic
├── Retro TV - Vintage style
├── Terminal - Command-line style
├── Particles - Interactive effects
└── ... (19+ total)
```

### UI Components

- Button - Action trigger
- Card - Content container
- Container - Layout wrapper
- Input - Form input
- Badge - Tag/label
- Dialog - Modal
- Tabs - Content switcher
- ScrollArea - Scrollable container
- Separator - Divider
- Skeleton - Loading state
- Tooltip - Information hint
- CodeBlock - Code display

## Data Model

### User Schema

```typescript
User {
  id: String (CUID)
  email: String (unique)
  name: String?
  image: String?
  clerkId: String (unique)
  isPro: Boolean
  plan: String (free/pro)
  paddleCustomerId: String?
  paddleSubscriptionId: String?
  subscriptionStatus: String?
  createdAt: DateTime
  updatedAt: DateTime
  accounts: Account[]
  sessions: Session[]
}
```

### Authentication Schema

```typescript
Account {
  id: String (CUID)
  userId: String (FK)
  provider: String (google, github, etc.)
  providerAccountId: String
  refreshToken: String?
  accessToken: String?
  expiresAt: Int?
  createdAt: DateTime
  updatedAt: DateTime
}

Session {
  id: String (CUID)
  userId: String (FK)
  token: String (unique)
  expiresAt: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}

Verification {
  id: String (CUID)
  identifier: String
  token: String (unique)
  expires: DateTime
  createdAt: DateTime
  updatedAt: DateTime
}
```

## API Endpoints

### Authentication Endpoints

#### POST /api/auth/signup

Create new user account

```json
Request: { email, password, name }
Response: { user, token, session }
Status: 201
```

#### POST /api/auth/signin

User login

```json
Request: { email, password }
Response: { user, token, session }
Status: 200
```

#### POST /api/auth/logout

User logout

```json
Response: { success }
Status: 200
```

#### GET /api/auth/me

Current user profile

```json
Response: { user }
Status: 200
Auth: Required
```

### User Endpoints

#### GET /api/user/profile

Get user profile

```json
Response: { user, isPro, subscriptionStatus }
Status: 200
Auth: Required
```

#### PUT /api/user/profile

Update user profile

```json
Request: { name, image }
Response: { user }
Status: 200
Auth: Required
```

#### DELETE /api/user/account

Delete user account

```json
Response: { success }
Status: 200
Auth: Required
```

### Payment Endpoints

#### GET /api/billing/status

Get current subscription status

```json
Response: { plan, status, renewalDate }
Status: 200
Auth: Required
```

#### POST /api/billing/checkout

Create checkout session

```json
Request: { planId }
Response: { checkoutUrl }
Status: 200
Auth: Required
```

#### POST /api/billing/webhook

Handle Paddle webhooks

```json
Request: Paddle event
Response: { success }
Status: 200
```

## Environment Variables Reference

See [ENV_SETUP.md](ENV_SETUP.md) for detailed setup instructions.

Required:

- DATABASE_URL
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- BETTER_AUTH_SECRET
- BETTER_AUTH_URL

Optional:

- PADDLE_API_KEY
- NODE_ENV

## Performance Considerations

- Database queries are optimized with Prisma
- Static pages are pre-rendered
- Dynamic pages use ISR (Incremental Static Regeneration) where applicable
- Images are optimized with Next.js Image component
- CSS is tree-shaken with Tailwind
- JavaScript is code-split per route

See [PERFORMANCE.md](PERFORMANCE.md) for optimization guidelines.

## Security Architecture

- Authentication via Clerk (OAuth2, JWT)
- Session management with Better Auth
- API routes protected with middleware
- Database credentials in environment variables
- CORS configured for trusted origins
- HTTP security headers enabled
- Input validation on all endpoints

See [SECURITY.md](SECURITY.md) for security guidelines.

## Deployment Architecture

### Development

- Local Next.js dev server
- PostgreSQL local instance
- Clerk development project
- Paddle sandbox environment

### Production

- Vercel deployment
- PostgreSQL cloud (AWS RDS, Render, etc.)
- Clerk production project
- Paddle production environment

### CI/CD Pipeline

- GitHub Actions for testing
- Automated builds and deployments
- Security scanning
- Dependency updates

See `.github/workflows/` for automation scripts.

## Error Handling Strategy

Global error handling:

1. Client-side error boundaries
2. Try-catch blocks in API routes
3. Proper HTTP status codes
4. Consistent error response format
5. Logging and monitoring (TODO: Sentry integration)

## Scaling Considerations

- Database indexing strategy (see [PERFORMANCE.md](PERFORMANCE.md))
- CDN for static assets
- API rate limiting
- Session scaling with Redis (optional)
- Database connection pooling
- Caching strategy for frequently accessed data

## Monitoring & Observability

TODO:

- [ ] Sentry for error tracking
- [ ] LogRocket for session replay
- [ ] PostHog for analytics
- [ ] Datadog for infrastructure monitoring
- [ ] Vercel Analytics for Core Web Vitals
