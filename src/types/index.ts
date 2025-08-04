import { Theme, ProjectCardProps } from '@asafarim/project-card';

export type ProjectTag = {
  name: string;
  navigateTo?: string;
  onClick?: () => void;
}

export type Project = ProjectCardProps & {
  id: string;
  category?: string;
  dateCreated?: string;
}

export type PaginatedProjectGridProps = {
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
    largeDesktop: number;
    extraLargeDesktop: number;
  };
  showLoadMore?: boolean;
  loadMoreText?: string;
  animationDuration?: number;
}
