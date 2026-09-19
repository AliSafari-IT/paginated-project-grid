## Motion & Delight

**Planned for:** v2.2.0 (ideation)

### Description
Make the grid feel premium with purposeful motion: View Transitions API for page changes, FLIP animations when filtering/searching reorders cards, and staggered entrances on mount. All animation respects `prefers-reduced-motion` and can be disabled entirely.

### Proposed API
```tsx
<PaginatedProjectGrid
  projects={projects}
  animate
  transition="view"
  stagger={40}
  respectReducedMotion
/>
```

### Tasks
- [ ] View Transitions API for pagination changes (with graceful degradation)
- [ ] FLIP animations on filter/search reorder
- [ ] Staggered card entrance animations
- [ ] `prefers-reduced-motion` respected throughout
- [ ] `animate={false}` opt-out prop
- [ ] Demo toggle + docs on the How To page

### Context
This is part of the [roadmap](https://alisafari-it.github.io/paginated-project-grid/roadmap). Vote with a +1 reaction on this issue to help prioritize.
