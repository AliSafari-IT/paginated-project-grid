import { TechStackItem, ProjectLink, Theme } from '@asafarim/project-card';

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  techStacks: TechStackItem[];
  links: ProjectLink[];
  tags?: string[];
  category?: string;
  status?: 'active' | 'archived' | 'in-progress';
  featured?: boolean;
  lastUpdated?: string;
  dateCreated?: string;
}

export interface PaginatedProjectGridProps {
  projects: Project[];
  cardsPerPage?: number;
  currentTheme?: Theme;
  className?: string;
  onProjectClick?: (project: Project) => void;
  showTechStackIcons?: boolean;
  maxDescriptionLength?: number;
  enableSearch?: boolean;
  searchPlaceholder?: string;
  noResultsMessage?: string;
  loadingMessage?: string;
  isLoading?: boolean;
  searchFields?: ('title' | 'description' | 'techStacks' | 'tags' | 'category')[];
  responsive?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  showLoadMore?: boolean;
  loadMoreText?: string;
  animationDuration?: number;
}

export type { TechStackItem, ProjectLink, Theme };
