
import type { Project, Service, SkillCategory, SocialLink, ProjectCategory } from '../types';
import { Github, Youtube, Instagram, Facebook, Twitter, Linkedin, Camera, Clapperboard, Code, Cpu, Gamepad, Layers, PenTool, Video } from 'lucide-react';
import { ProjectCategory as PC } from '../types';

export const PROFILE_DATA = {
  displayName: "Chilly_XwAgGzZ",
  fullName: "Salmin Habibu",
  location: "Dar es Salaam, Tanzania",
  email: "salminhabibu2000@gmail.com",
  phone: "+255-692-156-182",
  shortBio: "Self-taught creator blending software, 3D/CGI, design, and film. I build apps, games, and AI tools; I shoot, grade, and edit video; I design brands; and I craft 3D worlds. Inspired by Jiddu Krishnamurti, I explore perception and the nature of self through visuals and code.",
  counters: {
      years: new Date().getFullYear() - 2018, // Years since starting
      projects: 42,
      tools: 25,
  }
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: '#', icon: Github },
  { name: 'YouTube', url: '#', icon: Youtube },
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'Facebook', url: '#', icon: Facebook },
  { name: 'Twitter', url: '#', icon: Twitter },
  { name: 'LinkedIn', url: '#', icon: Linkedin },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: "Development",
    skills: [
      { name: "TypeScript", proficiency: 90 },
      { name: "React/Next.js", proficiency: 95 },
      { name: "Node.js", proficiency: 85 },
      { name: "Python", proficiency: 80 },
      { name: "Firebase", proficiency: 90 },
      { name: "AI/Agent Prototyping", proficiency: 75 },
    ],
  },
  {
    category: "3D/CGI & Pre-viz",
    skills: [
      { name: "Modeling & Lookdev", proficiency: 90 },
      { name: "Lighting & Rendering", proficiency: 85 },
      { name: "Compositing", proficiency: 80 },
      { name: "Shot Listing", proficiency: 95 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "Branding & UI/UX", proficiency: 85 },
      { name: "Photoshop & Illustrator", proficiency: 95 },
      { name: "Figma", proficiency: 90 },
    ],
  },
  {
    category: "Video & Photo",
    skills: [
      { name: "Cinematography", proficiency: 80 },
      { name: "Color Grading (DaVinci)", proficiency: 90 },
      { name: "Editing (Premiere Pro)", proficiency: 95 },
    ],
  },
];

export const SERVICES_DATA: Service[] = [
  { title: "Web/Apps Development", description: "Building modern, fast, and scalable web applications and sites.", icon: Code },
  { title: "3D/CGI & Pre-viz", description: "Creating stunning 3D worlds, characters, and visual effects for film and games.", icon: Layers },
  { title: "Brand/Graphics Design", description: "Crafting unique visual identities, logos, and marketing materials.", icon: PenTool },
  { title: "Videography & Editing", description: "Full-service video production from shooting to final color grade and edit.", icon: Clapperboard },
  { title: "Photography", description: "Capturing moments and products with professional-grade photography.", icon: Camera },
  { title: "Automation & AI Agents", description: "Developing custom AI tools and automation scripts to boost productivity.", icon: Cpu },
  { title: "Game Prototypes", description: "Designing and building interactive game mechanics, including betting-style systems.", icon: Gamepad },
  { title: "Educational Media", description: "Producing engaging educational content, especially for Swahili-speaking audiences.", icon: Video },
];

export const PROJECTS_DATA: Project[] = [
    { id: 'proj-1', title: 'SokoBora E-commerce Platform', year: 2023, category: PC.WEB, summary: 'A full-stack e-commerce site for local Tanzanian artisans, featuring Swahili localization.', imageUrl: 'https://picsum.photos/seed/sokobora/600/400', tags: ['React', 'Firebase', 'Stripe', 'Next.js'], roles: ['Lead Developer', 'UI/UX Designer'] },
    { id: 'proj-2', title: 'PesaSpin - Betting Game', year: 2022, category: PC.GAMES, summary: 'A mobile-first betting-style web game with real-time odds and animations.', imageUrl: 'https://picsum.photos/seed/pesaspin/600/400', tags: ['TypeScript', 'React', 'WebSockets'], roles: ['Game Designer', 'Developer'] },
    { id: 'proj-3', title: 'Cyber Dar - 3D Short Film', year: 2023, category: PC.THREE_D, summary: 'An animated short film depicting a futuristic Dar es Salaam.', imageUrl: 'https://picsum.photos/seed/cyberdar/600/400', tags: ['Blender', 'After Effects', 'DaVinci Resolve'], roles: ['Director', '3D Artist', 'Compositor'] },
    { id: 'proj-4', title: 'Nipe Dili - Music Video', year: 2022, category: PC.VIDEO, summary: 'Directed, shot, and color-graded a music video for a local Bongo Flava artist.', imageUrl: 'https://picsum.photos/seed/nipedili/600/400', tags: ['Premiere Pro', 'DaVinci Resolve'], roles: ['Director', 'DP', 'Colorist'] },
    { id: 'proj-5', title: 'Zanzibar Spice Tour', year: 2023, category: PC.PHOTO, summary: 'A vibrant photo series capturing the essence of Zanzibar\'s spice farms.', imageUrl: 'https://picsum.photos/seed/zanzibar/600/400', tags: ['Photography', 'Lightroom'], roles: ['Photographer'] },
    { id: 'proj-6', title: 'Vinywaji Brand Identity', year: 2021, category: PC.DESIGN, summary: 'Complete branding package for a new local beverage company.', imageUrl: 'https://picsum.photos/seed/vinywaji/600/400', tags: ['Illustrator', 'Photoshop', 'Branding'], roles: ['Graphic Designer'] },
    { id: 'proj-7', title: 'Swahili Code Tutor AI', year: 2024, category: PC.AI, summary: 'An AI-powered agent that helps Swahili speakers learn programming concepts.', imageUrl: 'https://picsum.photos/seed/swahiliai/600/400', tags: ['Python', 'LLM', 'React'], roles: ['AI Developer', 'Prompt Engineer'] },
    { id: 'proj-8', title: 'WebGL Car Configurator', year: 2022, category: PC.EXPERIMENTS, summary: 'An interactive 3D car model viewer and customizer running in the browser.', imageUrl: 'https://picsum.photos/seed/webglcar/600/400', tags: ['Three.js', 'React', 'WebGL'], roles: ['Developer', '3D Artist'] },
    { id: 'proj-9', title: 'Corporate Headshots', year: 2024, category: PC.PHOTO, summary: 'Professional headshots for a Tanzanian tech startup\'s leadership team.', imageUrl: 'https://picsum.photos/seed/headshots/600/400', tags: ['Photography', 'Studio Lighting'], roles: ['Photographer'] },
    { id: 'proj-10', title: 'Real Estate Viz', year: 2023, category: PC.THREE_D, summary: 'Architectural visualization renders for an upcoming apartment complex.', imageUrl: 'https://picsum.photos/seed/realestate/600/400', tags: ['3ds Max', 'V-Ray', 'Photoshop'], roles: ['3D Artist'] },
    { id: 'proj-11', title: 'NGO Documentary', year: 2021, category: PC.VIDEO, summary: 'A short documentary highlighting the work of a local education-focused NGO.', imageUrl: 'https://picsum.photos/seed/ngo/600/400', tags: ['Documentary', 'Editing'], roles: ['Videographer', 'Editor'] },
    { id: 'proj-12', title: 'SaaS Dashboard UI', year: 2024, category: PC.WEB, summary: 'Designed and prototyped a clean, data-rich dashboard for a fintech startup.', imageUrl: 'https://picsum.photos/seed/saas/600/400', tags: ['Figma', 'UI/UX', 'React'], roles: ['UI/UX Designer'] },
];
