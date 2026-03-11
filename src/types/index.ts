// types/index.ts — Shared TypeScript interfaces for Pitchin

export interface CaseStudy {
  slug: string;
  company: string;
  tagline: string;
  category: string;
  title: string;
  heroImage: string;
  logo: string;
  challenge: string;
  solution: string;
  results: string;
  metrics: { value: string; label: string }[];
  technologies: string[];
  testimonial?: { quote: string; author: string; role: string };
  gallery?: string[];
  translations?: {
    fr?: {
      tagline?: string;
      category?: string;
      title?: string;
      challenge?: string;
      solution?: string;
      results?: string;
      metricLabels?: string[];
      testimonial?: { quote?: string; role?: string };
    };
  };
}

export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: string;
  technologies: string[];
  features: string[];
  process: { step: number; title: string; description: string }[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
  coverImage: string;
  content?: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  nice_to_have?: string[];
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}
