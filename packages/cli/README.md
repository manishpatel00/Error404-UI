# error404-cli

> CLI tool to add beautiful 404 error page components directly into your React/Next.js project

[![npm version](https://img.shields.io/npm/v/error404-cli.svg)](https://www.npmjs.com/package/error404-cli)
[![npm downloads](https://img.shields.io/npm/dm/error404-cli.svg)](https://www.npmjs.com/package/error404-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Inspired by [shadcn/ui](https://ui.shadcn.com/) — instead of installing a package, **you own the code**. The CLI downloads any of 17 stunning 404 components directly into your project so you can customize freely.

## Usage

No installation needed. Just run:

```bash
npx error404-cli add
```

This opens an interactive menu:

```
? Which 404 component would you like to add?
  ❯ Simple Page
    Modern Page
    Stranger Things
    Terminal
    Snow
    Among Us
    Stone Age
    Retro TV
    Blue Glitch
    Poet
    Particles
    Mac OS
    Google
    Geeks for Geeks
    Vercel
    Bug Game
    Void
```

Select a component → it downloads directly to `components/404/` in your project.

## Add a Specific Component

```bash
npx error404-cli add StrangerThings
npx error404-cli add Particles
npx error404-cli add Terminal
```

## Available Components

| Name            | Command                               |
| --------------- | ------------------------------------- |
| Simple Page     | `npx error404-cli add SimplePage`     |
| Modern Page     | `npx error404-cli add ModernPage`     |
| Stranger Things | `npx error404-cli add StrangerThings` |
| Terminal        | `npx error404-cli add Terminal`       |
| Snow            | `npx error404-cli add Snow`           |
| Among Us        | `npx error404-cli add AmongUs`        |
| Stone Age       | `npx error404-cli add StoneAge`       |
| Retro TV        | `npx error404-cli add RetroTv`        |
| Blue Glitch     | `npx error404-cli add BlueGlitch`     |
| Poet            | `npx error404-cli add Poet`           |
| Particles       | `npx error404-cli add Particles`      |
| Mac OS          | `npx error404-cli add MacOs`          |
| Google          | `npx error404-cli add Google`         |
| Geeks for Geeks | `npx error404-cli add GeeksforGeeks`  |
| Vercel          | `npx error404-cli add Vercel`         |
| Bug Game        | `npx error404-cli add BugGame`        |
| Void            | `npx error404-cli add Void`           |

## After Adding a Component

Use it in your Next.js app:

```tsx
// app/not-found.tsx
import StrangerThings from "@/components/404/StrangerThings";

export default function NotFound() {
  return <StrangerThings />;
}
```

## Alternative: npm Package

Prefer importing without copying files? Use the npm package instead:

```bash
npm install error404-react
```

```tsx
import { StrangerThings } from "error404-react";
```

## License

MIT © [manishpatel00](https://github.com/manishpatel00)
