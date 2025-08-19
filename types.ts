
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export enum ProjectCategory {
  WEB = "Web Apps & Sites",
  GAMES = "Games",
  THREE_D = "3D/CGI",
  VIDEO = "Videos/Films",
  PHOTO = "Photography",
  DESIGN = "Graphic Design",
  AI = "AI/Agents",
  EXPERIMENTS = "Experiments"
}

export interface ProjectLink {
  name: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  year: number;
  category: ProjectCategory;
  summary: string;
  imageUrl: string;
  tags: string[];
  roles: string[];
  links?: ProjectLink[];
}
