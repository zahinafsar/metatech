# MetaTech

Figma-to-web implementation of the MetaTech marketing site: a React (Vite + TypeScript) frontend
that renders every section from content served by an Express REST API.

## Requirements

- Node.js **>= 22.18** (the server runs TypeScript directly through Node's native type stripping)
- npm >= 10

## Setup

```bash
npm install
npm run dev
```

`npm run dev` starts both processes:

| Process | URL                   |
| ------- | --------------------- |
| Client  | http://localhost:8081 |
| Server  | http://localhost:8082 |

### Scripts

| Command              | Description                                    |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Client + server together                       |
| `npm run dev:client` | Vite dev server only                           |
| `npm run dev:server` | API only, with `--watch`                       |
| `npm run build`      | Type-checks every workspace, builds the client |
| `npm start`          | Runs the API                                   |
| `npm run typecheck`  | `tsc` across all workspaces                    |
| `npm run lint`       | oxlint                                         |
| `npm run format`     | oxfmt                                          |

## Project structure

npm workspaces monorepo:

```
apps/
  client/            React 19 + Vite + Tailwind v4
    src/
      app.tsx        DataProvider + ErrorBoundary + HomePage
      pages/         page composition
      sections/      one file per page section (+ its skeleton)
      data/          per-endpoint hooks: useHomeState, useHeroState, useFooterState, ...
      components/    app-level components (error boundary)
      lib/           API base URL and cache config
  server/            Express 5 REST API
    src/
      index.ts       app wiring, 404 + error handler, listen
      routes/        route table
      controllers/   content controller
lib/
  data/              content + types shared by client and server
  state/             DataProvider + useApi (fetching, caching, error normalisation)
  ui/                design-system components (Tailwind), Figma-accurate
```

### Data flow

`lib/data` holds the page content as plain TypeScript objects and derives every type from that data
(`export type Home = typeof home`), so the API contract cannot drift from the payload. The server
imports it and serves it; the client imports only the types.

`lib/state` is a small, app-agnostic fetching layer:

- `<DataProvider staleTime>` holds the cache in localstorage
- a response younger than `staleTime` (**60 s**) is served from cache with no network call
- concurrent calls for the same path share one in-flight promise
- non-2xx responses are parsed into an `ApiError` carrying the server's message and status
- `useApi<T>(path)` wraps that with `{ data, error, isLoading }`

`apps/client/src/data` wraps `useApi` once per endpoint, so a section just calls `useHeroState()`
and never touches URLs or generics. Each section renders its own layout-shaped skeleton while
loading and its own retryable `ErrorState` on failure, so one failing endpoint never blanks the page.

## API

Base path `/api`. Success responses return the payload directly; failures return
`{ "error": { "message": string, "status": number } }`.

| Endpoint              | Returns                                          |
| --------------------- | ------------------------------------------------ |
| `GET /api/navigation` | Header brand, links, mega-menu cards, CTA        |
| `GET /api/hero`       | Hero title, highlight phrases, description, CTA  |
| `GET /api/showreel`   | Media banner image, mask, shape, video, wordmark |
| `GET /api/clients`    | Eyebrow copy + client logo grid                  |
| `GET /api/intro`      | "We Are" intro block                             |
| `GET /api/pillars`    | Tabbed solution pillars                          |
| `GET /api/highlights` | Approach cards                                   |
| `GET /api/showcase`   | AmiCredible case study + carousel slides         |
| `GET /api/tech-stack` | Tech marquee rows                                |
| `GET /api/footer`     | Footer links, socials, copyright, wordmark       |

Unknown paths return 404 in the same error shape.

## Technologies

- **Frontend:** React 19, TypeScript, Vite 8, Tailwind CSS v4, CVA + tailwind-merge
- **Backend:** Node.js, Express 5, TypeScript (run natively via type stripping)
- **State:** React Context (`lib/state`), no external data library
- **Tooling:** npm workspaces, oxlint, oxfmt, husky + lint-staged, commitizen

## Assumptions

- Content is static, per the brief: no database and no authentication. It lives in `lib/data` as a
  typed module rather than a loose JSON file so the server and client share one contract.
- Images and video are static assets served by the client (`apps/client/public`); the API returns
  their paths, not their bytes.
- Single-page design, so no router. Navigation is in-page anchors; a router would be added the
  moment a second page exists.
- The 60 s cache window means each section endpoint is fetched once per page load.

## Future improvements

- Unit tests for the cache/`useApi` behaviour and the controllers (React Testing Library + `node:test`)
- Move content to a CMS or database behind the same endpoints, plus response caching headers
- Server-side rendering or prerendering for SEO and first-paint
- Playwright visual regression against the Figma reference
