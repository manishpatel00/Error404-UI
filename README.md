# Error404 - Creative Error Pages Platform

> Transform your error pages from boring to extraordinary. A production-ready collection of beautifully crafted, interactive 404 error page components that turn user frustration into delight.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Components](#available-components)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Payments Integration](#payments-integration)
- [Database](#database)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

**Error404** is a modern, full-stack Next.js application providing a comprehensive library of creative and interactive 404 error page components. Instead of showing users a generic "Page Not Found" message, transform that moment into an engaging experience with themed, animated, and interactive error pages.

### Why Choose Error404?

- **User Experience First** - Turn error pages into delightful experiences
- **Production Ready** - Enterprise-grade code with full TypeScript support
- **Highly Customizable** - Each component is fully customizable and documented
- **Copy & Paste Ready** - Easy integration with comprehensive documentation
- **Modern Stack** - Built with Next.js 16, React 19, and TypeScript
- **19+ Components** - Choose from diverse, professionally designed templates
- **Dark Mode Native** - Beautiful dark theme optimized for modern web

---

## Features

### 🎨 Component Library

- **19+ Premium 404 Components**: Uniquely designed templates including:
  - Among Us Game-inspired
  - Blue Glitch (cyberpunk effects)
  - Bug Game (interactive)
  - Google-inspired
  - macOS System UI
  - Modern & Contemporary
  - Particles (advanced animations)
  - Poet (artistic)
  - Retro TV (vintage aesthetic)
  - Snow (seasonal)
  - Stone Age (prehistoric)
  - Stranger Things (80s sci-fi)
  - Terminal (developer UI)
  - Vercel-style
  - And more...

### 🌐 Platform Features

- **Interactive Previews**: Live component previews with real-time code viewing
- **Comprehensive Documentation**: Detailed MDX-based documentation for each component
- **Dark Mode**: Native dark theme optimized by default
- **Responsive Design**: Mobile-first, fully responsive components
- **User Dashboard**: Personalized user profiles and component management
- **Authentication**: Secure authentication with Google OAuth support
- **Payment Integration**: Paddle integration for premium features
- **Type Safety**: 100% TypeScript coverage

### 💻 Developer Experience

- **MDX Documentation**: Rich, interactive documentation
- **Props Tables**: Auto-generated component documentation
- **Code Snippets**: Copy-paste ready code examples
- **Tabbed Code Blocks**: Multiple implementation examples
- **Full TypeScript**: Complete type safety and IntelliSense
- **Clean Architecture**: Well-organized, maintainable codebase

---

## Tech Stack

### Frontend

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - Modern UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[TSParticles](https://particles.js.org/)** - Advanced particle effects
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Advanced animations
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Backend & Database

- **[Prisma](https://www.prisma.io/)** - Modern ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Reliable database
- **[Better Auth](https://www.better-auth.com/)** - Authentication
- **[Paddle](https://www.paddle.com/)** - Payment processing

### Development Tools

- **[pnpm](https://pnpm.io/)** - Fast, efficient package manager
- **[ESLint](https://eslint.org/)** - Code quality
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## Quick Start

Get up and running in just 60 seconds:

```bash
# Clone the repository
git clone https://github.com/manishpatel00/error404.git
cd error404

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run database migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.0 or higher
- **pnpm** 8.0 or higher
- **PostgreSQL** database (or [Neon](https://neon.tech/) for cloud)
- **Git**

### Step-by-Step Setup

#### 1. Clone the Repository

```bash
git clone https://github.com/manishpatel00/error404.git
cd error404
```

#### 2. Install Dependencies

```bash
pnpm install
```

#### 3. Environment Configuration

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

#### 4. Database Setup

```bash
# Generate Prisma Client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# View database (optional)
pnpm prisma studio
```

#### 5. Start Development

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application running.

---

## Configuration

### Environment Variables

Create `.env.local` with these variables:

#### Core Configuration

```env
# Application URLs
NEXT_PUBLIC_API_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000/api/auth
```

#### Authentication

```env
# Better Auth Secret
BETTER_AUTH_SECRET=your_secret_key_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

#### Database

```env
# PostgreSQL Connection
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
```

#### Payment Processing

```env
# Paddle Configuration
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_paddle_client_token
PADDLE_API_KEY=your_paddle_api_key
PADDLE_WEBHOOK_SECRET_KEY=your_paddle_webhook_secret
```

### Getting API Keys

#### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add redirect URIs

#### Paddle Integration
1. Sign up at [Paddle.com](https://www.paddle.com/)
2. Access developer dashboard
3. Copy client token and API key

#### Database
1. Sign up at [Neon.tech](https://neon.tech/)
2. Create a new PostgreSQL project
3. Copy the connection string

---

## Available Components

### Component Library

| Component | Style | Difficulty |
|-----------|-------|-----------|
| **SimplePage** | Minimalist | ⭐ Beginner |
| **ModernPage** | Contemporary | ⭐ Beginner |
| **Google** | Brand-inspired | ⭐ Beginner |
| **Vercel** | Brand-inspired | ⭐⭐ Intermediate |
| **Terminal** | Developer UI | ⭐⭐ Intermediate |
| **MacOS** | System UI | ⭐⭐ Intermediate |
| **RetroTv** | Vintage | ⭐⭐ Intermediate |
| **GeeksforGeeks** | Educational | ⭐⭐ Intermediate |
| **BlueGlitch** | Glitch effects | ⭐⭐⭐ Advanced |
| **Particles** | Animated effects | ⭐⭐⭐ Advanced |
| **Snow** | Seasonal | ⭐⭐⭐ Advanced |
| **Poet** | Artistic | ⭐⭐ Intermediate |
| **StoneAge** | Themed | ⭐⭐ Intermediate |
| **StrangerThings** | Pop culture | ⭐⭐⭐ Advanced |
| **AmongUs** | Game-inspired | ⭐⭐⭐ Advanced |
| **BugGame** | Playful game | ⭐⭐⭐ Advanced |
| **Void** | Abstract | ⭐⭐⭐ Advanced |

### Features per Component

Each component includes:

- ✅ Full TypeScript types
- ✅ Customizable props
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Dark mode support
- ✅ Comprehensive documentation
- ✅ Copy-paste ready code

---

## Usage

### Basic Setup

1. **Browse Components**: Visit `/components` section
2. **Choose Template**: Select a 404 component
3. **Copy Code**: Use the provided code snippet
4. **Customize**: Modify to match your brand

### Example Implementation

```tsx
import { ModernPage } from "@/components/404/ModernPage";

export default function NotFound() {
  return (
    <ModernPage
      title="Oops! Page Not Found"
      subtitle="The page you're looking for doesn't exist."
      showHomeButton={true}
    />
  );
}
```

### With Custom Styling

```tsx
import { SimplePage } from "@/components/404/SimplePage";

export default function Custom404() {
  return (
    <SimplePage
      title="Lost in Space"
      message="This page has drifted away"
      primaryColor="#6366f1"
      onHomeClick={() => window.location.href = "/"}
    />
  );
}
```

---

## Project Structure

```
error404/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Public pages
│   │   ├── page.tsx              # Home page
│   │   ├── components/           # Component showcase
│   │   ├── pricing/              # Pricing page
│   │   └── user/                 # User dashboard
│   ├── actions/                  # Server actions
│   ├── api/                      # API routes
│   │   └── auth/                 # Authentication endpoints
│   ├── signin/                   # Sign in page
│   ├── signup/                   # Sign up page
│   └── forgot-password/          # Password recovery
│
├── components/                   # React components
│   ├── 404/                      # 404 Components Library (19+)
│   ├── auth/                     # Authentication forms
│   ├── docs/                     # MDX documentation
│   ├── site/                     # Site layout
│   └── ui/                       # UI primitives
│
├── lib/                          # Utilities & helpers
│   ├── auth.ts                   # Auth configuration
│   ├── auth-client.ts            # Auth client
│   ├── db.ts                     # Database client
│   ├── paddle.ts                 # Paddle integration
│   └── 404-components.ts         # Component registry
│
├── prisma/                       # Database
│   ├── schema.prisma             # Database schema
│   └── migrations/               # Migration history
│
├── public/                       # Static assets
├── types/                        # TypeScript types
├── .env.local                    # Environment variables
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── package.json                  # Dependencies
```

---

## Authentication

### Features

- 🔐 Email & Password authentication
- 🔑 Google OAuth integration
- 🔄 Password reset functionality
- 📝 Session management
- 🛡️ Protected routes
- 👤 User profiles

### Implementation

Uses [Better Auth](https://www.better-auth.com/) for secure authentication:

```typescript
// lib/auth.ts
import { betterAuth } from "better-auth";

export const auth = betterAuth({
  database: prisma,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
```

---

## Payments Integration

### Paddle Integration

Integrated payment processing with Paddle:

- 💳 Secure payment handling
- 📊 Subscription management
- 🔗 Webhook support
- 🧪 Sandbox testing

### Setup

1. Sign up at [Paddle](https://www.paddle.com/)
2. Configure API keys in environment variables
3. Set up webhook endpoint: `/api/paddle-webhook`
4. Configure pricing and products

---

## Database

### Schema Highlights

```prisma
model User {
  id               String   @id @default(cuid())
  email            String   @unique
  name             String?
  image            String?
  createdAt        DateTime @default(now())
  
  // Subscription fields
  customerId       String?
  subscriptionId   String?
  subscriptionStatus String?
}
```

### Database Commands

```bash
# Run migrations
pnpm prisma migrate dev

# Deploy migrations
pnpm prisma migrate deploy

# View database
pnpm prisma studio

# Reset database
pnpm prisma migrate reset
```

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Deploy error404"
git push origin main
```

2. **Import on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Add environment variables
   - Deploy

3. **Configure Environment Variables**
   - Go to Settings → Environment Variables
   - Add all variables from `.env.local`
   - Redeploy

### Alternative Platforms

#### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

---

## Contributing

We welcome contributions! Here's how:

### Steps to Contribute

1. **Fork the Repository**
```bash
git clone https://github.com/yourusername/error404.git
cd error404
```

2. **Create a Feature Branch**
```bash
git checkout -b feature/amazing-404-component
```

3. **Make Your Changes**
4. **Commit with Clear Messages**
```bash
git commit -m "feat: add amazing new 404 component"
```

5. **Push and Create PR**
```bash
git push origin feature/amazing-404-component
```

### Guidelines

- Use TypeScript for all code
- Follow existing code patterns
- Add JSDoc comments
- Write meaningful commit messages
- Test your changes
- Update documentation

---

## License

Licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

```
MIT License - Copyright (c) 2026 Manish Patel
```

---

## Support & Resources

### Get Help

- 📖 **Documentation**: [Full docs](https://error404.vercel.app/)
- 🐛 **Issues**: [GitHub Issues](https://github.com/manishpatel00/error404/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/manishpatel00/error404/discussions)

### Community

- ⭐ Star on GitHub
- 🔄 Share with others
- 💡 Request features
- 🐞 Report bugs

---

<div align="center">

**[Visit Website](https://error404-ui.vercel.app/)** • **[View Components](https://error404-ui.vercel.app/components)** • **[Read Docs](https://error404.vercel.app/docs)**

Made with ❤️ by developers, for developers

⭐ If you find this useful, please star us on GitHub!

</div>
