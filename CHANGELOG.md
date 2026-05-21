# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- New logo and branding updates
- Enhanced header with updated logo sizing
- Prisma client generation in build pipeline

### Changed

- Updated build scripts for better deployment

### Fixed

- Prisma client generation issues on Vercel deployment

---

## [0.1.0] - 2026-05-22

### Added

- Initial release
- 19+ creative 404 error page components
- Authentication with Clerk and Better Auth
- Payment integration with Paddle
- PostgreSQL database integration
- Dark mode support
- TypeScript strict mode
- Comprehensive component documentation
- MDX support for documentation

### Features

- User Project Gallery Lab
- Interactive 404 components
- Copy & Paste ready code
- Full customization support
- Production-ready infrastructure

---

## How to Release

1. Update version in `package.json`
2. Update this CHANGELOG.md
3. Create a git tag: `git tag v0.2.0`
4. Push tag: `git push origin v0.2.0`
5. GitHub Actions will create a release
