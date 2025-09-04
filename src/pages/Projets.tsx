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
      title: 'Application de Gestion de Bibliothèque',
      description: 'Développement d\'une application complète de gestion de bibliothèque avec interface utilisateur moderne et système de gestion des emprunts.',
      duration: '8 semaines',
      team: '4 étudiants',
      objectives: [
        'Créer une interface utilisateur intuitive',
        'Implémenter un système de gestion des livres',
        'Développer un module d\'authentification',
        'Optimiser les performances de l\'application'
      ],
      tasks: [
        'Analyse des besoins et conception UML',
        'Développement frontend en React',
        'Création d\'une API REST en Node.js',
        'Intégration base de données PostgreSQL',
        'Tests unitaires et d\'intégration'
      ],
      deliverables: [
        'Application web fonctionnelle',
        'Documentation technique complète',
        'Guide utilisateur',
        'Rapport de tests'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT', 'Jest'],
      competences: ['Réaliser', 'Gérer', 'Collaborer'],
      githubUrl: 'https://github.com/example/bibliotheque',
      demoUrl: 'https://bibliotheque-demo.herokuapp.com',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Système de Monitoring Réseau',
      description: 'Développement d\'un outil de surveillance réseau en temps réel avec alertes automatisées et tableaux de bord.',
      duration: '6 semaines',
      team: '3 étudiants',
      objectives: [
        'Surveiller les équipements réseau en temps réel',
        'Générer des alertes automatiques',
        'Créer des rapports de performance',
        'Implémenter une interface de configuration'
      ],
      tasks: [
        'Étude des protocoles SNMP',
        'Développement du moteur de surveillance',
        'Création des tableaux de bord',
        'Système d\'alertes par email',
        'Tests de charge et optimisation'
      ],
      deliverables: [
        'Application de monitoring',
        'Documentation d\'installation',
        'Manuel administrateur',
        'Scripts de déploiement'
      ],
      technologies: ['Python', 'Flask', 'SQLite', 'SNMP', 'Chart.js', 'Docker'],
      competences: ['Administrer', 'Optimiser', 'Réaliser'],
      githubUrl: 'https://github.com/example/network-monitor',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Application Mobile de Gestion de Tâches',
      description: 'Création d\'une application mobile cross-platform pour la gestion collaborative de tâches avec synchronisation cloud.',
      duration: '10 semaines',
      team: '5 étudiants',
      objectives: [
        'Développer une app mobile intuitive',
        'Implémenter la synchronisation temps réel',
        'Créer un système de notifications',
        'Assurer la sécurité des données'
      ],
      tasks: [
        'Prototypage et design UX/UI',
        'Développement en React Native',
        'API backend avec authentification',
        'Intégration Firebase pour sync',
        'Tests sur différents appareils'
      ],
      deliverables: [
        'Application Android et iOS',
        'API backend documentée',
        'Guide de déploiement',
        'Plan de tests complet'
      ],
      technologies: ['React Native', 'Node.js', 'Firebase', 'Redux', 'Express', 'MongoDB'],
      competences: ['Réaliser', 'Collaborer', 'Conduire'],
      githubUrl: 'https://github.com/example/task-manager',
      demoUrl: 'https://task-manager-demo.netlify.com',
      status: 'in-progress'
    },
    {
      id: 4,
      title: 'Plateforme E-learning Interactive',
      description: 'Développement d\'une plateforme d\'apprentissage en ligne avec système de quiz, suivi de progression et chat en temps réel.',
      duration: '12 semaines',
      team: '6 étudiants',
      objectives: [
        'Créer une plateforme d\'apprentissage complète',
        'Implémenter un système de gamification',
        'Développer des outils d\'interaction',
        'Optimiser l\'expérience utilisateur'
      ],
      tasks: [
        'Architecture microservices',
        'Développement frontend modulaire',
        'Système de gestion de contenu',
        'Intégration vidéo et quiz interactifs',
        'Tests d\'accessibilité et performance'
      ],
      deliverables: [
        'Plateforme web complète',
        'Panel d\'administration',
        'Documentation utilisateur',
        'Rapport d\'audit sécurité'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'WebRTC', 'Docker'],
      competences: ['Réaliser', 'Gérer', 'Optimiser', 'Collaborer'],
      githubUrl: 'https://github.com/example/elearning',
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