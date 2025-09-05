import React, { useState } from 'react';
import styled from 'styled-components';

const ProjetsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3rem;
  color: #2c3e50;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.8rem 1.5rem;
  border: 2px solid #3498db;
  background: ${props => props.$active ? '#3498db' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#3498db'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #3498db;
    color: white;
  }
`;

const ProjetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjetCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const ProjetHeader = styled.div<{ $backgroundImage?: string }>`
  background: ${props => props.$backgroundImage 
    ? `linear-gradient(rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8)), url(${props.$backgroundImage})`
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  color: white;
  padding: 1.5rem;
  position: relative;
`;

const ProjetTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const ProjetMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0.9;
  font-size: 0.9rem;
`;

const ProjetContent = styled.div`
  padding: 1.5rem;
`;

const ProjetDescription = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjetDetails = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: #555;
      margin-bottom: 0.3rem;
      position: relative;
      padding-left: 1rem;
      font-size: 0.9rem;

      &::before {
        content: '•';
        color: #3498db;
        position: absolute;
        left: 0;
      }
    }
  }
`;

const CompetencesMapping = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const CompetencesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CompetenceTag = styled.span`
  background: #e8f4f8;
  color: #2980b9;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid #bdd5ea;
`;

const TechnologiesSection = styled.div`
  margin-bottom: 1.5rem;

  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1rem;
  }
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechnologyTag = styled.span`
  background: #3498db;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjetActions = styled.div`
  display: flex;
  gap: 1rem;
`;

const ActionButton = styled.a`
  flex: 1;
  padding: 0.8rem;
  text-align: center;
  border: 2px solid #3498db;
  color: #3498db;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #3498db;
    color: white;
  }

  &.primary {
    background: #3498db;
    color: white;

    &:hover {
      background: #2980b9;
      border-color: #2980b9;
    }
  }
`;

interface Projet {
  id: number;
  title: string;
  description: string;
  duration: string;
  team: string;
  objectives: string[];
  tasks: string[];
  deliverables: string[];
  technologies: string[];
  competences: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: 'completed' | 'in-progress';
}

const Projets: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projets: Projet[] = [
    {
      id: 1,
      title: 'Enquête sur les alumni',
      description: "Un point de vigilance a récemment été émis par le Haut Conseil de l'Évaluation de la Recherche et de l'Enseignement Supérieur (HCÉRES), chargé d’évaluer les formations, concernant le devenir des étudiants diplômés de l’Institut Universitaire de Technologie (IUT) de Villetaneuse (93). À cet effet, afin de pouvoir aider les chefs de départements et les directeurs de formations dans cette tâche, il nous a été demandé de mener une enquête sur les poursuites d’études et les insertions professionnelles des diplômés.",
      duration: '3 semaines',
      team: '4 étudiants',
      objectives: [
        'Interview des chefs de départements',
        'Création d\'un questionnaire',
        'Analyse des données récoltées',
        'Réalisation d\'un rapport final'
      ],
      tasks: [
        'Analyse des besoins et conception UML',
        'Développement frontend en React',
        'Création d\'une API REST en Node.js',
        'Intégration base de données PostgreSQL',
        'Tests unitaires et d\'intégration'
      ],
      deliverables: [
        'Questionnaire',
        'Rapport d\'interview',
      ],
      technologies: ['Word'],
      competences: ['Réaliser', 'Gérer', 'Collaborer', 'Conduire'],
      demoUrl: '/Portfolio/CR.pdf',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Revue de littérature automatisée',
      description: "Ce projet, proposé dans le cadre du cours « Management des Systèmes d’Information » en partenariat avec THALES, vise à apporter des éléments de réponses à la question « les systèmes d’identité influencent-ils certains facteurs de développement dans les pays en voie de développement ».",
      duration: '6 semaines',
      team: '4 étudiants',
      objectives: [
        'créer un outil automatisé de recherche et d’analyse de documents scientifiques',
        'utiliser des techniques de web scraping pour collecter les données',
        'appliquer le traitement du langage naturel (NLP) pour analyser les textes',
        'générer des résumés et extraire la méthodologie des études'
      ],
      tasks: [
        'Tableau de bord Klaxoon',
        'Configuration de l\'environnement de développement',
        'Collecte des articles scientifiques API semanticscholar.org',
        'Nettoyage et prétraitement des données textuelles',
        'Analyse LLM et affichage des résultats',
      ],
      deliverables: [
        'Tableur de collecte des articles',
        'Rapport d\'analyse',
        'Soutenance orale',
      ],
      technologies: ['Python', 'OpenAi', 'Pandas', 'BeautifulSoup'],
      competences: ['Réaliser', 'Gérer', 'Optimiser', 'Collaborer', 'Conduire'],
      githubUrl: 'https://github.com/Lucas-MARIE/MSI_THALES_GROUPE6',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Nuit de l\'info 2024',
      description: "'Le plus fun serious-game regroupant des milliers d’étudiants pour développer une application informatique en une nuit'. Chef d'équipe d'un groupe de 14 étudiant, nous avons eu une nuit pour répondre à 5 défis aux choix et un imposé. Cette aventure m'a permis de faire le point sur les compétences les plus importantes à développer pour mener à bien un projet collectif : la communication, l'analyse du sujet, la planification et la répartition des tâches, la souplesse d'esprit et le fait de s'amuser !",
      duration: '16h',
      team: '14 étudiants',
      objectives: [
        'Faire un site web répondant à une problématique : "Le corps et l\'océan"',
        'S\'amuser',
        'Travailler en équipe',
      ],
      tasks: [
        'Analyse du sujet et brainstorming',
        'Planification et répartition des tâches',
        'Développement frontend et déploiement',
        'Interview avec les médias',
      ],
      deliverables: [
        'Site web (pas vraiment fonctionnel en si peu de temps ...)',
        'Petits défis annexes',
      ],
      technologies: ['HTML', 'CSS', 'Java Script', 'Git hub'],
      competences: ['Réaliser', 'Gérer', 'Conduire', 'Collaborer'],
      githubUrl: 'https://github.com/Lucas-MARIE/cookie-cauchemar',
      demoUrl: 'https://www.nuitdelinfo.com',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Prominder - Outil pédagogique d\'EPS',
      description: "Prominder est un outil d'aide à l'observation de match de badminton. Les enseignants peuvent enregistrer leurs classes d'élèves, les modifier ou les supprimer de façon sécurisée (mot de passe à la création de la 1ère classe) Les élèves peuvent observer leurs camarades créant ainsi un profil en fonction des coups joués en cliquant dans un graphique dynamique (smash, dégagé, amortie...). Les élèves et les enseignants peuvent consulter les profils des autres élèves auxquels sont associés des conseils stratégiques et tactiques. L'enseignant peut consulter les annexes qui contiennent les informations de tous les types de profils.",
      duration: '8 semaines',
      team: '2 étudiants',
      objectives: [
        'Gamification de l\'observation des match de badminton',
        'Ressources pédagogiques pour les enseignants et les élèves',
        'Interface intuitive et adaptée',
      ],
      tasks: [
        'Conception d\'une application excel',
        'Observation de matchs pour tester l\'outil',
        'Conseils interractifs adaptés en fonction du résultat',
      ],
      deliverables: [
        'Application Excel fonctionnelle',
        'Soutenance orale',
        'Documentation spécialisée en badminton',
      ],
      technologies: ['Excel', 'VBA'],
      competences: ['Réaliser', 'Gérer', 'Collaborer', 'Conduire'],
      githubUrl: 'https://github.com/Lucas-MARIE/Prominder-badminton-EPS-TICE',
      status: 'completed'
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous les projets' },
    { key: 'Réaliser', label: 'Développement' },
    { key: 'Administrer', label: 'Administration' },
    { key: 'Gérer', label: 'Gestion de données' },
    { key: 'Collaborer', label: 'Collaboration' },
    { key: 'Conduire', label: 'Gestion de projet' },
    { key: 'Optimiser', label: 'Optimisation' }
  ];

  const filteredProjets = activeFilter === 'all' 
    ? projets 
    : projets.filter(projet => projet.competences.includes(activeFilter));

  return (
    <ProjetsContainer>
      <PageTitle>Projets (SAÉ)</PageTitle>
      
      <FilterSection>
        {filters.map(filter => (
          <FilterButton
            key={filter.key}
            $active={activeFilter === filter.key}
            onClick={() => setActiveFilter(filter.key)}
          >
            {filter.label}
          </FilterButton>
        ))}
      </FilterSection>

      <ProjetsGrid>
        {filteredProjets.map(projet => (
          <ProjetCard key={projet.id}>
            <ProjetHeader>
              <ProjetTitle>{projet.title}</ProjetTitle>
              <ProjetMeta>
                <span>{projet.duration}</span>
                <span>{projet.team}</span>
              </ProjetMeta>
            </ProjetHeader>
            
            <ProjetContent>
              <ProjetDescription>{projet.description}</ProjetDescription>

              <ProjetDetails>
                <h4>Objectifs</h4>
                <ul>
                  {projet.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </ProjetDetails>

              <ProjetDetails>
                <h4>Tâches accomplies</h4>
                <ul>
                  {projet.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </ProjetDetails>

              <ProjetDetails>
                <h4>Livrables</h4>
                <ul>
                  {projet.deliverables.map((deliverable, index) => (
                    <li key={index}>{deliverable}</li>
                  ))}
                </ul>
              </ProjetDetails>

              <CompetencesMapping>
                <h4>Compétences BUT mobilisées</h4>
                <CompetencesTags>
                  {projet.competences.map((competence, index) => (
                    <CompetenceTag key={index}>{competence}</CompetenceTag>
                  ))}
                </CompetencesTags>
              </CompetencesMapping>

              <TechnologiesSection>
                <h4>Technologies utilisées</h4>
                <TechnologiesList>
                  {projet.technologies.map((tech, index) => (
                    <TechnologyTag key={index}>{tech}</TechnologyTag>
                  ))}
                </TechnologiesList>
              </TechnologiesSection>

              <ProjetActions>
                {projet.githubUrl && (
                  <ActionButton href={projet.githubUrl} target="_blank">
                    Code Source
                  </ActionButton>
                )}
                {projet.demoUrl && (
                  <ActionButton href={projet.demoUrl} target="_blank" className="primary">
                    Démonstration
                  </ActionButton>
                )}
              </ProjetActions>
            </ProjetContent>
          </ProjetCard>
        ))}
      </ProjetsGrid>
    </ProjetsContainer>
  );
};

export default Projets;