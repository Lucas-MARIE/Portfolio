import portfolioData from '../data/portfolio.json';

export interface Profile {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface Stats {
  projects: number;
  experiences: number;
  technologies: number;
  studyYears: string;
}

export interface Competence {
  name: string;
  description: string;
  level: number;
  color: string;
}

export interface Formation {
  year: string;
  title: string;
  school: string;
  description: string;
  details: string[];
  position: 'left' | 'right';
  logo: string;
}

export interface JustificationBUT {
  title: string;
  content: string[];
}

export interface PortfolioData {
  profile: Profile;
  stats: Stats;
  competences: Competence[];
  formations: Formation[];
  justificationBUT: JustificationBUT;
}

export const getPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};

export const getProfile = (): Profile => {
  return portfolioData.profile as Profile;
};

export const getStats = (): Stats => {
  return portfolioData.stats as Stats;
};

export const getCompetences = (): Competence[] => {
  return portfolioData.competences as Competence[];
};

export const getFormations = (): Formation[] => {
  return portfolioData.formations as Formation[];
};

export const getJustificationBUT = (): JustificationBUT => {
  return portfolioData.justificationBUT as JustificationBUT;
};