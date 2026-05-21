# Contributing to Error404

First off, thanks for taking the time to contribute! 🎉

## Code of Conduct

This project adheres to the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainer email].

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what the problem is**
- **Explain which behavior you expected instead**
- **Include screenshots if applicable**
- **Include your environment details** (OS, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Use a clear and descriptive title**
- **Provide a step-by-step description of the suggested enhancement**
- **Provide specific examples to demonstrate the steps**
- **Describe the current behavior and expected behavior**
- **Explain why this enhancement would be useful**

### Pull Requests

- Follow the [TypeScript style guide](#typescript-style-guide)
- Include appropriate test cases
- Update documentation as needed
- Add yourself to [AUTHORS](AUTHORS.md)

## Development Setup

### Prerequisites
- Node.js 18+
- pnpm 9+

### Local Setup

```bash
# Clone the repository
git clone https://github.com/manishpatel00/Error404-UI.git
cd Error404-UI

# Install dependencies
pnpm install

# Setup environment
cp .env.example .env.local
# Fill in required environment variables

# Run database migrations
pnpm prisma migrate dev

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the application.

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Test additions/changes
- `chore`: Build/dependency changes

### Examples
- `feat(components): add new Glitch404 component`
- `fix(auth): resolve session timeout issue`
- `docs: update installation guide`
- `perf(components): optimize animation performance`

## TypeScript Style Guide

- Use strict TypeScript mode (enabled by default)
- Use meaningful variable names
- Document complex functions with JSDoc comments
- Export types explicitly
- Use type-safe patterns

```typescript
// ✅ Good
interface ComponentProps {
  title: string;
  onClick: (id: string) => void;
}

export function MyComponent({ title, onClick }: ComponentProps) {
  return <button onClick={() => onClick(title)}>{title}</button>;
}

// ❌ Bad
export function MyComponent(props: any) {
  return <button onClick={props.click}>{props.title}</button>;
}
```

## Component Guidelines

### Structure
```
components/
  404/
    NewComponent.tsx      # Main component
    NewComponent.module.css  # Styles (if needed)
    index.ts             # Export
    README.md            # Documentation
```

### Documentation
Every component should include:
- Clear props interface with JSDoc
- Usage example in README.md
- Preview in Storybook (if applicable)

```typescript
/**
 * Creative 404 error page component
 * @param title - The main error title
 * @param description - Detailed error message
 * @returns Rendered error component
 */
export function NewComponent({
  title,
  description,
}: NewComponentProps) {
  // Implementation
}
```

## Testing

Write tests for all new features:

```bash
# Run tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

Test file structure:
```
__tests__/
  components/
    404/
      NewComponent.test.tsx
```

## Performance Guidelines

- Lazy load components when possible
- Optimize animations for 60fps
- Use `React.memo` for components that don't need frequent re-renders
- Monitor bundle size impact
- Use next/image for images

## Accessibility

- Ensure keyboard navigation support
- Add ARIA labels where appropriate
- Test with screen readers
- Maintain sufficient color contrast
- Test with axe or similar tools

## Documentation

- Update README.md for user-facing changes
- Keep API documentation current
- Add JSDoc comments to exported functions
- Update CHANGELOG.md

## Need Help?

- 📚 Check [documentation](README.md)
- 💬 Open a discussion for questions
- 🐛 Search existing issues
- 📧 Contact maintainers

Thank you for contributing! 🚀
