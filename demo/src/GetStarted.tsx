import React, { useState } from "react";
import "./GetStarted.css";

const GetStarted: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button className="get-started-button" onClick={() => setIsModalOpen(true)}>
        📦 How to Use in Your React App
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>📦 How to Use in Your React App</h3>
              <button
                className="modal-close-btn"
                onClick={() => setIsModalOpen(false)}
                title="Close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="implementation-guide">
                <div className="guide-section">
                  <h4>1. Install the Package</h4>
                  <pre className="code-block">
                    <code>npm install @asafarim/paginated-project-grid</code>
                  </pre>
                </div>

                <div className="guide-section">
                  <h4>2. Import and Use</h4>
                  <pre className="code-block">
                    <code>{`import { PaginatedProjectGrid } from '@asafarim/paginated-project-grid';

const MyProjectsPage = () => {
  const projects = [
    {
      id: '1',
      title: 'My Awesome Project',
      description: 'A full-stack web application',
      image: 'https://example.com/image.jpg',
      techStacks: [
        { name: 'React', color: '#61dafb' },
        { name: 'TypeScript', color: '#3178c6' }
      ],
      links: [
        { type: 'demo', url: 'https://demo.example.com' },
        { type: 'repo', url: 'https://github.com/user/repo' }
      ],
      tags: [
        { name: 'Web', onClick: () => console.log('Web') },
        { name: 'Frontend', navigateTo: 'https://example.com' }
      ]
    }
    // ... more projects
  ];

  return (
    <PaginatedProjectGrid
      projects={projects}
      cardsPerPage={6}
      currentTheme="dark"
      enableSearch={true}
      showTechStackIcons={true}
      onProjectClick={(project) => {
        console.log('Clicked:', project.title);
      }}
    />
  );
};

export default MyProjectsPage;`}</code>
                  </pre>
                </div>

                <div className="guide-section">
                  <h4>3. Key Props</h4>
                  <ul className="props-list">
                    <li><strong>projects</strong> - Array of project objects (required)</li>
                    <li><strong>cardsPerPage</strong> - Number of cards per page (default: 6)</li>
                    <li><strong>currentTheme</strong> - 'light' | 'dark' | 'auto' (default: 'dark')</li>
                    <li><strong>enableSearch</strong> - Enable search functionality (default: true)</li>
                    <li><strong>showTechStackIcons</strong> - Display tech stack badges (default: false)</li>
                    <li><strong>showLoadMore</strong> - Use load more instead of pagination (default: false)</li>
                    <li><strong>onProjectClick</strong> - Callback when project is clicked</li>
                  </ul>
                </div>

                <div className="guide-section info-box">
                  <strong>💡 Tip:</strong> See the interactive demo below to explore all features. Check the README for complete documentation on props, theming, and customization.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStarted;
