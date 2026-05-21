# Performance Optimization Guide

## Bundle Size Optimization

### Current Analysis

```bash
# Check bundle size
pnpm build
pnpm build:analyze  # Requires bundle analyzer setup
```

### Recommendations

1. **Code Splitting**
   - Implement route-based code splitting for 404 components
   - Load components on-demand

2. **Image Optimization**
   - Use Next.js Image component (already in use ✅)
   - WebP format for supported browsers
   - SVG for icons (already using Lucide ✅)

3. **CSS Optimization**
   - Tailwind CSS purging (enabled ✅)
   - Remove unused utilities
   - CSS minification (automatic in production ✅)

### Implementation

```typescript
// Good: Dynamic import for heavy components
const HeavyComponent = dynamic(() => import('./Heavy'), {
  loading: () => <Skeleton />,
});
```

## Runtime Performance

### Optimization Checklist

- [ ] Use `React.memo` for non-changing components
- [ ] Implement `useMemo` for expensive computations
- [ ] Use `useCallback` for event handlers passed to children
- [ ] Lazy load animations (Framer Motion)
- [ ] Throttle/debounce scroll/resize handlers
- [ ] Optimize database queries with indexes

### Database Query Optimization

```sql
-- Add indexes for frequently queried fields
CREATE INDEX idx_user_email ON "user"(email);
CREATE INDEX idx_user_clerk_id ON "user"(clerk_id);
CREATE INDEX idx_account_user_id ON "account"(user_id);
CREATE INDEX idx_session_user_id ON "session"(user_id);
```

See [Database Setup](#database-setup) below.

## Web Vitals Monitoring

### Critical Web Vitals

- **LCP** (Largest Contentful Paint) - Target: < 2.5s
- **FID** (First Input Delay) - Target: < 100ms
- **CLS** (Cumulative Layout Shift) - Target: < 0.1

### Implementation

```typescript
import { CLS, FID, FCP, LCP, TTFB } from "web-vitals";

function sendToAnalytics(metric: Metric) {
  // Send to your analytics service
}

LCP(sendToAnalytics);
FID(sendToAnalytics);
CLS(sendToAnalytics);
```

## Caching Strategy

### HTTP Caching Headers

```javascript
// next.config.ts
images: {
  minimumCacheTTL: 31536000, // 1 year for immutable images
}
```

### API Response Caching

```typescript
// Implement in API routes
response.setHeader("Cache-Control", "public, max-age=3600");
```

## Database Setup

### Create Optimization Indexes

```sql
-- For better query performance on frequently accessed fields

-- User queries
CREATE INDEX idx_user_email ON "user"(email);
CREATE INDEX idx_user_clerk_id ON "user"(clerk_id);
CREATE INDEX idx_user_paddle_customer_id ON "user"(paddle_customer_id);

-- Session management
CREATE INDEX idx_session_user_id ON "session"(user_id);
CREATE INDEX idx_session_expires_at ON "session"(expires_at);

-- Account linking
CREATE INDEX idx_account_user_id ON "account"(user_id);
CREATE INDEX idx_account_provider ON "account"(provider, provider_account_id);

-- Verification tokens
CREATE INDEX idx_verification_identifier ON "verification"(identifier);
```

### Run with Prisma

```bash
# Execute raw SQL
pnpm prisma db execute --stdin < indexes.sql

# Or create a migration
pnpm prisma migrate dev --name add_performance_indexes
```

## Monitoring & Profiling

### Enable Next.js Analytics

```bash
# In your deployment, enable Web Analytics
# This helps track Core Web Vitals in production
```

### Local Performance Testing

```bash
# Lighthouse audit
pnpm lighthouse https://localhost:3000

# Network throttling
# Test with Chrome DevTools
```

## Production Checklist

- [ ] Enable compression
- [ ] Setup CDN for static assets
- [ ] Configure HTTP caching headers
- [ ] Enable database indexes
- [ ] Setup monitoring (Sentry, LogRocket)
- [ ] Configure rate limiting
- [ ] Enable CORS appropriately
- [ ] Setup security headers

See [next.config.ts](next.config.ts) for current configuration.
