# Changelog

All notable changes to `@asafarim/paginated-project-grid` are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.1] - 2026-09-19

### Added

- Four new ideation items on the demo Roadmap page: AI semantic search &
  smart collections, motion & delight animations, an embeddable web
  component build, and a command palette with keyboard navigation
  (issues #8–#11)

## [1.6.0] - 2026-09-19

### Added

- `dataSource` prop — fetch projects from a URL or an async resolver function
  instead of passing a static `projects` array
- Stale-while-revalidate caching via `cacheStrategy="swr"` and `cacheKey`;
  cached projects render instantly on repeat mounts while fresh data loads in
  the background
- Built-in error state with a Retry button (`errorMessage`, `retryText`,
  `onError`) for failed async fetches
- `useProjectSource` hook exported for standalone async data handling

### Changed

- `projects` prop is now optional (use either `projects` or `dataSource`)
- Rendering is SSR-safe: no `window`/`document` access outside effects

## [1.5.3] - 2026-09-06

### Fixed

- Responsive layout for HowTo demo cards

## [1.5.2] - 2026-09-06

### Added

- Routing to the demo app; GetStarted component on the demo page

### Changed

- Streamlined publish workflow; dependency updates

## [1.5.1] - 2026-02-21

### Fixed

- GitHub Pages deployment conflicts (gh-pages branch cleanup)

## [1.5.0] - 2026-02-21

### Changed

- Demo deployment switched to official GitHub Pages actions (`deploy-pages`)
- SPA deep-link support via generated `404.html`; environment-based base path

## [1.4.3] - 2026-02-21

### Fixed

- README screenshot and live-demo link updates

## [1.4.0] - 2025-08-06

### Added

- Demo assets and preview screenshot

## [1.3.0] - 2025-08-04

### Added

- Demo app improvements

## [1.1.0] - 2025-08-02

### Added

- Search functionality refinements and pagination polish

## [1.0.1] - 2025-07-14

### Added

- Initial release: responsive paginated project-card grid component with
  built-in search, built on `@asafarim/project-card`
