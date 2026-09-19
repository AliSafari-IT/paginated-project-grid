## Embeddable Web Component

**Planned for:** v2.3.0 (ideation)

### Description
Ship a `<paginated-project-grid>` custom-element build so the grid works in Vue, Angular, Svelte, or plain HTML — no React required on the host page. Attributes and properties bridge to the existing React props, `data-source` wires into the v1.6.0 async pipeline, and theming flows through CSS custom properties.

### Proposed API
```html
<paginated-project-grid
  data-source="/api/projects"
  cards-per-page="6"
  theme="dark"
></paginated-project-grid>
```

### Tasks
- [ ] Custom-element wrapper around the React component
- [ ] Separate build target + package export (e.g. `/element`)
- [ ] Attribute/property bridge for the existing prop surface
- [ ] `data-source` attribute wired to the async data pipeline
- [ ] Theming via CSS custom properties / `theme` attribute
- [ ] Framework-agnostic demo page or embed snippet

### Context
This is part of the [roadmap](https://alisafari-it.github.io/paginated-project-grid/roadmap). Vote with a +1 reaction on this issue to help prioritize.
