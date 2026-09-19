# Agent Guide — @asafarim/paginated-project-grid

React + TypeScript component: a responsive, paginated project-card grid with built-in
search. pnpm workspace: library at root, Vite demo app in `demo/` (consumes the lib
via `workspace:*`, plus `@asafarim/display-code`, `@asafarim/shared`,
`@asafarim/react-themes`).

## Layout

- `src/components/PaginatedProjectGrid.tsx` + `.module.css` — single component,
  flat `components/` dir (not per-component folders)
- `src/types/index.ts` — exported types (`PaginatedProjectGridProps`, `Project`)
- `src/types/css-modules.d.ts` — CSS-module declarations required by
  rollup-plugin-typescript2; keep it
- `src/index.ts` — public API barrel
- `demo/` — Vite + react-router v7 app; `VITE_BASE_PATH` env sets the base path in CI
- `scripts/release.js` — interactive local release helper (bumps minor, tags, pushes)

## Commands

- `pnpm run build` — `rollup -c` → `dist/index.js` + `dist/index.esm.js` + d.ts
  (postcss + terser via rollup plugins)
- `cd demo && pnpm build` — `tsc && vite build`
- `pnpm run demo` — builds lib, installs + runs demo
- No dedicated typecheck script — `cd demo && pnpm exec tsc --noEmit` or rely on builds
- **`prepare` script auto-runs `npm run build` on every `pnpm i`** — expect a rollup
  run (with a benign "react/jsx-runtime external" warning) during installs

## Conventions

- React **17 or 18** peer deps — don't use 18-only APIs (e.g. `useId`, `createRoot`
  requirements in the lib itself)
- Runtime dep on `@asafarim/project-card`; keep the dependency footprint minimal
- CSS modules throughout; component styles live next to the component
- `files` ships `dist`, `demo`, and `README.md` — **the demo dir goes in the npm
  tarball**; keep it clean and don't put large artifacts in it
- Don't hardcode README image URLs — publish workflow pins `demo/public/` images to
  the release commit SHA automatically

## Release

Publish trigger is **push to `main`/`master` with a version bump** — NOT tags:

1. Bump `version` in `package.json` (semver)
2. Add a `CHANGELOG.md` entry (Keep a Changelog)
3. `pnpm run build` and `cd demo && pnpm build` green
4. Commit → push `main`
5. `.github/workflows/publish.yml` compares version to npm and publishes only if it
   differs; `.github/workflows/main.yml` builds the demo and deploys `demo/dist`
   via `actions/deploy-pages`
6. Optional local flow: `node scripts/release.js` (interactive), or
   `pnpm run deploy` for a manual `gh-pages` branch deploy
7. Optionally `gh release create v{x.y.z} -R AliSafari-IT/paginated-project-grid --latest`

## Gotchas

- gh CLI authenticated as `AliSafari-IT` — pass `-R AliSafari-IT/paginated-project-grid`
- Remote uses the `github-asafarim` SSH alias; plain `git` works (no ownership issue)
- **Tags are inconsistent with npm**: local tag `v1.6.0` exists but npm's latest is
  `1.5.3` — always check `npm view @asafarim/paginated-project-grid versions` before
  picking a version number
- npm website lags the registry — verify publishes via `npm view ... dist-tags`
- npm maintenance windows can fail publishes with 503; rerun the failed job after
- pnpm may warn about ignored build scripts (esbuild) — `pnpm approve-builds` if needed
- Local pnpm version may differ from CI (observed v10.14.0 locally; workflow lets
  pnpm/action-setup pick)
