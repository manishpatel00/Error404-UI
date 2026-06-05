# error404-react

> Beautiful, interactive 404 error page components for React & Next.js

[![npm version](https://img.shields.io/npm/v/error404-react.svg)](https://www.npmjs.com/package/error404-react)
[![npm downloads](https://img.shields.io/npm/dm/error404-react.svg)](https://www.npmjs.com/package/error404-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

Transform your boring error pages into extraordinary experiences. A collection of **17 beautifully crafted, interactive 404 components** ready to drop into any React or Next.js project.

## Preview

| Component        | Description                      |
| ---------------- | -------------------------------- |
| `StrangerThings` | Retro Upside Down themed 404     |
| `AmongUs`        | Space-themed Among Us game style |
| `Particles`      | Interactive particle animation   |
| `Terminal`       | Hacker-style terminal output     |
| `BugGame`        | Playable mini-game 404           |
| `Void`           | Dark, minimalist void effect     |
| `RetroTv`        | Old CRT television static        |
| `MacOs`          | macOS system error style         |
| `Snow`           | Falling snow animation           |
| `BlueGlitch`     | Glitch art blue screen           |
| `StoneAge`       | Prehistoric caveman style        |
| `Poet`           | Elegant poetry-themed            |
| `Google`         | Google-inspired minimal          |
| `GeeksforGeeks`  | Developer-themed                 |
| `Vercel`         | Vercel deployment style          |
| `ModernPage`     | Clean modern design              |
| `SimplePage`     | Minimal and clean                |

## Installation

```bash
npm install error404-react
# or
pnpm add error404-react
# or
yarn add error404-react
```

## Usage

```tsx
import { StrangerThings } from "error404-react";

export default function NotFound() {
  return <StrangerThings />;
}
```

### Next.js App Router

```tsx
// app/not-found.tsx
import { Particles } from "error404-react";

export default function NotFound() {
  return <Particles />;
}
```

### Next.js Pages Router

```tsx
// pages/404.tsx
import { Terminal } from "error404-react";

export default function Custom404() {
  return <Terminal />;
}
```

## All Available Components

```tsx
import {
  AmongUs,
  BlueGlitch,
  BugGame,
  GeeksforGeeks,
  Google,
  MacOs,
  ModernPage,
  Particles,
  Poet,
  RetroTv,
  SimplePage,
  Snow,
  StoneAge,
  StrangerThings,
  Terminal,
  Vercel,
  Void,
} from "error404-react";
```

## Peer Dependencies

Make sure you have these installed in your project:

```bash
npm install react react-dom next
```

## Alternative: CLI Tool

Prefer to own the code? Use the CLI to copy components directly into your project:

```bash
npx error404-cli add
```

## License

MIT © [manishpatel00](https://github.com/manishpatel00)
