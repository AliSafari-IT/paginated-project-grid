## Command Palette & Keyboard Navigation

**Planned for:** v2.4.0 (ideation)

### Description
Power-user and accessibility upgrade: a Cmd+K / Ctrl+K command palette to jump to projects and trigger actions (search, next page, toggle theme), roving-tabindex arrow-key navigation across cards, a configurable shortcut map, and aria-live announcements for pagination and result counts.

### Proposed API
```tsx
<PaginatedProjectGrid
  projects={projects}
  commandPalette
  keyboardNavigation
  shortcuts={{ palette: 'mod+k', nextPage: ']' }}
/>
```

### Tasks
- [ ] Cmd+K / Ctrl+K command palette over projects and actions
- [ ] Roving-tabindex arrow-key navigation across cards
- [ ] Configurable `shortcuts` map prop
- [ ] aria-live announcements for pagination and result counts
- [ ] Full keyboard reachability audit (WCAG)
- [ ] Demo toggle + docs on the How To page

### Context
This is part of the [roadmap](https://alisafari-it.github.io/paginated-project-grid/roadmap). Vote with a +1 reaction on this issue to help prioritize.
