import { Project } from '@asafarim/paginated-project-grid'

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
    image: {
      src: 'https://picsum.photos/400/200?random=1',
      alt: 'E-commerce Platform'
    },
    techStacks: [
      { name: 'React', color: 'var(--pc-tag-bg,rgb(234, 174, 236))', icon: '⚛️' },
      { name: 'Node.js', color: 'var(--pc-tag-bg,rgb(168, 195, 211))', icon: '🟢' },
      { name: 'MongoDB', color: 'var(--pc-tag-bg,rgb(212, 209, 155))', icon: '🍃' },
      { name: 'Express', color: 'var(--pc-tag-bg,rgb(233, 179, 179))', icon: '🚀' }
    ],
    links: [
      { type: 'demo', url: 'https://ecommerce-demo.com', label: 'Live Demo' },
      { type: 'repo', url: 'https://github.com/user/ecommerce' }
    ],
    currentTheme: 'dark',
    status: 'active',
    featured: true,
    priority: 'High',
    progress: 85,
    tags: [
      { name: 'E-commerce', onClick: () => {
        alert('E-commerce');
      } },
      { name: 'Full-stack', navigateTo: 'https://ecommerce-demo2.com' },
      { name: 'React', navigateTo: 'https://ecommerce-demo3.com' },
      { name: 'Node.js', navigateTo: 'https://ecommerce-demo4.com' },
      { name: 'MongoDB', navigateTo: 'https://ecommerce-demo5.com' }
    ],
    startDate: new Date().toISOString(),
    dueDate: new Date(new Date().setDate(new Date().getDate() + 100)).toISOString(),
    budget: 15000,
    budgetCurrencySymbol: '$',
    isPublic: true,
    lastUpdated: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Paginated Project Grid',
    description: 'A responsive React component for displaying paginated project cards with built-in search functionality. Supports light and dark themes, custom filtering, and lazy loading.',
    image: {
      src: 'https://picsum.photos/600/400?random=2',
      alt: 'Paginated Project Grid',
    },
    techStacks: [
      { name: 'React', color: '#61DAFB', icon: '⚛️' },
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'CSS Modules', color: '#1572B6', icon: '🎨' }
    ],
    links: [
      { type: 'demo', url: 'https://asafarim.com/demos/project-grid' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/packages/paginated-project-grid' }
    ],
    tags: [
      { name: 'React', navigateTo: 'https://reactjs.org' },
      { name: 'TypeScript', navigateTo: 'https://typescriptlang.org' },
      { name: 'CSS Modules', onClick: () => alert('CSS Modules') }
    ],
    category: 'UI Component',
    status: 'coming-soon',
    dateCreated: '2023-02-05'
  },
  {
    id: '3',
    title: 'Markdown File Explorer',
    description: 'A TypeScript library for exploring and parsing markdown files in a directory structure. Features include lazy loading, file watching, and metadata extraction.',
    image: {
      src: 'https://picsum.photos/600/400?random=3',
      alt: 'Markdown File Explorer',
    },
    techStacks: [
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'Node.js', color: '#339933', icon: '🟢' },
      { name: 'Markdown', color: 'var(--color-text-primary,rgb(207, 24, 24))', icon: '📝' }
    ],
    links: [
      { type: 'demo', url: 'https://asafarim.com/demos/md-explorer' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/packages/md-file-explorer' },
      { type: 'documentation', url: 'https://docs.asafarim.com/md-explorer' }
    ],
    tags: [
      { name: 'TypeScript', navigateTo: 'https://typescriptlang.org' },
      { name: 'Node.js', navigateTo: 'https://nodejs.org' },
      { name: 'Markdown', navigateTo: 'https://daringfireball.net/projects/markdown' }
    ],
    category: 'Library',
    status: 'in-progress',
    budget: 10000,
    dateCreated: '2023-05-10'
  },
  {
    id: '4',
    title: 'Project Card Component',
    description: 'A customizable React component for displaying project information in a card format. Supports light and dark themes, tech stack icons, and responsive design.',
    image: {
      src: 'https://picsum.photos/600/400?random=4',
      alt: 'Project Card',
    },
    techStacks: [
      { name: 'React', color: '#61DAFB', icon: '⚛️' },
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'CSS Modules', color: '#1572B6', icon: '🎨' }
    ],
    links: [
      { type: 'demo', url: 'https://asafarim.com/demos/project-card' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/packages/project-card' }
    ],
    tags: [
      { name: 'Component', onClick: () => alert('Component') },
      { name: 'React', navigateTo: 'https://reactjs.org' },
      { name: 'UI', onClick: () => alert('UI') },
      { name: 'Card', onClick: () => alert('Card') }
    ],
    category: 'UI Component',
    status: 'archived',
    dateCreated: '2023-02-05'
  },
  {
    id: '5',
    title: 'ASafariM Blog',
    description: 'A technical blog built with Docusaurus using TypeScript. Features articles on web development, microservices, and software engineering best practices.',
    image: {
      src: 'https://picsum.photos/600/400?random=5',
      alt: 'ASafariM Blog',
    },
    techStacks: [
      { name: 'Docusaurus', color: '#2E8555', icon: '📚' },
      { name: 'React', color: '#61DAFB', icon: '⚛️' },
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'MDX', color: '#1B1F24', icon: '📄' }
    ],
    links: [
      { type: 'demo', url: 'https://blog.asafarim.com' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-blog' }
    ],
    tags: [
      { name: 'Blog', onClick: () => alert('Blog') },
      { name: 'Docusaurus', navigateTo: 'https://docusaurus.io' },
      { name: 'TypeScript', navigateTo: 'https://typescriptlang.org' },
      { name: 'MDX', navigateTo: 'https://mdxjs.com' }
    ],
    category: 'Blog',
    status: 'completed',
    dateCreated: '2023-06-18'
  },
  {
    id: '6',
    title: 'Gateway API',
    description: 'An API gateway service built with ASP.NET Core 9.0. Handles routing, authentication, and load balancing for microservices architecture.',
    image: {
      src: 'https://picsum.photos/600/400?random=6',
      alt: 'Gateway API',
    },
    techStacks: [
      { name: 'ASP.NET Core', color: '#512BD4', icon: '🔷' },
      { name: 'C#', color: '#239120', icon: '🔧' },
      { name: 'Docker', color: '#2496ED', icon: '🐳' }
    ],
    links: [
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/services/gateway' },
      { type: 'documentation', url: 'https://docs.asafarim.com/api/gateway' }
    ],
    tags: [
      { name: 'API', onClick: () => alert('API') },
      { name: 'Gateway', onClick: () => alert('Gateway') },
      { name: 'Microservices', onClick: () => alert('Microservices') },
      { name: 'DotNet', navigateTo: 'https://dotnet.microsoft.com' }
    ],
    category: 'Backend Service',
    status: 'planning',
    dateCreated: '2023-04-02'
  },
  {
    id: '7',
    title: 'Projects API',
    description: 'A RESTful API service for managing project data. Built with ASP.NET Core 8.0 and Entity Framework Core with MySQL database.',
    image: {
      src: 'https://picsum.photos/600/400?random=7',
      alt: 'Projects API',
    },
    techStacks: [
      { name: 'ASP.NET Core', color: '#512BD4', icon: '🔷' },
      { name: 'Entity Framework', color: '#4479A1', icon: '🗄️' },
      { name: 'MySQL', color: '#4479A1', icon: '🐬' },
      { name: 'Swagger', color: '#85EA2D', icon: '📝' }
    ],
    links: [
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/services/projects' },
      { type: 'documentation', url: 'https://docs.asafarim.com/api/projects' }
    ],
    tags: [
      { name: 'API', onClick: () => alert('API') },
      { name: 'REST', onClick: () => alert('REST') },
      { name: 'Database', onClick: () => alert('Database') },
      { name: 'DotNet', navigateTo: 'https://dotnet.microsoft.com' }
    ],
    category: 'Backend Service',
    dateCreated: '2023-04-15'
  },
  {
    id: '8',
    title: 'Documentation Portal',
    description: 'A comprehensive documentation portal built with MkDocs. Provides API references, guides, and tutorials for the ASafariM ecosystem.',
    image: {
      src: 'https://picsum.photos/600/400?random=8',
      alt: 'Documentation Portal',
    },
    techStacks: [
      { name: 'MkDocs', color: '#2980B9', icon: '📚' },
      { name: 'Markdown', color: '#000000', icon: '📝' },
      { name: 'Python', color: '#3776AB', icon: '🐍' },
      { name: 'Docker', color: '#2496ED', icon: '🐳' }
    ],
    links: [
      { type: 'demo', url: 'https://docs.asafarim.com' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/docs' }
    ],
    tags: [
      { name: 'Documentation', onClick: () => alert('Documentation') },
      { name: 'MkDocs', navigateTo: 'https://www.mkdocs.org' },
      { name: 'Markdown', navigateTo: 'https://daringfireball.net/projects/markdown' },
      { name: 'Technical Writing', onClick: () => alert('Technical Writing') }
    ],
    category: 'Documentation',
    dateCreated: '2023-03-10'
  },
  {
    id: '9',
    title: 'UI Component Library',
    description: 'A collection of reusable React components for building consistent user interfaces. Includes form elements, navigation, cards, and more.',
    image: {
      src: 'https://picsum.photos/600/400?random=9',
      alt: 'UI Component Library',
    },
    techStacks: [
      { name: 'React', color: '#61DAFB', icon: '⚛️' },
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'Storybook', color: '#FF4785', icon: '📚' },
      { name: 'CSS Modules', color: '#1572B6', icon: '🎨' }
    ],
    links: [
      { type: 'demo', url: 'https://ui.asafarim.com' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/packages/ui' }
    ],
    tags: [
      { name: 'UI', onClick: () => alert('UI') },
      { name: 'Components', onClick: () => alert('Components') },
      { name: 'React', navigateTo: 'https://reactjs.org' },
      { name: 'Design System', onClick: () => alert('Design System') }
    ],
    category: 'UI Library',
    dateCreated: '2023-01-30'
  },
  {
    id: '10',
    title: 'Developer Portfolio',
    description: 'A personal developer portfolio website showcasing projects, skills, and experience. Built with React and features responsive design.',
    image: {
      src: 'https://picsum.photos/600/400?random=10',
      alt: 'Developer Portfolio',
    },
    techStacks: [
      { name: 'React', color: '#61DAFB', icon: '⚛️' },
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'CSS Modules', color: '#1572B6', icon: '🎨' },
      { name: 'Vite', color: '#646CFF', icon: '⚡' }
    ],
    links: [
      { type: 'demo', url: 'https://alisafari.dev' },
      { type: 'repo', url: 'https://github.com/AliSafari-IT/portfolio' }
    ],
    tags: [
      { name: 'Portfolio', onClick: () => alert('Portfolio') },
      { name: 'Personal', onClick: () => alert('Personal') },
      { name: 'Frontend', onClick: () => alert('Frontend') },
      { name: 'React', navigateTo: 'https://reactjs.org' }
    ],
    category: 'Personal Website',
    dateCreated: '2023-02-20'
  },
  {
    id: '11',
    title: 'Authentication Service',
    description: 'A secure authentication service with JWT token support, OAuth integration, and role-based access control. Built with ASP.NET Core Identity.',
    image: {
      src: 'https://picsum.photos/600/400?random=11',
      alt: 'Authentication Service',
    },
    techStacks: [
      { name: 'ASP.NET Core', color: '#512BD4', icon: '🔷' },
      { name: 'Identity', color: '#239120', icon: '🔐' },
      { name: 'JWT', color: '#000000', icon: '🔑' },
      { name: 'OAuth', color: '#2496ED', icon: '🔒' }
    ],
    links: [
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-webapp/tree/main/services/auth' },
      { type: 'documentation', url: 'https://docs.asafarim.com/api/auth' }
    ],
    tags: [
      { name: 'Authentication', onClick: () => alert('Authentication') },
      { name: 'Security', onClick: () => alert('Security') },
      { name: 'JWT', navigateTo: 'https://jwt.io' },
      { name: 'OAuth', navigateTo: 'https://oauth.net' }
    ],
    category: 'Backend Service',
    status: 'completed',
    dateCreated: '2023-05-25'
  },
  {
    id: '12',
    title: 'Mobile App',
    description: 'A cross-platform mobile application built with React Native. Provides mobile access to the ASafariM ecosystem with offline capabilities.',
    image: {
      src: 'https://picsum.photos/600/400?random=12',
      alt: 'Mobile App',
    },
    techStacks: [
      { name: 'React Native', color: '#61DAFB', icon: '📱' },
      { name: 'TypeScript', color: '#3178C6', icon: '📘' },
      { name: 'Redux', color: '#764ABC', icon: '🔄' },
      { name: 'Expo', color: '#1B1F24', icon: '⚙️' }
    ],
    links: [
      { type: 'repo', url: 'https://github.com/AliSafari-IT/asafarim-mobile' },
      { type: 'documentation', url: 'https://docs.asafarim.com/mobile' }
    ],
    tags: [
      { name: 'Mobile', onClick: () => alert('Mobile') },
      { name: 'React Native', navigateTo: 'https://reactnative.dev' },
      { name: 'Cross Platform', onClick: () => alert('Cross Platform') },
      { name: 'App', onClick: () => alert('App') }
    ],
    category: 'Mobile Application',
    status: 'draft',
    currentTheme: 'light',
    dateCreated: '2023-07-12'
  }
]
