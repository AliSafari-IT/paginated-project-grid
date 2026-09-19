## AI Semantic Search & Smart Collections

**Planned for:** v2.1.0 (ideation)

### Description
Go beyond substring matching: accept a pluggable `semanticResolver` that ranks projects by embedding similarity, so users can type natural-language queries like "backend projects with auth" or "React dashboards with charts". Optionally group results into auto-detected smart collections. Falls back to the existing substring search when no resolver is provided.

### Proposed API
```tsx
<PaginatedProjectGrid
  projects={projects}
  semanticSearch={{
    resolver: embedQuery,
    threshold: 0.72,
    groupResults: 'collections',
  }}
  searchPlaceholder="Try 'React dashboards with charts'…"
/>
```

### Tasks
- [ ] Pluggable `semanticResolver` for embedding-based ranking
- [ ] Natural-language queries over title, description, techStacks, and tags
- [ ] Auto-grouped smart collections by detected similarity
- [ ] Graceful fallback to substring matching when no resolver is provided
- [ ] Demo use case + docs on the How To page

### Context
This is part of the [roadmap](https://alisafari-it.github.io/paginated-project-grid/roadmap). Vote with a +1 reaction on this issue to help prioritize.
