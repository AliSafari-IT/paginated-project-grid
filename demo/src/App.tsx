import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PaginatedProjectGrid } from "@asafarim/paginated-project-grid";
import { mockProjects } from "./mockData";
import { DisplayCode } from "@asafarim/display-code";
import { useTheme } from "@asafarim/react-themes";
import { SiteNav } from "./SiteNav";
import { RoadmapPage } from "./RoadmapPage";
import { HowToPage } from "./HowToPage";

const codeExample = `import React from 'react'
import { PaginatedProjectGrid } from '@asafarim/paginated-project-grid'

const projects = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description goes here...',
    image: 'https://example.com/image.jpg',
    techStacks: [
      { name: 'React', icon: 'react-icon', color: '#61DAFB' },
      { name: 'TypeScript', icon: 'ts-icon', color: '#3178C6' }
    ],
    links: [
      { type: 'demo', url: 'https://demo.example.com' },
      { type: 'repo', url: 'https://github.com/example/repo' }
    ],
    tags: [
      { name: 'Web', onClick: () => alert('Web') },
      { name: 'Frontend', navigateTo: 'https://example.com/frontend' }
    ]
  },
  // More projects...
]

const MyProjectsPage = () => {
  return (
    <PaginatedProjectGrid
      projects={projects}
      cardsPerPage={6}
      currentTheme="dark"
      showTechStackIcons={true}
      enableSearch={true}
      responsive={{
        mobile: 1,
        tablet: 2,
        desktop: 3,
        largeDesktop: 4,
        extraLargeDesktop: 5
      }}
      onProjectClick={(project) => console.log('Project clicked:', project.title)}
    />
  )
}

export default MyProjectsPage`;

function HomePage() {
  const { resolvedMode } = useTheme();
  const theme = resolvedMode === "dark" ? "dark" : "light";
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const [showTechStackIcons, setShowTechStackIcons] = useState(true);
  const [enableSearch, setEnableSearch] = useState(true);
  const [showLoadMore, setShowLoadMore] = useState(false);

  const handleProjectClick = (project: any) => {
    console.log("Project clicked:", project.title);
    alert(`You clicked on: ${project.title}`);
  };

  return (
    <div className={`container ${theme === "dark" ? "dark-theme" : ""}`}>
      <header className="header">
        <h1>Paginated Project Grid Demo</h1>
        <p>
          A responsive React component for displaying paginated project cards
          with built-in search functionality. Try out the different
          configurations below.
        </p>
      </header>
      <main>
        <section className="demo-section">
          <h2>Interactive Demo</h2>

          <div className="controls">
            <div className="control-group">
              <label htmlFor="cardsPerPage">Cards Per Page:</label>
              <select
                id="cardsPerPage"
                value={cardsPerPage}
                onChange={(e) => setCardsPerPage(Number(e.target.value))}
              >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
              </select>
            </div>

            <div className="control-group">
              <label>
                <input
                  type="checkbox"
                  checked={showTechStackIcons}
                  onChange={() => setShowTechStackIcons(!showTechStackIcons)}
                />
                Show Tech Stack Icons
              </label>
            </div>

            <div className="control-group">
              <label>
                <input
                  type="checkbox"
                  checked={enableSearch}
                  onChange={() => setEnableSearch(!enableSearch)}
                />
                Enable Search
              </label>
            </div>

            <div className="control-group">
              <label>
                <input
                  type="checkbox"
                  checked={showLoadMore}
                  onChange={() => setShowLoadMore(!showLoadMore)}
                />
                Use "Load More" Instead of Pagination
              </label>
            </div>
          </div>

          <PaginatedProjectGrid
            projects={mockProjects}
            cardsPerPage={cardsPerPage}
            currentTheme={theme}
            onProjectClick={handleProjectClick}
            showTechStackIcons={showTechStackIcons}
            enableSearch={enableSearch}
            showLoadMore={showLoadMore}
            searchFields={['title', 'description', 'techStacks', 'tags', 'category']}
            maxDescriptionLength={75}
            searchPlaceholder="Search projects by name, description, or technology..."
          />
        </section>

        <section className="demo-section">
          <h2>Usage Example</h2>
          <DisplayCode
            code={codeExample}
            theme={theme}
            showLineNumbers={true}
            showCopyButton={true}
            fontSize="medium"
            wrapLines={true}
          />
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} ASafariM - Paginated Project Grid Demo
        </p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <SiteNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-to" element={<HowToPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
