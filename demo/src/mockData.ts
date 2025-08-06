import { Project,  } from '@asafarim/paginated-project-grid';
import { ProjectCategory, ProjectLink, ProjectPriority, ProjectStatus, RelatedProject } from '@asafarim/project-card';
import { ProjectBudget, Theme } from '@asafarim/project-card/dist/types';

const randomProjectTitle = () => {
  const adjectives = ['E-commerce', 'Web', 'Mobile', 'Desktop', 'Backend', 'Frontend', 'Fullstack', 'Database', 'DevOps', 'Design', 'Marketing', 'SEO', 'Social', 'Content', 'Analytics', 'Security', 'Testing', 'Other'];
  const nouns = ['Platform', 'Application', 'System', 'Project', 'Solution', 'Tool', 'Service', 'Application', 'System', 'Project', 'Solution', 'Tool', 'Service'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomNoun}`;
}

const techStacks = [
  { name: 'React', color: 'var(--pc-tag-bg,rgb(234, 174, 236))', icon: '⚛️' },
  { name: 'Node.js', color: 'var(--pc-tag-bg,rgb(168, 195, 211))', icon: '🟢' },
  { name: 'MongoDB', color: 'var(--pc-tag-bg,rgb(212, 209, 155))', icon: '🍃' },
  { name: 'Express', color: 'var(--pc-tag-bg,rgb(233, 179, 179))', icon: '🚀' },
  { name: 'TypeScript', color: 'var(--pc-tag-bg,rgb(174, 174, 236))', icon: '🟦' },
  { name: 'Tailwind CSS', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'PostgreSQL', color: 'var(--pc-tag-bg,rgb(174, 174, 236))', icon: '🟦' },
  { name: 'Docker', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'Kubernetes', color: 'var(--pc-tag-bg,rgb(174, 174, 236))', icon: '🟦' },
  { name: 'AWS', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
];

const tags = [
  { name: 'E-commerce', color: 'var(--pc-tag-bg,rgb(234, 174, 236))', icon: '🛒' },
  { name: 'Full-stack', color: 'var(--pc-tag-bg,rgb(168, 195, 211))', icon: '🔥' },
  { name: 'React', color: 'var(--pc-tag-bg,rgb(212, 209, 155))', icon: '⚛️' },
  { name: 'Node.js', color: 'var(--pc-tag-bg,rgb(233, 179, 179))', icon: '🟢' },
  { name: 'MongoDB', color: 'var(--pc-tag-bg,rgb(174, 174, 236))', icon: '🟦' },
  { name: 'AWS', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'GCP', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'Azure', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'Linux', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'Windows', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'MacOS', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'iOS', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
  { name: 'Android', color: 'var(--pc-tag-bg,rgb(174, 236, 174))', icon: '🟩' },
];

const projectStatuses: ProjectStatus[] = [ "active", "archived", "completed", "in-progress", 'coming-soon', 'draft', 'planning'  ];

const priorities: ProjectPriority[] = [ "low", "medium", "high" ];

const projectLinks: ProjectLink[] = [
  { type: 'demo', url: 'https://ecommerce-demo.com', label: 'Live Demo' },
  { type: 'repo', url: 'https://github.com/user/ecommerce', label: 'Repository' },
  { type: 'documentation', url: 'https://ecommerce-demo.com/documentation', label: 'Documentation' },
  { type: 'custom', url: 'https://ecommerce-demo.com/custom', label: 'Custom' },
];

const relatedProjects: RelatedProject[] = [
  {
    title: 'E-commerce Platform',
    image: {
      src: 'https://picsum.photos/400/200?random=1',
      alt: 'E-commerce Platform'
    },
    link: { type: 'demo', url: 'https://ecommerce-demo.com', label: 'Live Demo' },
    description: 'A full-stack e-commerce platform with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
    repo: {
      url: 'https://github.com/user/ecommerce',
      label: 'Repository'
    },
  },
  {
    title: 'Web Development',
    image: {
      src: 'https://picsum.photos/400/200?random=2',
      alt: 'Web Development'
    },
    link: { type: 'demo', url: 'https://web-development-demo.com', label: 'Live Demo' },
    description: 'A full-stack web development project with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
    repo: {
      url: 'https://github.com/user/web-development',
      label: 'Repository'
    },
  },
  {
    title: 'Mobile Development',
    image: {
      src: 'https://picsum.photos/400/200?random=3',
      alt: 'Mobile Development'
    },
    link: { type: 'demo', url: 'https://mobile-development-demo.com', label: 'Live Demo' },
    description: 'A full-stack mobile development project with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
    repo: {
      url: 'https://github.com/user/mobile-development',
      label: 'Repository'
    },
  },
  {
    title: 'API Development',
    image: {
      src: 'https://picsum.photos/400/200?random=4',
      alt: 'API Development'
    },
    link: { type: 'demo', url: 'https://api-development-demo.com', label: 'Live Demo' },
    description: 'A full-stack API development project with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
  },
  {
    title: 'Database Development',
    image: {
      src: 'https://picsum.photos/400/200?random=5',
      alt: 'Database Development'
    },
    link: { type: 'demo', url: 'https://database-development-demo.com', label: 'Live Demo' },
    description: 'A full-stack database development project with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.',
    repo: {
      url: 'https://github.com/user/database-development',
      label: 'Repository'
    },
  },
  {
    title: 'AI Development',
    image: {
      src: 'https://picsum.photos/400/200?random=6',
      alt: 'AI Development'
    },
  } as RelatedProject,
];

const projectBudgets: ProjectBudget[] = [
  {
    amount: 10000,
    currencySymbol: '$'
  },
  {
    amount: 20000,
    roundingIncrement: 100,
    currencySymbol: '$'
  },
  {
    amount: 30000,
    currencyCode: 'USD',
    currencySymbol: '$'
  },
  {
    amount: 40000,
    currencyCode: 'USD',
    currencySymbol: '$'
  },
  {
    amount: 50000,
    currencySymbol: '€'
  },
  {
    amount: 60000,
    currencySymbol: '£'
  },
  {
    amount: 70000,
    currencySymbol: '¥'
  },
  {
    amount: 80000,
    currencySymbol: '₹'
  },
  {
    amount: 90000,
    currencySymbol: '₩'
  },
  {
    amount: 100000,
    currencySymbol: '₹'
  },
  {
    amount: 110000,
    currencySymbol: '₩'
  },
];

const projectCategories: ProjectCategory[] = [
  'web', 'mobile', 'desktop', 'backend', 'frontend', 'fullstack', 'database', 'devops', 'design', 'marketing', 'seo', 'social', 'content', 'analytics', 'security', 'testing', 'other'
];

const generateMockProjects = (count: number): Project[] => {
  const random = (x: number) => Math.floor(Math.random() * x);

  return Array.from({ length: count }, (_, index) => ({
    id: `${index + 1}`,
    title: randomProjectTitle(),
    description: `A full-stack project ${index + 1} with user authentication, shopping cart, and payment integration using React and Node.js. Features include product catalog, user reviews, order management, and real-time inventory tracking.`,
    image: { src: `https://picsum.photos/400/200?random=${index + 1}`, alt: `Project ${index + 1}` },
    techStacks: techStacks.slice(0, random(techStacks.length)),
    links: projectLinks.slice(0, random(projectLinks.length)),
    currentTheme: ['dark', 'light', 'auto'][index % 3] as Theme,
    status: projectStatuses[index % projectStatuses.length],
    isFeatured: random(2) === 1,
    priority: priorities[index % priorities.length],
    progress: random(100),
    tags: tags.slice(0, random(tags.length)),
    startDate: new Date().toISOString(),
    dueDate: new Date(new Date().setDate(new Date().getDate() + 100)).toISOString(),
    budget: projectBudgets[index % projectBudgets.length],
    isPublic: random(2) === 1,
    lastUpdated: new Date().toISOString(),
    category: projectCategories[index % projectCategories.length] as ProjectCategory,
    onCardClick: () => {
      alert(`Project ${index + 1}`);
    },
    relatedProjects: relatedProjects.slice(0, random(relatedProjects.length)),
    showTechStackIcons: random(2) === 1,
  }));
};

export const mockProjects: Project[] = [
  ...generateMockProjects(12),
]
