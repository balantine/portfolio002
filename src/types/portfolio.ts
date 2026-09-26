export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  domain: string;
  readTime: string;
  summary: string;
  challenge: string;
  architecture: string;
  results: string[];
  metrics: { label: string; value: string }[];
  stack: string[];
  demoType: 'network-routing' | 'audio-haptics' | 'optical-prism' | 'cryptography' | 'computer-vision';
  featured?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi: string;
  type: 'Journal' | 'Conference' | 'Workshop' | 'Preprint';
  abstract: string;
  citations: number;
  bibtex: string;
  pdfUrl?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  focus: string;
  honors: string[];
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
}

export interface ThesisData {
  title: string;
  subtitle: string;
  candidate: string;
  institution: string;
  department: string;
  defenseDate: string;
  advisors: { name: string; title: string; lab: string }[];
  committee: { name: string; role: string; institution: string }[];
  abstract: string;
  motivation: string;
  methodology: string;
  innovations: string[];
  keyMetrics: { label: string; value: string; context: string }[];
  chapters: {
    number: string;
    title: string;
    pages: string;
    synopsis: string;
    excerpts: string;
  }[];
}
