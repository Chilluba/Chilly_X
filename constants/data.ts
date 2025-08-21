
import type { Project, Service, SkillCategory, SocialLink, ProjectCategory } from '../types';
import { Github, Youtube, Instagram, Facebook, Twitter, Linkedin, Camera, Clapperboard, Code, Cpu, Gamepad, Layers, PenTool, Video } from 'lucide-react';
import { ProjectCategory as PC } from '../types';

export const PROFILE_DATA = {
  displayName: "Chilly_XwAgGzZ",
  fullName: "Salmin Habibu",
  profileImageUrl: "https://picsum.photos/seed/salmin/800/1000",
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
    categorySw: "Maendeleo",
    skills: [
      { name: "TypeScript", nameSw: "TypeScript", proficiency: 90 },
      { name: "React/Next.js", nameSw: "React/Next.js", proficiency: 95 },
      { name: "Node.js", nameSw: "Node.js", proficiency: 85 },
      { name: "Python", nameSw: "Python", proficiency: 80 },
      { name: "Firebase", nameSw: "Firebase", proficiency: 90 },
      { name: "AI/Agent Prototyping", nameSw: "Uundaji wa AI/Wakala", proficiency: 75 },
    ],
  },
  {
    category: "3D/CGI & Pre-viz",
    categorySw: "3D/CGI na Uangalizi",
    skills: [
      { name: "Modeling & Lookdev", nameSw: "Uundaji na Muonekano", proficiency: 90 },
      { name: "Lighting & Rendering", nameSw: "Mwanga na Utoaji", proficiency: 85 },
      { name: "Compositing", nameSw: "Muunganisho", proficiency: 80 },
      { name: "Shot Listing", nameSw: "Orodha ya Picha", proficiency: 95 },
    ],
  },
  {
    category: "Design",
    categorySw: "Ubunifu",
    skills: [
      { name: "Branding & UI/UX", nameSw: "Chapa na UI/UX", proficiency: 85 },
      { name: "Photoshop & Illustrator", nameSw: "Photoshop & Illustrator", proficiency: 95 },
      { name: "Figma", nameSw: "Figma", proficiency: 90 },
    ],
  },
  {
    category: "Video & Photo",
    categorySw: "Video na Picha",
    skills: [
      { name: "Cinematography", nameSw: "Sinema", proficiency: 80 },
      { name: "Color Grading (DaVinci)", nameSw: "Rangi ya Rangi (DaVinci)", proficiency: 90 },
      { name: "Editing (Premiere Pro)", nameSw: "Uhariri (Premiere Pro)", proficiency: 95 },
    ],
  },
];

export const SERVICES_DATA: Service[] = [
  { 
    title: "Web/Apps Development", 
    titleSw: "Maendeleo ya Tovuti/Programu",
    description: "Building modern, fast, and scalable web applications and sites.", 
    descriptionSw: "Kuunda programu za wavuti na tovuti za kisasa, za haraka na zinazoweza kupanuka.",
    icon: Code 
  },
  { 
    title: "3D/CGI & Pre-viz", 
    titleSw: "3D/CGI na Uangalizi",
    description: "Creating stunning 3D worlds, characters, and visual effects for film and games.", 
    descriptionSw: "Kuunda ulimwengu wa 3D, wahusika, na athari za kuona kwa filamu na michezo.",
    icon: Layers 
  },
  { 
    title: "Brand/Graphics Design", 
    titleSw: "Ubunifu wa Chapa/Picha",
    description: "Crafting unique visual identities, logos, and marketing materials.", 
    descriptionSw: "Kuunda utambulisho wa kipekee wa kuona, alama, na nyenzo za biashara.",
    icon: PenTool 
  },
  { 
    title: "Videography & Editing", 
    titleSw: "Upigaji Video na Uhariri",
    description: "Full-service video production from shooting to final color grade and edit.", 
    descriptionSw: "Utayarishaji kamili wa video kutoka upigaji hadi rangi ya mwisho na uhariri.",
    icon: Clapperboard 
  },
  { 
    title: "Photography", 
    titleSw: "Upigaji Picha",
    description: "Capturing moments and products with professional-grade photography.", 
    descriptionSw: "Kupiga picha za wakati na bidhaa kwa upigaji picha wa kitaalamu.",
    icon: Camera 
  },
  { 
    title: "Automation & AI Agents", 
    titleSw: "Otomatiki na Wakala wa AI",
    description: "Developing custom AI tools and automation scripts to boost productivity.", 
    descriptionSw: "Kuunda zana za AI na maandishi ya otomatiki ili kuongeza uzalishaji.",
    icon: Cpu 
  },
  { 
    title: "Game Prototypes", 
    titleSw: "Mifano ya Michezo",
    description: "Designing and building interactive game mechanics, including betting-style systems.", 
    descriptionSw: "Kubuni na kuunda mifumo ya michezo ya kujumuishana, pamoja na mifumo ya kamari.",
    icon: Gamepad 
  },
  { 
    title: "Educational Media", 
    titleSw: "Vyombo vya Habari vya Elimu",
    description: "Producing engaging educational content, especially for Swahili-speaking audiences.", 
    descriptionSw: "Kutengeneza maudhui ya kielimu ya kuvutia, haswa kwa wasikilizaji wa Kiswahili.",
    icon: Video 
  },
];

export const PROJECTS_DATA: Project[] = [
    { 
      id: 'proj-1', 
      title: 'SokoBora E-commerce Platform', 
      titleSw: 'Jukwaa la Biashara ya SokoBora',
      year: 2023, 
      category: PC.WEB, 
      summary: 'A full-stack e-commerce site for local Tanzanian artisans, featuring Swahili localization.', 
      summarySw: 'Tovuti kamili ya biashara kwa wafanyikazi wa Tanzania, yenye lugha ya Kiswahili.',
      imageUrl: 'https://picsum.photos/seed/sokobora/600/400', 
      tags: ['React', 'Firebase', 'Stripe', 'Next.js'], 
      tagsSw: ['React', 'Firebase', 'Stripe', 'Next.js'],
      roles: ['Lead Developer', 'UI/UX Designer'], 
      rolesSw: ['Mkuu wa Maendeleo', 'Mubunifu wa UI/UX'],
      links: [] 
    },
    { 
      id: 'proj-2', 
      title: 'PesaSpin - Betting Game', 
      titleSw: 'PesaSpin - Mchezo wa Kamari',
      year: 2022, 
      category: PC.GAMES, 
      summary: 'A mobile-first betting-style web game with real-time odds and animations.', 
      summarySw: 'Mchezo wa wavuti wa kamari wa simu kwanza na nafasi za wakati halisi na uhuishaji.',
      imageUrl: 'https://picsum.photos/seed/pesaspin/600/400', 
      tags: ['TypeScript', 'React', 'WebSockets'], 
      tagsSw: ['TypeScript', 'React', 'WebSockets'],
      roles: ['Game Designer', 'Developer'], 
      rolesSw: ['Mubunifu wa Mchezo', 'Mendelevi'],
      links: [] 
    },
    { 
      id: 'proj-3', 
      title: 'Cyber Dar - 3D Short Film', 
      titleSw: 'Cyber Dar - Filamu Fupi ya 3D',
      year: 2023, 
      category: PC.THREE_D, 
      summary: 'An animated short film depicting a futuristic Dar es Salaam.', 
      summarySw: 'Filamu fupi ya uhuishaji inayoonyesha Dar es Salaam ya siku za usoni.',
      imageUrl: 'https://picsum.photos/seed/cyberdar/600/400', 
      tags: ['Blender', 'After Effects', 'DaVinci Resolve'], 
      tagsSw: ['Blender', 'After Effects', 'DaVinci Resolve'],
      roles: ['Director', '3D Artist', 'Compositor'], 
      rolesSw: ['Mkurugenzi', 'Msanii wa 3D', 'Mshirikishi'],
      links: [] 
    },
    { 
      id: 'proj-4', 
      title: 'Nipe Dili - Music Video', 
      titleSw: 'Nipe Dili - Video ya Muziki',
      year: 2022, 
      category: PC.VIDEO, 
      summary: 'Directed, shot, and color-graded a music video for a local Bongo Flava artist.', 
      summarySw: 'Kuelekeza, kupiga, na kuweka rangi ya video ya muziki kwa msanii wa Bongo Flava.',
      imageUrl: 'https://picsum.photos/seed/nipedili/600/400', 
      tags: ['Premiere Pro', 'DaVinci Resolve'], 
      tagsSw: ['Premiere Pro', 'DaVinci Resolve'],
      roles: ['Director', 'DP', 'Colorist'], 
      rolesSw: ['Mkurugenzi', 'Mpiga Picha', 'Mweka Rangi'],
      links: [] 
    },
    { 
      id: 'proj-5', 
      title: 'Zanzibar Spice Tour', 
      titleSw: 'Safari ya Viungo Zanzibar',
      year: 2023, 
      category: PC.PHOTO, 
      summary: 'A vibrant photo series capturing the essence of Zanzibar\'s spice farms.', 
      summarySw: 'Mfululizo wa picha za rangi zinazopiga kiini cha mashamba ya viungo ya Zanzibar.',
      imageUrl: 'https://picsum.photos/seed/zanzibar/600/400', 
      tags: ['Photography', 'Lightroom'], 
      tagsSw: ['Upigaji Picha', 'Lightroom'],
      roles: ['Photographer'], 
      rolesSw: ['Mpiga Picha'],
      links: [] 
    },
    { 
      id: 'proj-6', 
      title: 'Vinywaji Brand Identity', 
      titleSw: 'Utambulisho wa Chapa ya Vinywaji',
      year: 2021, 
      category: PC.DESIGN, 
      summary: 'Complete branding package for a new local beverage company.', 
      summarySw: 'Kifurushi kamili cha chapa kwa kampuni mpya ya vinywaji vya ndani.',
      imageUrl: 'https://picsum.photos/seed/vinywaji/600/400', 
      tags: ['Illustrator', 'Photoshop', 'Branding'], 
      tagsSw: ['Illustrator', 'Photoshop', 'Chapa'],
      roles: ['Graphic Designer'], 
      rolesSw: ['Mubunifu wa Picha'],
      links: [] 
    },
    { 
      id: 'proj-7', 
      title: 'Swahili Code Tutor AI', 
      titleSw: 'AI ya Mwalimu wa Msimbo wa Kiswahili',
      year: 2024, 
      category: PC.AI, 
      summary: 'An AI-powered agent that helps Swahili speakers learn programming concepts.', 
      summarySw: 'Wakala wa AI unaosaidia wasemaji wa Kiswahili kujifunza dhana za programu.',
      imageUrl: 'https://picsum.photos/seed/swahiliai/600/400', 
      tags: ['Python', 'LLM', 'React'], 
      tagsSw: ['Python', 'LLM', 'React'],
      roles: ['AI Developer', 'Prompt Engineer'], 
      rolesSw: ['Mendelevi wa AI', 'Mhandisi wa Maagizo'],
      links: [] 
    },
    { 
      id: 'proj-8', 
      title: 'WebGL Car Configurator', 
      titleSw: 'Mpangaji wa Gari wa WebGL',
      year: 2022, 
      category: PC.EXPERIMENTS, 
      summary: 'An interactive 3D car model viewer and customizer running in the browser.', 
      summarySw: 'Mtazamaji wa mfano wa gari wa 3D wa kujumuishana na mpangaji unaoendeshwa kwenye kivinjari.',
      imageUrl: 'https://picsum.photos/seed/webglcar/600/400', 
      tags: ['Three.js', 'React', 'WebGL'], 
      tagsSw: ['Three.js', 'React', 'WebGL'],
      roles: ['Developer', '3D Artist'], 
      rolesSw: ['Mendelevi', 'Msanii wa 3D'],
      links: [] 
    },
    { 
      id: 'proj-9', 
      title: 'Corporate Headshots', 
      titleSw: 'Picha za Kichwa za Kampuni',
      year: 2024, 
      category: PC.PHOTO, 
      summary: 'Professional headshots for a Tanzanian tech startup\'s leadership team.', 
      summarySw: 'Picha za kichwa za kitaalamu kwa timu ya uongozi ya kampuni ya teknolojia ya Tanzania.',
      imageUrl: 'https://picsum.photos/seed/headshots/600/400', 
      tags: ['Photography', 'Studio Lighting'], 
      tagsSw: ['Upigaji Picha', 'Mwanga wa Studio'],
      roles: ['Photographer'], 
      rolesSw: ['Mpiga Picha'],
      links: [] 
    },
    { 
      id: 'proj-10', 
      title: 'Real Estate Viz', 
      titleSw: 'Uhalisia wa Nyumba',
      year: 2023, 
      category: PC.THREE_D, 
      summary: 'Architectural visualization renders for an upcoming apartment complex.', 
      summarySw: 'Picha za uhalisia wa usanifu kwa jengo la ghorofa zinazokuja.',
      imageUrl: 'https://picsum.photos/seed/realestate/600/400', 
      tags: ['3ds Max', 'V-Ray', 'Photoshop'], 
      tagsSw: ['3ds Max', 'V-Ray', 'Photoshop'],
      roles: ['3D Artist'], 
      rolesSw: ['Msanii wa 3D'],
      links: [] 
    },
    { 
      id: 'proj-11', 
      title: 'NGO Documentary', 
      titleSw: 'Makala ya Shirika Lisilo la Kiserikali',
      year: 2021, 
      category: PC.VIDEO, 
      summary: 'A short documentary highlighting the work of a local education-focused NGO.', 
      summarySw: 'Makala fupi inayoonyesha kazi ya shirika lisilo la kiserikali la elimu.',
      imageUrl: 'https://picsum.photos/seed/ngo/600/400', 
      tags: ['Documentary', 'Editing'], 
      tagsSw: ['Makala', 'Uhariri'],
      roles: ['Videographer', 'Editor'], 
      rolesSw: ['Mpiga Video', 'Mhariri'],
      links: [] 
    },
    { 
      id: 'proj-12', 
      title: 'SaaS Dashboard UI', 
      titleSw: 'UI ya Dashibodi ya SaaS',
      year: 2024, 
      category: PC.WEB, 
      summary: 'Designed and prototyped a clean, data-rich dashboard for a fintech startup.', 
      summarySw: 'Kubuni na kuunda mfano wa dashibodi safi yenye data nyingi kwa kampuni ya teknolojia ya fedha.',
      imageUrl: 'https://picsum.photos/seed/saas/600/400', 
      tags: ['Figma', 'UI/UX', 'React'], 
      tagsSw: ['Figma', 'UI/UX', 'React'],
      roles: ['UI/UX Designer'], 
      rolesSw: ['Mubunifu wa UI/UX'],
      links: [] 
    },
];
