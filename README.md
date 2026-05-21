# Error404

> Transform your error pages from boring to extraordinary. A production-ready collection of beautifully crafted, interactive 404 error page components that turn user frustration into delight.

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## Table of Contents

- [Overview](#overview)
- [CLI Tool](#cli-tool)
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
- [AI Integration](#ai-integration)
- [Database](#database)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Overview

**Error404** is a modern, full-stack Next.js application that provides a comprehensive library of creative and interactive 404 error page components. Instead of showing users a generic "Page Not Found" message, transform that moment into an engaging experience with themed, animated, and interactive error pages inspired by popular brands and creative concepts.

### Why Error404?

- **User Experience First**: Turn error pages into engaging experiences
- **Production Ready**: Enterprise-grade code with TypeScript
- **Highly Customizable**: Each component is fully customizable and documented
- **Copy & Paste**: Easy integration with comprehensive documentation
- **Modern Stack**: Built with the latest Next.js, React, and TypeScript

---

## CLI Tool

### Error404 CLI - Generate Custom 404 Pages Instantly

The **Error404 CLI** is a powerful command-line tool that lets you add beautiful, pre-built 404 error pages to your Next.js projects with a single command. No manual file copying, no configuration hassle—just instant, production-ready error pages.

#### Overview

Error404 is an npm package that provides a seamless way to integrate professionally designed 404 error pages into your Next.js applications. Choose from 15+ stunning templates and add them to your project in seconds.

```bash
# Install globally
npm install -g error404

# Or use with npx (no installation required)
npx error404 add simple
```

#### Key Features

- **Zero Configuration**: Works out of the box with Next.js 13+ (App Router)
- **15+ Premium Templates**: Choose from carefully crafted designs
- **Instant Setup**: Add components with a single command
- **TypeScript Support**: Full type safety included
- **Dependency Management**: Automatically detects missing dependencies
- **Smart File Placement**: Files are created in the correct Next.js directories
- **List & Preview**: Browse available templates before installing
- **Easy Removal**: Clean uninstall with the remove command

---

### Installation

#### Global Installation (Recommended)

```bash
npm install -g error404
```

#### Use with npx (No Installation)

```bash
npx error404 <command>
```

#### Requirements

- **Node.js**: >= 16.0.0
- **Next.js**: >= 13.0.0 (App Router)
- **Package Manager**: npm, yarn, or pnpm

---

### Commands

#### `error404 add <template>`

Add a 404 page template to your Next.js project.

```bash
error404 add modern
```

**Options:**

- `<template>` - Template name (required)
- `--path <path>` - Custom output path (optional)
- `--force` - Overwrite existing files (optional)

**Example:**

```bash
# Add the Modern template
error404 add modern

# Add with custom path
error404 add terminal --path ./app/custom-404

# Force overwrite existing files
error404 add snow --force
```

**What it does:**

1. Validates your Next.js project structure
2. Copies the selected template to `app/not-found.tsx`
3. Installs required dependencies (if missing)
4. Creates necessary component files in `components/404/`
5. Confirms successful installation

---

#### `error404 list`

Display all available 404 page templates.

```bash
error404 list
```

**Output:**

```
Available 404 Page Templates:

  1. simple          - Clean, minimalist design
  2. modern          - Contemporary with animations
  3. google          - Google-inspired layout
  4. vercel          - Vercel-style error page
  5. terminal        - Interactive terminal UI
  6. macos           - macOS system UI style
  7. retrotv         - Vintage TV aesthetic
  8. blueglitch      - Cyberpunk glitch effects
  9. particles       - Animated particle system
  10. snow           - Falling snow animation
  11. poet           - Artistic, poetic design
  12. stoneage       - Prehistoric themed
  13. strangerthings - 80s sci-fi inspired
  14. amongus        - Game-inspired design
  15. geeksforgeeks  - Educational platform style

Usage: error404 add <template-name>
```

**Options:**

- `--detailed` - Show additional template information
- `--json` - Output in JSON format

---

#### `error404 remove`

Remove the currently installed 404 page template.

```bash
error404 remove
```

**Options:**

- `--keep-deps` - Keep installed dependencies
- `--yes` - Skip confirmation prompt

**Example:**

```bash
# Remove with confirmation
error404 remove

# Remove without confirmation
error404 remove --yes

# Remove but keep dependencies
error404 remove --keep-deps
```

**What it does:**

1. Removes `app/not-found.tsx`
2. Cleans up component files from `components/404/`
3. Optionally removes unused dependencies
4. Restores default Next.js 404 behavior

---

### Available Templates

| Template Name    | Style          | Dependencies    | Complexity        |
| ---------------- | -------------- | --------------- | ----------------- |
| `simple`         | Minimalist     | None            | ⭐ Beginner       |
| `modern`         | Contemporary   | None            | ⭐ Beginner       |
| `google`         | Brand-inspired | None            | ⭐ Beginner       |
| `vercel`         | Brand-inspired | None            | ⭐⭐ Intermediate |
| `geeksforgeeks`  | Educational    | None            | ⭐⭐ Intermediate |
| `terminal`       | Developer      | None            | ⭐⭐ Intermediate |
| `macos`          | System UI      | None            | ⭐⭐ Intermediate |
| `retrotv`        | Vintage        | None            | ⭐⭐ Intermediate |
| `blueglitch`     | Glitch effect  | None            | ⭐⭐⭐ Advanced   |
| `particles`      | Interactive    | @tsparticles/\* | ⭐⭐⭐ Advanced   |
| `snow`           | Seasonal       | @tsparticles/\* | ⭐⭐⭐ Advanced   |
| `poet`           | Artistic       | None            | ⭐⭐ Intermediate |
| `stoneage`       | Themed         | None            | ⭐⭐ Intermediate |
| `strangerthings` | Pop culture    | None            | ⭐⭐⭐ Advanced   |
| `amongus`        | Game-inspired  | None            | ⭐⭐⭐ Advanced   |

---

### How It Works

#### File Placement

When you run `error404 add <template>`, the CLI automatically creates files in the correct Next.js App Router structure:

```
your-nextjs-project/
├── app/
│   └── not-found.tsx          # 👈 Main 404 page (created here)
├── components/
│   └── 404/
│       └── [TemplateName].tsx # 👈 Component files (created here)
└── package.json
```

#### Template Selection

1. **Browse templates**: Run `error404 list` to see all available options
2. **Choose one**: Pick a template based on your project's style
3. **Install it**: Run `error404 add <template-name>`
4. **Customize**: Edit the generated files to match your brand

#### Dependency Handling

The CLI automatically:

- Detects which dependencies are required for your chosen template
- Checks if they're already installed in your project
- Prompts you to install missing dependencies
- Provides the exact install command for your package manager

---

### Usage Examples

#### Example 1: Quick Setup

```bash
# Navigate to your Next.js project
cd my-nextjs-app

# Install error404 globally
npm install -g error404

# Add a simple 404 page
error404 add simple

# Start your dev server
npm run dev

# Visit http://localhost:3000/nonexistent to see your new 404 page
```

#### Example 2: Using npx (No Installation)

```bash
# Add a modern animated 404 page
npx error404 add modern

# The CLI will:
# ✅ Create app/not-found.tsx
# ✅ Create components/404/ModernPage.tsx
# ✅ Check for required dependencies
# ✅ Prompt to install if missing
```

#### Example 3: Browse and Choose

```bash
# List all available templates
error404 list

# Pick one and install
error404 add terminal

# Test it out
npm run dev
```

#### Example 4: Switch Templates

```bash
# Remove current template
error404 remove

# Add a different one
error404 add particles

# Install dependencies when prompted
pnpm install @tsparticles/engine @tsparticles/react @tsparticles/slim
```

#### Example 5: Custom Path (Advanced)

```bash
# Add template to custom location
error404 add snow --path ./app/error-pages

# Note: You'll need to manually wire it up in this case
```

---

### Troubleshooting

#### "Not a Next.js project"

**Problem**: CLI can't detect Next.js configuration.

**Solution**:

```bash
# Make sure you're in the project root
cd path/to/your/nextjs-project

# Verify next.config.js or next.config.ts exists
ls next.config.*
```

---

#### "Template already exists"

**Problem**: A 404 page is already installed.

**Solution**:

```bash
# Option 1: Remove existing first
error404 remove
error404 add <new-template>

# Option 2: Force overwrite
error404 add <template> --force
```

---

#### "Missing dependencies"

**Problem**: Template requires packages not installed.

**Solution**:

```bash
# The CLI will show you what's missing
# Install them with your package manager

# For npm:
npm install @tsparticles/engine @tsparticles/react @tsparticles/slim

# For pnpm:
pnpm install @tsparticles/engine @tsparticles/react @tsparticles/slim

# For yarn:
yarn add @tsparticles/engine @tsparticles/react @tsparticles/slim
```

---

#### "Permission denied"

**Problem**: Can't write files to the project directory.

**Solution**:

```bash
# On Unix/Mac, check permissions
ls -la app/

# Fix permissions if needed
chmod -R 755 app/

# Or run with sudo (not recommended)
sudo error404 add <template>
```

---

#### "Command not found: error404"

**Problem**: CLI not installed globally or not in PATH.

**Solution**:

```bash
# Option 1: Use npx instead
npx error404 add <template>

# Option 2: Install globally
npm install -g error404

# Option 3: Check global bin path
npm config get prefix
# Add the bin folder to your PATH
```

---

### Advanced Usage

#### Programmatic API

You can also use error404 programmatically in your Node.js scripts:

```javascript
const { add404Page, listTemplates, remove404Page } = require("error404");

// Add a template
await add404Page("modern", {
  path: "./app",
  force: true,
});

// List templates
const templates = await listTemplates();
console.log(templates);

// Remove template
await remove404Page({
  keepDeps: false,
});
```

#### Custom Templates

To create your own templates:

1. Fork the error404 repository
2. Add your template to `templates/`
3. Update the template registry
4. Submit a pull request

---

### CLI Features Roadmap

- [ ] Interactive template picker with previews
- [ ] Custom theme configuration (colors, fonts)
- [ ] Template preview in terminal
- [ ] Multi-template support (different templates for different routes)
- [ ] Template customization wizard
- [ ] Export templates to standalone components
- [ ] Cloud template marketplace

---

## Features

### Core Features

- **19+ Premium 404 Components**: Carefully crafted, unique designs including Among Us, Blue Glitch, Bug Game, Google-inspired, macOS-style, Modern, Particles, Poet, Retro TV, Snow, Stone Age, Stranger Things, Terminal, Vercel-style, and more
- **Interactive Previews**: Live component previews with real-time code viewing
- **Comprehensive Documentation**: Detailed MDX-based documentation for each component
- **Native Dark Mode**: Beautifully optimized dark interface by default
- **Responsive Design**: Mobile-first, fully responsive components
- **Particle Effects**: Advanced particle systems with TSParticles

### Platform Features

- **User Authentication**: Secure authentication with Better Auth and Google OAuth
- **User Dashboard**: Personalized user profiles and component management
- **Payment Integration**: Paddle integration for premium features
- **AI Assistant (Coming Soon)**: OpenAI-powered assistant for customization (Premium feature)
- **Database**: PostgreSQL with Prisma ORM
- **Type Safety**: Full TypeScript coverage across the entire codebase

### Developer Experience

- **MDX Documentation**: Rich, interactive documentation
- **Component Props Tables**: Auto-generated props documentation
- **CLI Commands**: Quick component installation via CLI
- **Code Snippets**: Copy-paste ready code examples
- **Tabbed Code Blocks**: Multiple implementation examples
- **Version Control**: Git-based workflow with proper .gitignore

---

## Tech Stack

### Frontend

- **[Next.js 16.1](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[TSParticles](https://particles.js.org/)** - Particle effects
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management (Forced Dark Mode)

### Backend & Database

- **[Prisma](https://www.prisma.io/)** - Modern ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Database (Neon)
- **[Better Auth](https://www.better-auth.com/)** - Authentication
- **[Paddle](https://www.paddle.com/)** - Payment processing

### AI & Content

- **[OpenAI](https://openai.com/)** - AI integration
- **[MDX](https://mdxjs.com/)** - Markdown with JSX
- **[AI SDK](https://sdk.vercel.ai/)** - AI toolkit

### Development Tools

- **[pnpm](https://pnpm.io/)** - Fast, disk space efficient package manager
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing

---

## Quick Start

Get started in 60 seconds:

```bash
# Clone the repository
git clone https://github.com/manishpatel00/error404.git
cd 404-lab

# Install dependencies
pnpm install

# Set up environment variables
cp .env.paddle.example .env.local
# Edit .env.local with your credentials

# Run database migrations
pnpm prisma migrate dev

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** 18.0 or higher
- **pnpm** 8.0 or higher
- **PostgreSQL** database (or use [Neon](https://neon.tech/))
- **Git**

### Step-by-Step Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/manishpatel00/error404.git
   cd 404-lab
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the root directory:

   ```bash
   cp .env.paddle.example .env.local
   ```

   Fill in the required environment variables (see [Configuration](#configuration)).

4. **Database Setup**

   ```bash
   # Generate Prisma Client
   pnpm prisma generate

   # Run migrations
   pnpm prisma migrate dev

   # (Optional) Seed the database
   node scripts/check-users.js
   ```

5. **Start Development Server**

   ```bash
   pnpm dev
   ```

---

## Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

#### Core Configuration

```env
# Application URLs
NEXT_PUBLIC_API_URL=http://localhost:3000
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000/api/auth
```

#### Authentication

```env
# Better Auth
BETTER_AUTH_SECRET=your_secret_key_here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

#### Database

```env
# PostgreSQL Connection String
DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
```

#### AI Integration

```env
# OpenAI API Key
OPENAI_API_KEY=sk-proj-your_openai_api_key
```

#### Payment Processing (Paddle)

```env
# Paddle Configuration
NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=your_paddle_client_token
NEXT_PUBLIC_PADDLE_PRICE_ID=your_paddle_price_id

# Paddle Server-side
PADDLE_API_KEY=your_paddle_api_key
PADDLE_WEBHOOK_SECRET_KEY=your_paddle_webhook_secret
```

### Obtaining API Keys

#### OpenAI API Key

1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new secret key

#### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs

#### Paddle Integration

1. Sign up at [Paddle](https://www.paddle.com/)
2. Access your dashboard
3. Get your client token and API key
4. Set up webhook endpoint

#### Database (Neon)

1. Sign up at [Neon](https://neon.tech/)
2. Create a new project
3. Copy the connection string

---

## Available Components

### Component Library

| Component             | Style          | Interactivity   | Difficulty   |
| --------------------- | -------------- | --------------- | ------------ |
| **SimplePage**        | Minimalist     | Static          | Beginner     |
| **ModernPage**        | Contemporary   | Animated        | Beginner     |
| **Google**            | Brand-inspired | Static          | Beginner     |
| **Vercel**            | Brand-inspired | Animated        | Intermediate |
| **GeeksforGeeks**     | Educational    | Interactive     | Intermediate |
| **Terminal**          | Developer      | Interactive CLI | Intermediate |
| **MacOs**             | System UI      | Interactive     | Intermediate |
| **RetroTv**           | Vintage        | Animated        | Intermediate |
| **BlueGlitch**        | Glitch effect  | Animated        | Advanced     |
| **Particles**         | Effects        | Interactive     | Advanced     |
| **Snow**              | Seasonal       | Particle system | Advanced     |
| **Poet**              | Artistic       | Dynamic text    | Intermediate |
| **StoneAge**          | Themed         | Illustrated     | Intermediate |
| **StrangerThings**    | Pop culture    | Animated        | Advanced     |
| **AmongUs**           | Game-inspired  | Interactive     | Advanced     |
| **BugGame**           | Playful        | Game mechanics  | Advanced     |
| **Void**              | Abstract       | 3D effects      | Advanced     |
| **TabDisplay**        | Utility        | Multi-tab       | Intermediate |
| **TabDisplayDynamic** | Utility        | Dynamic content | Advanced     |

### Component Features

Each component includes:

- Full TypeScript types
- Customizable props
- Responsive design
- Accessibility features
- Native dark mode aesthetic
- Documentation with examples
- Copy-paste ready code

---

## Usage

### Basic Implementation

1. **Choose a Component**

   Browse components at `http://localhost:3000/components`

2. **View Documentation**

   ```
   http://localhost:3000/components/[component-slug]
   ```

3. **Copy the Code**

   Each component page includes:
   - Live preview
   - Installation instructions
   - Props documentation
   - Usage examples

### Example: Using the SimplePage Component

```tsx
import { SimplePage } from "@/components/404/SimplePage";

export default function NotFound() {
  return (
    <SimplePage
      title="Page Not Found"
      message="The page you're looking for doesn't exist."
      showHomeButton={true}
    />
  );
}
```

### Customization

All components accept props for customization:

```tsx
import { ModernPage } from "@/components/404/ModernPage";

export default function Custom404() {
  return (
    <ModernPage
      title="Oops! Lost in Space"
      subtitle="This page has drifted into the void"
      primaryColor="#FF6B6B"
      buttonText="Return to Earth"
      onButtonClick={() => router.push("/")}
    />
  );
}
```

### Advanced Usage with Particles

```tsx
import { Particles } from "@/components/404/Particles";

export default function AnimatedNotFound() {
  return (
    <div className="min-h-screen">
      <Particles
        particleCount={100}
        particleColor="#ffffff"
        backgroundColor="#000000"
      />
    </div>
  );
}
```

---

## Project Structure

```
404-lab/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Public site routes
│   │   ├── components/           # Component showcase
│   │   ├── pricing/              # Pricing page
│   │   └── user/                 # User dashboard
│   ├── actions/                  # Server actions
│   ├── ai/                       # AI assistant
│   ├── api/                      # API routes
│   │   └── auth/                 # Auth endpoints
│   ├── signin/                   # Sign in page
│   ├── signup/                   # Sign up page
│   └── forgot-password/          # Password reset
│
├── components/                   # React components
│   ├── 404/                      # 404 components library
│   │   ├── AmongUs.tsx
│   │   ├── BlueGlitch.tsx
│   │   ├── Terminal.tsx
│   │   └── ...                   # 19+ components
│   ├── auth/                     # Auth forms
│   ├── content/                  # Content components
│   ├── docs/                     # MDX documentation
│   ├── Landing/                  # Landing page
│   ├── site/                     # Site layout
│   └── ui/                       # UI primitives
│
├── lib/                          # Utility libraries
│   ├── auth.ts                   # Auth configuration
│   ├── auth-client.ts            # Auth client
│   ├── db.ts                     # Database client
│   ├── paddle.ts                 # Paddle integration
│   └── 404-components.ts         # Component registry
│
├── prisma/                       # Database schema
│   ├── schema.prisma             # Prisma schema
│   └── migrations/               # Database migrations
│
├── server/                       # Server utilities
│   └── ai.ts                     # AI configuration
│
├── types/                        # TypeScript types
│   ├── mdx.d.ts                  # MDX types
│   └── raw.d.ts                  # Raw loader types
│
├── public/                       # Static assets
├── scripts/                      # Utility scripts
├── .env.local                    # Environment variables
├── next.config.ts                # Next.js config
├── tailwind.config.ts            # Tailwind config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies
```

---

## Authentication

### Features

- Email/Password authentication
- Google OAuth integration
- Password reset functionality
- Session management
- Protected routes
- User profiles

### Implementation

The app uses [Better Auth](https://www.better-auth.com/) for authentication:

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

### Protected Routes

```typescript
// proxy.ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
};
```

---

## Payments Integration

### Paddle Setup

The application integrates Paddle for payment processing:

1. **Sandbox Environment**: Test payments without real charges
2. **Production Environment**: Live payment processing
3. **Webhook Handling**: Automatic subscription management
4. **Price IDs**: Configure product pricing

### Implementation

```typescript
// lib/paddle.ts
import { Paddle } from "@paddle/paddle-node-sdk";

export const paddle = new Paddle(process.env.PADDLE_API_KEY);

// Usage
await paddle.prices.get(priceId);
```

### Webhook Endpoint

```
POST /api/paddle-webhook
```

Handles subscription events:

- `subscription.created`
- `subscription.updated`
- `subscription.canceled`

---

## AI Integration (Coming Soon)

### Planned Features

- Component customization assistant
- Code generation
- Natural language queries
- Streaming responses

### Usage

The AI assistant will be available at `/ai` (currently in development):

```typescript
// server/ai.ts
import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function generateComponent(prompt: string) {
  const result = await generateText({
    model: openai("gpt-4-turbo"),
    prompt: `Generate a 404 component: ${prompt}`,
  });

  return result.text;
}
```

---

## Database

### Schema

The application uses Prisma with PostgreSQL:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  image     String?
  createdAt DateTime @default(now())

  // Paddle integration
  customerId       String?
  subscriptionId   String?
  subscriptionStatus String?
}
```

### Migrations

```bash
# Create a new migration
pnpm prisma migrate dev --name migration_name

# Apply migrations
pnpm prisma migrate deploy

# Reset database
pnpm prisma migrate reset

# Open Prisma Studio
pnpm prisma studio
```

---

## Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/manishpatel00/error404.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables
   - Deploy

3. **Configure Environment**

   Add all environment variables from `.env.local` to Vercel:
   - Go to Project Settings → Environment Variables
   - Add each variable
   - Redeploy

### Other Platforms

#### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

#### VPS Setup

1. Install Node.js and pnpm
2. Clone repository
3. Set environment variables
4. Build: `pnpm build`
5. Start: `pnpm start`
6. Use PM2 for process management

---

## Contributing

We welcome contributions! Here's how you can help:

### How to Contribute

1. **Fork the Repository**

   ```bash
   git clone https://github.com/manishpatel00/error404.git
   ```

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Add new 404 components
   - Improve existing components
   - Fix bugs
   - Update documentation

4. **Commit Your Changes**

   ```bash
   git commit -m "feat: add amazing new 404 component"
   ```

5. **Push and Create PR**

   ```bash
   git push origin feature/your-feature-name
   ```

### Adding New Components

1. Create component in `components/404/YourComponent.tsx`
2. Add MDX documentation in `components/docs/yourcomponent.mdx`
3. Register in `lib/404-components.ts`
4. Add to component showcase
5. Update README

### Code Standards

- Use TypeScript for all new code
- Follow existing code style
- Write meaningful commit messages
- Add JSDoc comments
- Test your changes
- Update documentation

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Manish

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## Support

### Get Help

- **Documentation**: [Full documentation](https://404-lab.vercel.app/docs)
- **Issues**: [GitHub Issues](https://github.com/manishpatel00/error404/issues)
- **Discussions**: [GitHub Discussions](https://github.com/manishpatel00/error404/discussions)
- **Email**: support@error404.com

### Community

- **Discord**: Join our community server
- **Twitter**: [@error404](https://twitter.com/error404)
- **Blog**: Latest updates and tutorials

### Sponsors

Support this project by becoming a sponsor. Your logo will appear here with a link to your website.

[Become a Sponsor](https://github.com/sponsors/manishpatel00)

---

## Roadmap

### Q1 2026

- [ ] 10 new component designs
- [ ] Component builder UI
- [ ] A/B testing framework
- [ ] Analytics integration

### Q2 2026

- [ ] Vue.js support
- [ ] Svelte support
- [ ] CLI tool for component installation
- [ ] Component marketplace

### Q3 2026

- [ ] Mobile app
- [ ] Advanced animations
- [ ] 3D components
- [ ] Video backgrounds

---

## Acknowledgments

Built with love using:

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment platform
- [Better Auth](https://www.better-auth.com/) - Authentication
- [Prisma](https://www.prisma.io/) - Database ORM
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TSParticles](https://particles.js.org/) - Particle effects

Special thanks to all contributors and the open-source community.

---

<div align="center">

**[Website](https://404-lab.vercel.app)** • **[Documentation](https://404-lab.vercel.app/docs)** • **[Components](https://404-lab.vercel.app/components)** • **[Pricing](https://404-lab.vercel.app/pricing)**

Made with ❤️ by developers, for developers

⭐ Star us on GitHub — it motivates us a lot!

</div>
