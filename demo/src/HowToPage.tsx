import { useState, useRef, useCallback } from "react";
import { PaginatedProjectGrid } from "@asafarim/paginated-project-grid";
import { DisplayCode } from "@asafarim/display-code";
import { useTheme } from "@asafarim/react-themes";
import type { Project } from "@asafarim/paginated-project-grid";

// ─── Icons ────────────────────────────────────────────────────────────────

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CopyIcon({ copied }: { copied: boolean }) {
  if (copied) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

// ─── Source code reveal card ──────────────────────────────────────────────

function SourceReveal({ code, isDark }: { code: string; isDark: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setCopied(false), 1800);
    });
  }, [code]);

  return (
    <div className="howto-source">
      <div className="howto-source__toolbar">
        <button
          type="button"
          className="howto-source__btn howto-source__btn--toggle"
          onClick={() => setRevealed((v) => !v)}
          aria-expanded={revealed}
          aria-label={revealed ? "Hide source code" : "Show source code"}
        >
          <EyeIcon open={revealed} />
          <span>{revealed ? "Hide source" : "Show source"}</span>
        </button>
        {revealed && (
          <button
            type="button"
            className="howto-source__btn howto-source__btn--copy"
            onClick={copy}
            aria-label="Copy source code to clipboard"
          >
            <CopyIcon copied={copied} />
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        )}
      </div>
      {revealed && (
        <div className="howto-source__code">
          <DisplayCode
            code={code}
            language="tsx"
            theme={isDark ? "dark" : "light"}
            showLineNumbers={true}
            showCopyButton={false}
            fontSize="small"
            maxHeight="400px"
          />
        </div>
      )}
    </div>
  );
}

// ─── Sample data for live demos ───────────────────────────────────────────

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A personal portfolio built with React and TypeScript showcasing projects and blog posts.",
    image: { src: "https://picsum.photos/400/200?random=101", alt: "Portfolio Website" },
    techStacks: [
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "TypeScript", color: "#3178c6", icon: "🟦" },
    ],
    links: [
      { type: "demo", url: "https://example.com", label: "Live Demo" },
      { type: "repo", url: "https://github.com/example/repo", label: "Repository" },
    ],
    tags: [{ name: "Web" }, { name: "Frontend" }],
    category: "web",
    status: "active",
    isFeatured: true,
    isPublic: true,
  },
  {
    id: "2",
    title: "Task Manager API",
    description: "A RESTful API for managing tasks with authentication, built with Node.js and Express.",
    image: { src: "https://picsum.photos/400/200?random=102", alt: "Task Manager API" },
    techStacks: [
      { name: "Node.js", color: "#68a063", icon: "🟢" },
      { name: "Express", color: "#000", icon: "🚀" },
      { name: "MongoDB", color: "#47a248", icon: "🍃" },
    ],
    links: [{ type: "repo", url: "https://github.com/example/api", label: "Repository" }],
    tags: [{ name: "Backend" }, { name: "API" }],
    category: "backend",
    status: "completed",
    isPublic: true,
  },
  {
    id: "3",
    title: "Mobile Weather App",
    description: "A cross-platform weather application with real-time forecasts and radar maps.",
    image: { src: "https://picsum.photos/400/200?random=103", alt: "Mobile Weather App" },
    techStacks: [
      { name: "React Native", color: "#61dafb", icon: "⚛️" },
      { name: "TypeScript", color: "#3178c6", icon: "🟦" },
    ],
    links: [{ type: "demo", url: "https://example.com", label: "Live Demo" }],
    tags: [{ name: "Mobile" }, { name: "Full-stack" }],
    category: "mobile",
    status: "in-progress",
    isPublic: true,
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    description: "An analytics dashboard with interactive charts and real-time data streaming.",
    image: { src: "https://picsum.photos/400/200?random=104", alt: "Data Visualization Dashboard" },
    techStacks: [
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "D3.js", color: "#f68e56", icon: "📊" },
    ],
    links: [
      { type: "demo", url: "https://example.com", label: "Live Demo" },
      { type: "documentation", url: "https://example.com/docs", label: "Documentation" },
    ],
    tags: [{ name: "Analytics" }, { name: "Frontend" }],
    category: "analytics",
    status: "active",
    isFeatured: true,
    isPublic: true,
  },
  {
    id: "5",
    title: "DevOps Pipeline Tool",
    description: "A CI/CD pipeline orchestrator with Docker and Kubernetes integration.",
    image: { src: "https://picsum.photos/400/200?random=105", alt: "DevOps Pipeline Tool" },
    techStacks: [
      { name: "Docker", color: "#2496ed", icon: "🟩" },
      { name: "Kubernetes", color: "#326ce5", icon: "🟦" },
    ],
    links: [{ type: "repo", url: "https://github.com/example/devops", label: "Repository" }],
    tags: [{ name: "DevOps" }],
    category: "devops",
    status: "planning",
    isPublic: true,
  },
  {
    id: "6",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with cart, payments, and inventory management.",
    image: { src: "https://picsum.photos/400/200?random=106", alt: "E-commerce Platform" },
    techStacks: [
      { name: "React", color: "#61dafb", icon: "⚛️" },
      { name: "Node.js", color: "#68a063", icon: "🟢" },
      { name: "PostgreSQL", color: "#336791", icon: "🟦" },
    ],
    links: [
      { type: "demo", url: "https://example.com", label: "Live Demo" },
      { type: "repo", url: "https://github.com/example/ecommerce", label: "Repository" },
    ],
    tags: [{ name: "E-commerce" }, { name: "Full-stack" }],
    category: "fullstack",
    status: "active",
    isFeatured: true,
    isPublic: true,
  },
];

// ─── Use case card ────────────────────────────────────────────────────────

interface UseCase {
  id: string;
  title: string;
  description: string;
  badge?: string;
  code: string;
  render: (isDark: boolean) => React.ReactNode;
}

function UseCaseCard({ useCase, isDark }: { useCase: UseCase; isDark: boolean }) {
  return (
    <div className="howto-card" id={useCase.id}>
      <div className="howto-card__header">
        <h3 className="howto-card__title">{useCase.title}</h3>
        {useCase.badge && <span className="howto-card__badge">{useCase.badge}</span>}
      </div>
      <p className="howto-card__desc">{useCase.description}</p>
      <div className="howto-card__demo">
        {useCase.render(isDark)}
      </div>
      <SourceReveal code={useCase.code} isDark={isDark} />
    </div>
  );
}

// ─── Installation steps ───────────────────────────────────────────────────

const INSTALL_COMMANDS = [
  { label: "npm", command: "npm install @asafarim/paginated-project-grid" },
  { label: "pnpm", command: "pnpm add @asafarim/paginated-project-grid" },
  { label: "yarn", command: "yarn add @asafarim/paginated-project-grid" },
];

function InstallSection({ isDark }: { isDark: boolean }) {
  const [activeMgr, setActiveMgr] = useState("pnpm");

  return (
    <section className="howto-section">
      <h2 className="howto-section__title">📦 Installation</h2>
      <p className="howto-section__lead">
        Choose your preferred package manager. <code>@asafarim/paginated-project-grid</code> requires
        React 17 or 18 and <code>@asafarim/project-card</code> as a peer.
      </p>
      <div className="howto-install">
        <div className="howto-install__tabs" role="tablist">
          {INSTALL_COMMANDS.map((mgr) => (
            <button
              key={mgr.label}
              type="button"
              role="tab"
              aria-selected={activeMgr === mgr.label}
              className={`howto-install__tab${
                activeMgr === mgr.label ? " howto-install__tab--active" : ""
              }`}
              onClick={() => setActiveMgr(mgr.label)}
            >
              {mgr.label}
            </button>
          ))}
        </div>
        <DisplayCode
          code={INSTALL_COMMANDS.find((m) => m.label === activeMgr)!.command}
          language="bash"
          theme={isDark ? "dark" : "light"}
          showLineNumbers={false}
          showCopyButton={true}
          fontSize="medium"
        />
      </div>
      <div className="howto-card">
        <div className="howto-card__header">
          <h3 className="howto-card__title">Basic Import</h3>
        </div>
        <p className="howto-card__desc">Import the component and pass an array of projects.</p>
        <SourceReveal
          isDark={isDark}
          code={`import { PaginatedProjectGrid } from '@asafarim/paginated-project-grid';

function ProjectsPage() {
  return (
    <PaginatedProjectGrid
      projects={projects}
      cardsPerPage={6}
      currentTheme="dark"
    />
  );
}`}
        />
      </div>
    </section>
  );
}

// ─── All use cases ────────────────────────────────────────────────────────

const USE_CASES: UseCase[] = [
  {
    id: "basic-pagination",
    title: "Basic Pagination",
    description: "Display projects in a paginated grid with a configurable number of cards per page.",
    badge: "cardsPerPage",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={sampleProjects}
        cardsPerPage={3}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={false}
        onProjectClick={(p) => console.log("Clicked:", p.title)}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={3}
  currentTheme="dark"
  enableSearch={false}
  onProjectClick={(project) => console.log('Clicked:', project.title)}
/>`,
  },
  {
    id: "search",
    title: "Built-in Search",
    description: "Enable search to filter projects by title, description, tech stacks, and tags in real time.",
    badge: "enableSearch",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={sampleProjects}
        cardsPerPage={3}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={true}
        searchFields={["title", "description", "techStacks", "tags", "category"]}
        searchPlaceholder="Search projects..."
        onProjectClick={(p) => console.log("Clicked:", p.title)}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={3}
  currentTheme="dark"
  enableSearch={true}
  searchFields={['title', 'description', 'techStacks', 'tags', 'category']}
  searchPlaceholder="Search projects..."
  onProjectClick={(project) => console.log('Clicked:', project.title)}
/>`,
  },
  {
    id: "load-more",
    title: "Load More Mode",
    description: "Replace pagination controls with an incremental \"Load More\" button.",
    badge: "showLoadMore",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={sampleProjects}
        cardsPerPage={2}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={false}
        showLoadMore={true}
        loadMoreText="Load more projects"
        onProjectClick={(p) => console.log("Clicked:", p.title)}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={2}
  currentTheme="dark"
  enableSearch={false}
  showLoadMore={true}
  loadMoreText="Load more projects"
  onProjectClick={(project) => console.log('Clicked:', project.title)}
/>`,
  },
  {
    id: "tech-stack-icons",
    title: "Tech Stack Icons",
    description: "Show tech stack badges with icons on each project card.",
    badge: "showTechStackIcons",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={sampleProjects}
        cardsPerPage={3}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={false}
        showTechStackIcons={true}
        onProjectClick={(p) => console.log("Clicked:", p.title)}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={3}
  currentTheme="dark"
  enableSearch={false}
  showTechStackIcons={true}
  onProjectClick={(project) => console.log('Clicked:', project.title)}
/>`,
  },
  {
    id: "responsive",
    title: "Responsive Columns",
    description: "Customize the number of columns at each breakpoint with the responsive prop.",
    badge: "responsive",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={sampleProjects}
        cardsPerPage={6}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={false}
        responsive={{
          mobile: 1,
          tablet: 2,
          desktop: 3,
          largeDesktop: 4,
          extraLargeDesktop: 5,
        }}
        onProjectClick={(p) => console.log("Clicked:", p.title)}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={6}
  currentTheme="dark"
  responsive={{
    mobile: 1,
    tablet: 2,
    desktop: 3,
    largeDesktop: 4,
    extraLargeDesktop: 5,
  }}
  onProjectClick={(project) => console.log('Clicked:', project.title)}
/>`,
  },
  {
    id: "loading-state",
    title: "Loading State",
    description: "Show a spinner with a custom message while projects are being fetched.",
    badge: "isLoading",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={[]}
        cardsPerPage={3}
        currentTheme={isDark ? "dark" : "light"}
        isLoading={true}
        loadingMessage="Fetching your projects..."
      />
    ),
    code: `<PaginatedProjectGrid
  projects={[]}
  cardsPerPage={3}
  currentTheme="dark"
  isLoading={true}
  loadingMessage="Fetching your projects..."
/>`,
  },
  {
    id: "empty-state",
    title: "Empty State",
    description: "When the projects array is empty and not loading, a helpful empty state is shown.",
    badge: "empty",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={[]}
        cardsPerPage={3}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={false}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={[]}
  cardsPerPage={3}
  currentTheme="dark"
  enableSearch={false}
/>`,
  },
  {
    id: "custom-description-length",
    title: "Truncated Descriptions",
    description: "Limit the description length shown on each card with maxDescriptionLength.",
    badge: "maxDescriptionLength",
    render: (isDark) => (
      <PaginatedProjectGrid
        projects={sampleProjects}
        cardsPerPage={3}
        currentTheme={isDark ? "dark" : "light"}
        enableSearch={false}
        maxDescriptionLength={60}
        onProjectClick={(p) => console.log("Clicked:", p.title)}
      />
    ),
    code: `<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={3}
  currentTheme="dark"
  enableSearch={false}
  maxDescriptionLength={60}
  onProjectClick={(project) => console.log('Clicked:', project.title)}
/>`,
  },
];

// ─── Page component ───────────────────────────────────────────────────────

export function HowToPage() {
  const { resolvedMode } = useTheme();
  const isDark = resolvedMode === "dark";

  return (
    <div className={`howto-page ${isDark ? "dark-theme" : ""}`}>
      <header className="howto-header">
        <h1 className="howto-title">How to Use PaginatedProjectGrid</h1>
        <p className="howto-subtitle">
          A complete guide to installing and using{" "}
          <code>@asafarim/paginated-project-grid</code>. Click the{" "}
          <span className="howto-inline-icon">
            <EyeIcon open={false} />
          </span>{" "}
          icon on any example to reveal its source code, then{" "}
          <span className="howto-inline-icon">
            <CopyIcon copied={false} />
          </span>{" "}
          to copy it.
        </p>
      </header>

      <InstallSection isDark={isDark} />

      <section className="howto-section">
        <h2 className="howto-section__title">🎨 Use Cases</h2>
        <p className="howto-section__lead">
          Every prop and feature, demonstrated with live examples. Toggle the
          source code for any card to see exactly how it's done.
        </p>
        <div className="howto-grid">
          {USE_CASES.map((uc) => (
            <UseCaseCard key={uc.id} useCase={uc} isDark={isDark} />
          ))}
        </div>
      </section>

      <section className="howto-section">
        <h2 className="howto-section__title">📋 Props Reference</h2>
        <p className="howto-section__lead">
          The full set of props accepted by the <code>PaginatedProjectGrid</code> component:
        </p>
        <div className="howto-card">
          <DisplayCode
            code={`interface PaginatedProjectGridProps {
  projects: Project[];                          // Array of project objects (required)
  cardsPerPage?: number;                        // Cards per page (default: 6)
  currentTheme?: Theme;                         // 'light' | 'dark' | 'auto' (default: 'dark')
  className?: string;                           // Custom CSS class for the container
  onProjectClick?: (project: Project) => void;  // Callback when a card is clicked
  showTechStackIcons?: boolean;                 // Show tech stack badges (default: false)
  maxDescriptionLength?: number;                // Truncate description (default: 150)
  enableSearch?: boolean;                       // Enable search bar (default: true)
  searchPlaceholder?: string;                   // Placeholder text for search input
  noResultsMessage?: string;                    // Message when search returns nothing
  loadingMessage?: string;                      // Message shown while loading
  isLoading?: boolean;                          // Show loading spinner state
  searchFields?: ('title' | 'description' | 'techStacks' | 'tags' | 'category')[];
  responsive?: {                                // Column counts per breakpoint
    mobile: number;
    tablet: number;
    desktop: number;
    largeDesktop: number;
    extraLargeDesktop: number;
  };
  showLoadMore?: boolean;                       // Use "Load More" instead of pagination
  loadMoreText?: string;                        // Text for the Load More button
  animationDuration?: number;                   // Card animation duration in ms
}`}
            language="typescript"
            theme={isDark ? "dark" : "light"}
            showLineNumbers={true}
            showCopyButton={true}
            fontSize="small"
            title="PaginatedProjectGridProps"
          />
        </div>
      </section>
    </div>
  );
}
