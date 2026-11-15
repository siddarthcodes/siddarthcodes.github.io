export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  metrics: string;
  tags: string[];
  gradient: string;
  link?: string;
  github?: string;
  featured?: boolean;
}

export const PERSONAL_INFO = {
  fullName: "Siddarth Katwal",
  role: "Full Stack Developer & Creative Technologist",
  subRole: "AI Enthusiast • Digital Brand Strategist",
  location: "Nepal",
  school: "Global School of Science (Class 11)",
  email: "katwalsiddarth@gmail.com",
  phone: "+977 9761084387",
  phoneRaw: "+9779761084387",
  instagram: "https://instagram.com/siddarth.katwal",
  instagramHandle: "@siddarth.katwal",
  linkedin: "https://np.linkedin.com/in/katwalsiddarth",
  blog: "https://siddarthkatwal.blogspot.com",
  agency: "https://skyreelagency.lovable.app",
  fiora: "https://thefioraclothing.com.np",
  tiktokManager: "https://www.tiktok.com/@shakiraaa_katwalll",
  stats: [
    { label: "Audience Managed", value: "84K+", sub: "TikTok Community" },
    { label: "Location", value: "Nepal", sub: "GMT +5:45" },
    { label: "Academic Focus", value: "Class 11", sub: "Global School of Science" },
    { label: "Core Specialty", value: "Full Stack & AI", sub: "Modern Web Stack" },
  ],
};

export const SEQUENCE_CONFIG = {
  frameCount: 60,
  folder: "/sequence",
  getFrameUrl: (index: number) => {
    const paddedThree = String(index).padStart(3, "0");
    return `/sequence/frame_${paddedThree}.webp`;
  },
  getDelayFrameUrl: (index: number) => {
    const paddedTwo = String(index).padStart(2, "0");
    return `/sequence/frame_${paddedTwo}_delay-0.067s.webp`;
  },
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "skyreel-agency",
    title: "Skyreel Agency",
    category: "AI Agency & Digital Studio",
    year: "2024",
    description:
      "A high-velocity digital agency platform engineered with AI-accelerated workflows and interactive systems to scale modern brand presence.",
    metrics: "AI-Driven Architecture • Lovable Stack",
    tags: ["AI Workflows", "Next.js", "Brand Strategy", "Modern UI"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    link: "https://skyreelagency.lovable.app",
    featured: true,
  },
  {
    id: "the-fiora-clothing",
    title: "The Fiora Clothing",
    category: "E-Commerce & Digital Presence",
    year: "2024",
    description:
      "Complete web presence and storefront architecture for contemporary apparel brand The Fiora, delivering an elegant and responsive customer journey.",
    metrics: "Full Brand Presence • E-Commerce",
    tags: ["E-Commerce", "Digital Brand Presence", "UI/UX", "Responsive Design"],
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    link: "https://thefioraclothing.com.np",
    featured: true,
  },
  {
    id: "creator-growth-strategy",
    title: "Creator Brand Operations & Growth",
    category: "Digital Strategy & Audience Scaling",
    year: "2024",
    description:
      "Strategic channel management and audience expansion architecture for @shakiraaa_katwalll, scaling reach to 84,000+ organic followers with high engagement.",
    metrics: "84K+ Organic Followers • Viral Reach",
    tags: ["Audience Growth", "Brand Operations", "Content Analytics", "Social Architecture"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    link: "https://www.tiktok.com/@shakiraaa_katwalll",
    featured: false,
  },
  {
    id: "tech-ai-blog",
    title: "Frontend & AI Engineering Blog",
    category: "Technical Discourse & Publication",
    year: "2024",
    description:
      "Independent technical publication covering modern frontend engineering paradigms, generative AI integrations, and creative web development.",
    metrics: "Active Tech Writer • AI & Dev",
    tags: ["Generative AI", "Frontend Architecture", "Tech Writing", "Innovation"],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    link: "https://siddarthkatwal.blogspot.com",
    featured: false,
  },
];
