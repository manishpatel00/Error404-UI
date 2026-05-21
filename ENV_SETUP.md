# Environment Variables Documentation

This project requires the following environment variables to run:

## Authentication & Security

### Clerk (Authentication)

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_***
CLERK_SECRET_KEY=sk_live_***
```

### Better Auth

```
BETTER_AUTH_SECRET=your_random_secret_key_here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000
```

## Database

### PostgreSQL Connection

```
DATABASE_PROVIDER=postgresql
DATABASE_URL=postgresql://user:password@localhost:5432/error404
```

## API Endpoints

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Payments

### Paddle Integration

```
PADDLE_API_KEY=your_paddle_api_key
PADDLE_ENVIRONMENT=sandbox  # or production
```

## Email

### Email Template Recipient

```
REQUEST_TEMPLATE_EMAIL_TO=your_email@example.com
```

## Node Environment

```
NODE_ENV=development  # or production
```

## Setup Instructions

1. **Copy the example file:**

   ```bash
   cp .env.example .env.local
   ```

2. **Get Clerk credentials:**
   - Go to [Clerk Dashboard](https://dashboard.clerk.com/)
   - Create a new application
   - Copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`

3. **Setup Better Auth:**
   - Generate a secure random string for `BETTER_AUTH_SECRET`
   - Set `BETTER_AUTH_URL` to your application URL

4. **Setup Database:**
   - Create a PostgreSQL database
   - Add the connection string to `DATABASE_URL`
   - Run migrations: `pnpm prisma migrate dev`

5. **Setup Paddle (Optional):**
   - Go to [Paddle Dashboard](https://vendor.paddle.com/)
   - Get your API key
   - Set `PADDLE_ENVIRONMENT` to `sandbox` for testing

6. **Test the setup:**
   ```bash
   pnpm dev
   ```

## Security Notes

- Never commit `.env.local` or any secrets
- Use `.env.example` to document required variables without secrets
- Rotate secrets regularly
- Use different credentials for development, staging, and production
