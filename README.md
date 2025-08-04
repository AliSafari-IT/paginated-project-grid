# Package @asafarim/paginated-project-grid

A responsive React component for displaying paginated project cards with built-in search functionality.

## Features

- 📱 **Responsive Design**: Adapts to different screen sizes
- 🔍 **Built-in Search**: Collapsible search with customizable fields
- 📄 **Pagination**: Traditional pagination or load-more functionality
- 🎨 **Theme Support**: Light/dark themes with CSS variables (dark theme default)
- 🚀 **TypeScript**: Full TypeScript support with type definitions
- 📦 **CSS Modules**: Scoped CSS with no external dependencies
- ⚛️ **React 17/18**: Compatible with modern React versions
- 🏷️ **Enhanced Tags**: Support for interactive tags with navigation and click handlers
- 📊 **Project Management**: Support for priority, budget, progress tracking, and due dates

## Installation

```bash
npm install @asafarim/paginated-project-grid
```

**Note**: This package requires `@asafarim/project-card` as a peer dependency.

## Usage

```tsx
import { PaginatedProjectGrid } from '@asafarim/paginated-project-grid';

const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: '/images/ecommerce.jpg',
    techStacks: [
      { name: 'React', color: '#61dafb', icon: '⚛️' },
      { name: 'Node.js', color: '#339933', icon: '🟢' },
      { name: 'MongoDB', color: '#47A248', icon: '🍃' }
    ],
    links: [
      { type: 'demo', url: 'https://demo.example.com' },
      { type: 'repo', url: 'https://github.com/user/repo' }
    ],
    tags: [
      { name: 'Fullstack', onClick: () => alert('Fullstack') },
      { name: 'Ecommerce', onClick: () => alert('Ecommerce') }
    ],
    category: 'web-development',
    status: 'active',
    featured: true,
    priority: 'high',
    budget: 15000,
    progress: 75,
    dateCreated: '2024-01-15',
    dueDate: '2024-06-15',
    lastUpdated: '2024-01-15',
    isPublic: true
  },
  // ... more projects
];

function ProjectShowcase() {
  return (
    <PaginatedProjectGrid
      projects={projects}
      cardsPerPage={6}
      currentTheme="dark"
      enableSearch={true}
      showTechStackIcons={true}
      onProjectClick={(project) => {
        console.log('Clicked project:', project.title);
      }}
    />
  );
}
```

## Props

### PaginatedProjectGridProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `projects` | `Project[]` | - | **Required**. Array of project objects |
| `cardsPerPage` | `number` | `6` | Number of cards to display per page |
| `currentTheme` | `'light' \| 'dark' \| 'auto'` | `'dark'` | Theme for the grid |
| `className` | `string` | `''` | Additional CSS classes |
| `onProjectClick` | `(project: Project) => void` | - | Click handler for project cards |
| `showTechStackIcons` | `boolean` | `false` | Show icons in tech stack tags |
| `maxDescriptionLength` | `number` | `150` | Maximum description length |
| `enableSearch` | `boolean` | `true` | Enable search functionality |
| `searchPlaceholder` | `string` | `"Search projects..."` | Search input placeholder |
| `noResultsMessage` | `string` | `"No projects found..."` | Message when no results |
| `loadingMessage` | `string` | `"Loading projects..."` | Loading state message |
| `isLoading` | `boolean` | `false` | Show loading state |
| `searchFields` | `Array` | `['title', 'description', 'techStacks', 'tags']` | Fields to search in |
| `responsive` | `object` | `{mobile: 1, tablet: 2, desktop: 3, largeDesktop: 4, extraLargeDesktop: 5}` | Responsive breakpoints |
| `showLoadMore` | `boolean` | `false` | Use load more instead of pagination |
| `loadMoreText` | `string` | `"Load More"` | Load more button text |
| `animationDuration` | `number` | `300` | Animation duration in ms |

### Project Interface

```tsx
interface Project {
  id: string;
  title: string;
  description: string;
  image?: string | ProjectImage;
  techStacks: TechStackItem[];  // Required - from @asafarim/project-card
  links: ProjectLink[];          // Required - from @asafarim/project-card
  tags?: ProjectTag[];           // Enhanced tags with navigation and click handlers
  category?: string;
  status?: 'active' | 'archived' | 'in-progress' | 'completed' | 'draft' | 'coming-soon' | 'planning';
  featured?: boolean;
  priority?: 'low' | 'medium' | 'high' | 'critical';
  budget?: number;
  progress?: number;             // Progress percentage (0-100)
  dateCreated?: string;          // ISO date string
  dueDate?: string;              // ISO date string
  lastUpdated?: string;          // ISO date string
  isPublic?: boolean;            // Public/private project flag
  currentTheme?: Theme;          // Individual project theme override
}

// ProjectTag interface for enhanced tag functionality
interface ProjectTag {
  name: string;
  navigateTo?: string;  // URL to navigate to when tag is clicked
  onClick?: () => void; // Function to execute when tag is clicked
}

// Import types from @asafarim/project-card
import type { TechStackItem, ProjectLink, Theme, ProjectImage } from '@asafarim/project-card';
```

## Enhanced Tag System

The component now supports interactive tags with navigation and click handlers:

```tsx
const projects = [
  {
    // ... other properties
    tags: [
      { name: 'React', navigateTo: 'https://reactjs.org' },
      { name: 'TypeScript', navigateTo: 'https://typescriptlang.org' },
      { name: 'Custom Action', onClick: () => alert('Custom action!') }
    ]
  }
];
```

## Project Management Features

### Priority Levels
- `low`: Low priority projects
- `medium`: Medium priority projects  
- `high`: High priority projects
- `critical`: Critical priority projects

### Status Options
- `active`: Currently active projects
- `archived`: Archived projects
- `in-progress`: Projects in development
- `completed`: Finished projects
- `draft`: Draft projects
- `coming-soon`: Upcoming projects
- `planning`: Projects in planning phase

### Progress Tracking
Track project completion with a progress percentage (0-100):

```tsx
{
  progress: 75, // 75% complete
  // ... other properties
}
```

## Search Functionality

The component includes a collapsible search feature that can search across multiple fields:

- **title**: Project title
- **description**: Project description
- **techStacks**: Technology names
- **tags**: Project tags
- **category**: Project category

### Search Example

```tsx
<PaginatedProjectGrid
  projects={projects}
  enableSearch={true}
  searchFields={['title', 'techStacks', 'tags']}
  searchPlaceholder="Search by title, tech, or tags..."
/>
```

## Responsive Design

The grid automatically adapts to different screen sizes:

- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns
- **Large Desktop**: 4 columns
- **Extra Large Desktop**: 5 columns

You can customize this behavior:

```tsx
<PaginatedProjectGrid
  projects={projects}
  responsive={{
    mobile: 1,
    tablet: 2,
    desktop: 4,
    largeDesktop: 5,
    extraLargeDesktop: 6
  }}
/>
```

## Theming

The component supports light and dark themes with dark theme as default:

```tsx
// Dark theme (default)
<PaginatedProjectGrid
  projects={projects}
  currentTheme="dark"
/>

// Light theme
<PaginatedProjectGrid
  projects={projects}
  currentTheme="light"
/>
```

## Load More vs Pagination

Choose between traditional pagination or load more functionality:

```tsx
// Traditional pagination (default)
<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={6}
/>

// Load more functionality
<PaginatedProjectGrid
  projects={projects}
  cardsPerPage={6}
  showLoadMore={true}
  loadMoreText="Show More Projects"
/>
```

## CSS Customization

The component uses CSS modules for styling. You can override styles by targeting the CSS classes:

```css
/* Custom styles */
.custom-grid {
  max-width: 1400px;
}

.custom-grid .projectCard {
  border-radius: 16px;
}
```

## TypeScript Support

The package includes full TypeScript definitions:

```tsx
import type { PaginatedProjectGridProps, Project } from '@asafarim/paginated-project-grid';

const MyComponent: React.FC<{projects: Project[]}> = ({ projects }) => {
  const handleProjectClick = (project: Project) => {
    // project is fully typed
    console.log(project.title);
    console.log(project.priority);
    console.log(project.progress);
  };

  return (
    <PaginatedProjectGrid
      projects={projects}
      onProjectClick={handleProjectClick}
    />
  );
};
```

## License

MIT © Ali Safari
