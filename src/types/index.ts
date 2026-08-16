export interface SkillItem {
  name: string;
  level?: string;
  icon?: string;
  description: string; // Dynamic real-world detail shown on tap/click!
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string; // Remote / On-site / Hybrid
  highlights: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  badge: string;
  description: string;
  highlights: string[];
  tools: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  category: 'Full-Stack' | 'Real-Time' | 'Frontend' | 'Systems';
  metrics?: string;
  architectureOverview: string;
}

export interface AchievementItem {
  title: string;
  badge: string;
  value: string;
  description: string;
  iconName: string;
  link?: string;
}

export interface PersonalDetails {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  college: string;
  degree: string;
  cgpa: string;
  location: string;
  emails: {
    personal: string;
    college: string;
  };
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    codechef?: string;
    leetcode?: string;
  };
  stats: {
    contestRating: number;
    dsaSolved: number;
    globalRank: number;
    hackathonMVPs: number;
  };
}
