# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build
```

There are no lint or test scripts configured.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS v4 + React Router v7 + Motion (animations)

**Entry point flow:** `src/main.tsx` → `src/app/App.tsx` → `src/app/routes.ts` (RouterProvider)

### Routing

Two distinct route trees in `src/app/routes.ts`:

- `/login` and `/signup` — standalone auth pages, **outside** the Layout (no navigation bar)
- `/`, `/matches`, `/chat/:matchId`, `/profile` — nested under `Layout`, which renders `<Outlet>` + `<Navigation>`

Navigation is hidden automatically on `/chat/*` routes (see `Layout.tsx`).

### State & Data

There is **no backend and no global state manager**. All data lives in `src/app/data/mockData.ts` as static arrays exported directly:
- `profiles: Profile[]` — 4 mock user profiles
- `matches: Match[]` — pre-seeded matches referencing profile objects
- `chats: { [matchId: string]: Chat }` — message history keyed by matchId
- `currentUserId = 'current-user'` — the logged-in user's sentinel ID

Each page component imports from `mockData` directly and manages its own local state with `useState`.

### Key Behavioural Logic

**Swiping (`DiscoverPage.tsx`):**
- Tracks `currentIndex` into the `profiles` array; increment on each swipe
- Right swipe triggers a 30% random match (`Math.random() > 0.7`) showing a fullscreen modal for 3 seconds
- The next card is rendered underneath the current card at `scale: 0.95` for a stacked-cards visual

**Drag (`ProfileCard.tsx`):**
- Uses the `motion` library for drag-to-swipe gesture detection
- Calls `onSwipe('left' | 'right')` when drag threshold is crossed

**Chat (`ChatPage.tsx`):**
- Reads `matchId` from URL params via `useParams`
- Looks up the chat in `chats[matchId]` from mockData
- Current user messages identified by `senderId === currentUserId`

### Styling Rules

- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin; PostCSS config is intentionally empty
- Custom design tokens live in `src/styles/theme.css` (CSS variables) and are aliased in the `@theme inline` block
- Auth pages (`/login`, `/signup`) use a **black `#000000` background with red `#E50914` accents** (Metflix theme)
- Main app uses white/light-gray backgrounds with pink-to-orange gradients as accents
- `shadcn/ui` components are in `src/app/components/ui/` — prefer these over raw HTML for form elements

### TypeScript Interfaces

All shared types are in `src/app/types.ts`: `Profile`, `Match`, `Message`, `Chat`. Add new types here rather than inline.
