# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### The Yellow Brick Load (`artifacts/yellow-brick-load`)
- **Kind**: react-vite web app
- **Preview path**: `/`
- **Description**: A browser-based text adventure / interactive fiction game set in a dystopian Wizard of Oz reimagining. Industrial horror / institutional terminal aesthetic.
- **Tech**: React + Vite, Zustand for game state, plain CSS (no Tailwind used — game has its own global.css)
- **Structure**:
  - `src/engine/store.js` — Zustand game state (load, desync, smudge, compliance, etc.)
  - `src/engine/interpreter.js` — Passage text resolution, effect application, choice availability
  - `src/passages/index.js` — Passage registry (flat map of all passage objects)
  - `src/passages/lion.js` — Lion character passages (21 endings, only character implemented)
  - `src/components/TitleScreen.jsx` — Character selection screen
  - `src/components/PassageRenderer.jsx` — In-game passage display + choices
  - `src/styles/global.css` — Full game styles (DM Mono + Unbounded fonts, amber palette)
- **Characters**: Lion (playable), 7 others locked/stub

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
