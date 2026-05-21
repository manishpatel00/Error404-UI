# Security Best Practices

## Environment & Secrets

- ✅ Use `.env.local` (never commit)
- ✅ Keep `.env.example` without secrets
- ✅ Rotate secrets regularly
- ✅ Use secure random generators

See [ENV_SETUP.md](ENV_SETUP.md) for details.

## Authentication Security

### Clerk Integration

- Automatic session management
- Secure token handling
- Built-in CSRF protection
- Rate limiting on auth endpoints

### Better Auth

- Server-side session validation
- Secure session storage
- Automatic cleanup of expired sessions

## API Security

### Rate Limiting (TODO)

```typescript
// Implement rate limiting on:
// - Login attempts
// - Payment endpoints
// - File uploads
// - API endpoints
```

### CORS Configuration

```typescript
// Only allow trusted origins
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",") || [];
```

### Input Validation

```typescript
// Use zod or similar for schema validation
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
});
```

## Database Security

### Access Control

- ✅ Use environment variables for credentials
- ✅ Minimal database user permissions
- ✅ SSL connections enabled
- ✅ Regular backups configured

### Query Security

- Use Prisma (prevents SQL injection)
- Never concatenate SQL queries
- Sanitize user inputs

## HTTP Security Headers

### Recommended Headers

```javascript
// next.config.ts or vercel.json
"headers": [
  {
    "source": "/(.*)",
    "headers": [
      {
        "key": "X-Content-Type-Options",
        "value": "nosniff"
      },
      {
        "key": "X-Frame-Options",
        "value": "DENY"
      },
      {
        "key": "X-XSS-Protection",
        "value": "1; mode=block"
      },
      {
        "key": "Referrer-Policy",
        "value": "strict-origin-when-cross-origin"
      }
    ]
  }
]
```

## Dependency Security

### Regular Audits

```bash
# Check for vulnerabilities
pnpm audit

# Fix automatically
pnpm audit fix

# Review updates
pnpm update --latest
```

### GitHub Actions

- Automated security scanning (see `.github/workflows/security.yml`)
- Weekly dependency updates
- Vulnerability alerts enabled

## Compliance

### GDPR

- User data privacy: ✅ Clerk handles PII
- Right to deletion: Implement user deletion flow
- Data retention: Configure retention policies

### Payment Compliance

- PCI DSS: ✅ Paddle handles payment data
- Secure transaction logging
- Regular compliance audits

## Incident Response

If a security issue is discovered:

1. **Don't** post it publicly
2. **Do** email maintainer immediately
3. **Do** provide clear reproduction steps
4. **Do** allow time for fix before disclosure

See [SECURITY.md](SECURITY.md) for reporting details.

## Security Checklist

- [ ] Secrets never committed
- [ ] HTTPS enforced in production
- [ ] Security headers configured
- [ ] Regular dependency updates
- [ ] Input validation on all endpoints
- [ ] CORS properly configured
- [ ] Rate limiting implemented
- [ ] Logging and monitoring enabled
- [ ] Backups scheduled
- [ ] Security headers tests passing
