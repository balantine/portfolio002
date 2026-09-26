export interface CourseItem {
  id: string;
  term: string;
  code: string;
  title: string;
  description: string;
  category: 'core' | 'emphasis';
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

export interface CompetencyArtifact {
  title: string;
  introduction: string;
  workSampleLink?: string;
  reflectionLink?: string;
}

export interface CoreCompetency {
  id: number;
  title: string;
  subCompetencies: string[];
  reflection: string;
  outcome: string;
  artifacts?: CompetencyArtifact[];
}

export interface EmphasisCompetency {
  code: string;
  title: string;
  objective: string;
  reflection: string;
  outcome: string;
  artifacts?: CompetencyArtifact[];
}
