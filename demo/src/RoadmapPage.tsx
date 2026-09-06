import { useEffect, useState } from "react";
import { DisplayCode } from "@asafarim/display-code";
import { useTheme } from "@asafarim/react-themes";

// ─── Types ────────────────────────────────────────────────────────────────

type RoadmapStatus = "released" | "current" | "planned" | "ideation";

type ChangelogCategory =
  | "feature"
  | "fix"
  | "improvement"
  | "security"
  | "breaking"
  | "docs";

interface PpgRoadmapItem {
  version: string;
  date: string;
  isoDate: string;
  status: RoadmapStatus;
  title: string;
  details: string[];
  icon: string;
  category: ChangelogCategory;
  tags: string[];
  proposedApi?: string;
  issueUrl?: string;
  issueNumber?: number;
  votes?: number;
}

// ─── Timeline data ────────────────────────────────────────────────────────
// Past releases (changelog) reconstructed from git history + package versions,
// plus future roadmap items linked to GitHub issues.

const ppgTimelineData: PpgRoadmapItem[] = [
  // ── History ────────────────────────────────────────────────────────────
  {
    version: "1.0.0",
    date: "July 2025",
    isoDate: "2025-07-20",
    status: "released",
    title: "Initial Release",
    details: [
      "Responsive paginated grid of ProjectCard components",
      "Built-in search across title, description, techStacks, and tags",
      "Configurable cardsPerPage and responsive column breakpoints",
      "Light / dark theme support via currentTheme prop",
    ],
    icon: "✅",
    category: "feature",
    tags: ["pagination", "search", "responsive", "themes"],
  },
  {
    version: "1.1.0",
    date: "July 2025",
    isoDate: "2025-07-26",
    status: "released",
    title: "Demo App & Workspace Setup",
    details: [
      "Interactive demo with live controls for cardsPerPage, search, and theme",
      "pnpm workspace linking the demo to the library",
      "Mock data generator for realistic project showcases",
    ],
    icon: "🚀",
    category: "feature",
    tags: ["demo", "workspace", "mock-data"],
  },
  {
    version: "1.2.0",
    date: "August 2025",
    isoDate: "2025-08-10",
    status: "released",
    title: "Refined Types & ProjectCard Integration",
    details: [
      "Tightened Project type alignment with @asafarim/project-card",
      "Passed-through props: featured, status, priority, budget, relatedProjects",
      "Improved card-to-grid prop forwarding",
    ],
    icon: "🔧",
    category: "improvement",
    tags: ["types", "project-card", "props"],
  },
  {
    version: "1.3.0",
    date: "August 2025",
    isoDate: "2025-08-20",
    status: "released",
    title: "Enhanced Search & Load More Mode",
    details: [
      "Configurable searchFields array (title, description, techStacks, tags, category)",
      "showLoadMore toggle replacing pagination with incremental loading",
      "Customizable searchPlaceholder and noResultsMessage",
    ],
    icon: "🔍",
    category: "feature",
    tags: ["search", "load-more", "customization"],
  },
  {
    version: "1.4.0",
    date: "August 2025",
    isoDate: "2025-08-28",
    status: "released",
    title: "Tech Stack Icons & Loading States",
    details: [
      "showTechStackIcons toggle for badge rendering",
      "isLoading state with spinner and loadingMessage",
      "Empty state with helpful guidance when no projects exist",
      "Fixed showTechStackIcons checkbox behavior",
    ],
    icon: "⚡",
    category: "improvement",
    tags: ["tech-stack", "loading", "empty-state", "fix"],
  },
  {
    version: "1.5.0",
    date: "September 2025",
    isoDate: "2025-09-05",
    status: "released",
    title: "GitHub Pages Deployment & CI",
    details: [
      "GitHub Actions workflow for publishing to npm and GitHub Pages",
      "404.html for SPA routing on GitHub Pages",
      "Environment-based base path in Vite config",
      "GetStarted modal with installation guide in the demo",
    ],
    icon: "📦",
    category: "feature",
    tags: ["ci", "gh-pages", "spa", "demo"],
  },
  {
    version: "1.5.2",
    date: "September 2026",
    isoDate: "2026-09-06",
    status: "current",
    title: "Workspace Stabilization",
    details: [
      "Aligned demo dependencies with the @asafarim ecosystem",
      "Resolved pnpm workspace install races on Windows",
      "Updated README with live demo link and screenshot",
    ],
    icon: "🛠️",
    category: "fix",
    tags: ["workspace", "windows", "docs"],
  },

  // ── Future roadmap (GitHub issues) ──────────────────────────────────────
  {
    version: "1.6.0",
    date: "Planned",
    isoDate: "2026-10-01",
    status: "planned",
    title: "Server-Side Rendering & Async Data Support",
    details: [
      "SSR-safe rendering with no window/document access during initial render",
      "Async data source prop: fetch projects from a URL or resolver function",
      "Built-in loading and error states for async fetching",
      "Stale-while-revalidate caching for repeated navigations",
    ],
    icon: "🌐",
    category: "feature",
    tags: ["ssr", "async", "data-fetching", "caching"],
    proposedApi: `<PaginatedProjectGrid
  dataSource="/api/projects"
  cardsPerPage={6}
  currentTheme="dark"
  isLoading={isLoading}
  onError={(err) => console.error(err)}
  cacheStrategy="swr"
/>`,
    issueUrl: "https://github.com/AliSafari-IT/paginated-project-grid/issues/2",
    issueNumber: 2,
    votes: 0,
  },
  {
    version: "1.7.0",
    date: "Planned",
    isoDate: "2026-11-01",
    status: "planned",
    title: "Advanced Filtering & Faceted Search",
    details: [
      "Filter by category, status, priority, tech stack, and tags",
      "Multi-select facet sidebar with counts",
      "Combine free-text search with structured filters",
      "URL-synced filter state for shareable views",
    ],
    icon: "🎛️",
    category: "feature",
    tags: ["filtering", "facets", "search", "url-state"],
    proposedApi: `<PaginatedProjectGrid
  projects={projects}
  filters={{
    category: ['web', 'mobile'],
    status: ['active', 'in-progress'],
    techStacks: ['React', 'TypeScript'],
  }}
  enableFacets
  syncFiltersToUrl
/>`,
    issueUrl: "https://github.com/AliSafari-IT/paginated-project-grid/issues/3",
    issueNumber: 3,
    votes: 0,
  },
  {
    version: "1.8.0",
    date: "Planned",
    isoDate: "2026-12-01",
    status: "planned",
    title: "Virtualized Grid for Large Datasets",
    details: [
      "Windowed rendering of visible cards only, with configurable overscan",
      "Automatic virtualization threshold based on project count",
      "Preserve search, pagination, and load-more behavior when virtualized",
      "Stable scroll position during filter changes",
    ],
    icon: "📊",
    category: "improvement",
    tags: ["performance", "virtualization", "large-datasets"],
    proposedApi: `<PaginatedProjectGrid
  projects={largeProjectList}
  virtualize="auto"
  virtualizationThreshold={200}
  overscan={8}
  cardsPerPage={12}
/>`,
    issueUrl: "https://github.com/AliSafari-IT/paginated-project-grid/issues/4",
    issueNumber: 4,
    votes: 0,
  },
  {
    version: "1.9.0",
    date: "Planned",
    isoDate: "2027-01-01",
    status: "planned",
    title: "Sortable Columns & Custom Card Layouts",
    details: [
      "Sort by title, dateCreated, lastUpdated, priority, and custom fields",
      "Render-prop or slot for custom card content overriding the default ProjectCard",
      "Header toolbar with sort dropdown and view-mode toggle (grid/list)",
      "Persisted user preferences for sort and view mode",
    ],
    icon: "↕️",
    category: "feature",
    tags: ["sorting", "custom-cards", "view-modes", "preferences"],
    proposedApi: `<PaginatedProjectGrid
  projects={projects}
  sortable
  defaultSort={{ field: 'lastUpdated', direction: 'desc' }}
  renderCard={(project) => <MyCustomCard {...project} />}
  viewMode="list"
/>`,
    issueUrl: "https://github.com/AliSafari-IT/paginated-project-grid/issues/5",
    issueNumber: 5,
    votes: 0,
  },
  {
    version: "2.0.0",
    date: "Ideation",
    isoDate: "2027-02-01",
    status: "ideation",
    title: "Headless Mode & Render-Prop Architecture",
    details: [
      "usePaginatedProjectGrid hook returning state and helpers with no UI",
      "Fully controlled or uncontrolled state management",
      "Composable subcomponents (SearchBar, FilterPanel, Grid, Pagination)",
      "Tree-shakable headless entry point separate from the default component",
    ],
    icon: "💡",
    category: "breaking",
    tags: ["headless", "hooks", "composable", "architecture"],
    proposedApi: `import { usePaginatedProjectGrid, Grid, Pagination } from '@asafarim/paginated-project-grid/headless';

const { projects, page, setPage, search, setSearch } = usePaginatedProjectGrid({
  projects,
  cardsPerPage: 6,
});

return (
  <>
    <Grid projects={projects} />
    <Pagination page={page} onPageChange={setPage} />
  </>
);`,
    issueUrl: "https://github.com/AliSafari-IT/paginated-project-grid/issues/6",
    issueNumber: 6,
    votes: 0,
  },
];

// ─── Changelog timeline (past releases) ───────────────────────────────────

interface ChangelogEntry {
  id: string;
  version: string;
  date: string;
  category: ChangelogCategory;
  title: string;
  description: string;
  tags: string[];
}

function toChangelogEntry(item: PpgRoadmapItem): ChangelogEntry {
  return {
    id: `${item.version}-${item.status}-${item.title.replace(/\s+/g, "-")}`,
    version: item.version,
    date: item.isoDate,
    category: item.category,
    title: item.title,
    description: `${item.details.join(". ")}.`,
    tags: [item.status, ...item.tags],
  };
}

const categoryIcons: Record<ChangelogCategory, string> = {
  feature: "✨",
  fix: "🐛",
  improvement: "⚡",
  security: "🔒",
  breaking: "⚠️",
  docs: "📚",
};

const categoryColors: Record<ChangelogCategory, { bg: string; text: string; icon: string }> = {
  feature: { bg: "#e0f2fe", text: "#0369a1", icon: "#0284c7" },
  fix: { bg: "#fef2f2", text: "#b91c1c", icon: "#dc2626" },
  improvement: { bg: "#f0fdf4", text: "#15803d", icon: "#16a34a" },
  security: { bg: "#fffbeb", text: "#b45309", icon: "#d97706" },
  breaking: { bg: "#fef3c7", text: "#92400e", icon: "#f59e0b" },
  docs: { bg: "#f5f3ff", text: "#6d28d9", icon: "#7c3aed" },
};

function ChangelogTimeline({
  entries,
  title,
  subtitle,
}: {
  entries: ChangelogEntry[];
  title: string;
  subtitle: string;
}) {
  return (
    <div className="changelog-timeline changelog-timeline--left">
      <div className="timeline-header">
        <h2 className="timeline-title">{title}</h2>
        <p className="timeline-subtitle">{subtitle}</p>
      </div>
      <div className="timeline-container">
        <div className="timeline-line" />
        {entries.map((entry) => {
          const colors = categoryColors[entry.category];
          return (
            <div className="timeline-item" key={entry.id}>
              <div
                className="timeline-dot"
                style={{ borderColor: colors.icon }}
              />
              <div className="timeline-card">
                <div className="card-header">
                  <span className="category-icon">{categoryIcons[entry.category]}</span>
                  <div className="card-content">
                    <h3 className="card-title">{entry.title}</h3>
                    <div className="card-meta">
                      <span
                        className="category-label"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                        }}
                      >
                        {entry.category}
                      </span>
                      <span className="card-version">v{entry.version}</span>
                      <span aria-hidden="true">•</span>
                      <span>
                        {new Date(entry.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="card-description">{entry.description}</p>
                    <div className="card-tags">
                      {entry.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Roadmap list (future items with GitHub issue integration) ────────────

type GitHubIssue = {
  reactions?: {
    "+1"?: number;
  };
};

const GITHUB_API_BASE =
  "https://api.github.com/repos/AliSafari-IT/paginated-project-grid/issues";

function RoadmapList({
  items,
  isDark,
}: {
  items: PpgRoadmapItem[];
  isDark: boolean;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [votes, setVotes] = useState<Record<string, number>>(() =>
    Object.fromEntries(items.map((i) => [i.version, i.votes ?? 0]))
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      items
        .filter((item) => item.issueNumber)
        .map(async (item) => {
          const response = await fetch(`${GITHUB_API_BASE}/${item.issueNumber}`);
          if (!response.ok) {
            throw new Error(`GitHub returned ${response.status}`);
          }
          const issue = (await response.json()) as GitHubIssue;
          return [item.version, issue.reactions?.["+1"] ?? 0] as const;
        })
    )
      .then((reactionCounts) => {
        if (!cancelled) {
          setVotes((current) => ({
            ...current,
            ...Object.fromEntries(reactionCounts),
          }));
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [items]);

  function toggle(version: string) {
    setOpen((current) => (current === version ? null : version));
  }

  return (
    <div className="roadmap-list">
      {items.map((item, index) => {
        const isOpen = open === item.version;
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.version}
            className={`roadmap-item roadmap-item--${item.status}`}
          >
            <div className="roadmap-item__track">
              <span className="roadmap-item__dot" aria-hidden="true">
                {item.icon}
              </span>
              {!isLast && <div className="roadmap-item__line" aria-hidden="true" />}
            </div>

            <div className="roadmap-item__body">
              <button
                type="button"
                className="roadmap-item__summary"
                onClick={() => toggle(item.version)}
                aria-expanded={isOpen}
              >
                <span className="roadmap-item__version">v{item.version}</span>
                <span className="roadmap-item__date">{item.date}</span>
                <span
                  className={`roadmap-item__status roadmap-item__status--${item.status}`}
                >
                  {item.status}
                </span>
                <h3 className="roadmap-item__title">{item.title}</h3>
              </button>

              <div className="roadmap-item__details">
                <ul>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>

              {isOpen && (
                <div className="roadmap-item__preview">
                  {item.proposedApi && (
                    <DisplayCode
                      code={item.proposedApi}
                      language="tsx"
                      theme={isDark ? "dark" : "light"}
                      showLineNumbers={false}
                      showCopyButton={true}
                      fontSize="small"
                      maxHeight="300px"
                    />
                  )}
                  {item.issueUrl && (
                    <a
                      href={item.issueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="roadmap-issue"
                    >
                      Discuss on GitHub ↗
                    </a>
                  )}
                  {item.issueUrl && (
                    <a
                      href={item.issueUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="roadmap-vote-btn"
                    >
                      Vote on GitHub (+1) ({votes[item.version] ?? 0})
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Page component ───────────────────────────────────────────────────────

export function RoadmapPage() {
  const { resolvedMode } = useTheme();
  const isDark = resolvedMode === "dark";
  const [view, setView] = useState<"history" | "roadmap" | "all">("all");

  const history = ppgTimelineData.filter(
    (i) => i.status === "released" || i.status === "current"
  );
  const future = ppgTimelineData.filter(
    (i) => i.status === "planned" || i.status === "ideation"
  );

  return (
    <div className={`roadmap-page ${isDark ? "dark-theme" : ""}`}>
      <header className="roadmap-header">
        <h1 className="roadmap-title">PaginatedProjectGrid journey</h1>
        <p className="roadmap-subtitle">
          A continuous view of where{" "}
          <code>@asafarim/paginated-project-grid</code> has been and where it is heading.
        </p>
      </header>

      <div className="roadmap-toggle" role="group" aria-label="Timeline view">
        {(["history", "roadmap", "all"] as const).map((v) => (
          <button
            key={v}
            type="button"
            className={`roadmap-toggle__btn${
              view === v ? " roadmap-toggle__btn--active" : ""
            }`}
            onClick={() => setView(v)}
            aria-pressed={view === v}
          >
            {v === "history"
              ? "View History (Changelog)"
              : v === "roadmap"
              ? "View Future (Roadmap)"
              : "View All"}
          </button>
        ))}
      </div>

      <div className={`roadmap-columns roadmap-columns--${view}`}>
        {view !== "roadmap" && (
          <section className="roadmap-section roadmap-section--history">
            <ChangelogTimeline
              entries={history.map(toChangelogEntry)}
              title="Changelog"
              subtitle="Shipped updates for @asafarim/paginated-project-grid"
            />
          </section>
        )}

        {view !== "history" && (
          <section className="roadmap-section roadmap-section--future">
            <h2 className="roadmap-section__title">Roadmap</h2>
            <RoadmapList items={future} isDark={isDark} />
          </section>
        )}
      </div>
    </div>
  );
}
