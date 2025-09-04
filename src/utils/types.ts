export interface ExperienceCompetence {
  title: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: {
    missions: string[];
    context: string;
  };
  competences?: ExperienceCompetence[];
  autoEvaluation: {
    pointsForts: string[];
    ameliorations: string[];
  };
  technologies: string[];
}