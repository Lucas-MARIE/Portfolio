import React, { useState } from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const ProjetsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 3rem;
  color: #2c3e50;
`;

// Dashboard Table Styles
const DashboardContainer = styled.div`
  margin-bottom: 4rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
  overflow-x: auto;
`;

const DashboardTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  
  th, td {
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #f8f9fa;
    color: #2c3e50;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f1f8ff;
  }

  td a {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TypeBadge = styled.span<{ $type: 'Universitaire' | 'Pro' | 'Perso' }>`
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${props => {
    switch (props.$type) {
      case 'Pro': return '#e8f5e9';
      case 'Universitaire': return '#e3f2fd';
      case 'Perso': return '#fff3e0';
      default: return '#eee';
    }
  }};
  color: ${props => {
    switch (props.$type) {
      case 'Pro': return '#2e7d32';
      case 'Universitaire': return '#1565c0';
      case 'Perso': return '#e65100';
      default: return '#333';
    }
  }};
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
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
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
  display: flex;
  flex-direction: column;
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
  margin-top: 0.5rem;
`;

const ProjetContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
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

const TechnologiesSection = styled.div`
  margin-bottom: 1.5rem;
  flex-grow: 1;

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
  margin-top: auto;
  flex-wrap: wrap;
`;

const ActionButton = styled.a`
  flex: 1;
  min-width: 120px;
  padding: 0.8rem;
  text-align: center;
  border: 2px solid #3498db;
  color: #3498db;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.9rem;
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

// --- INTERFACES & DATA ---

interface Projet {
  id: number;
  title: string;
  type: 'Universitaire' | 'Pro' | 'Perso';
  description: string;
  duration: string;
  team: string;
  objectives: string[];
  tasks: string[];
  deliverables: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  pdfPage?: number;
  videoUrl?: string;
}

const Projets: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const pdfBaseUrl = 'Portfolio/Portfolio_projets_informatiques.pdf'; // Assure-toi que le PDF est dans le dossier public

  const projets: Projet[] = [
    {
      id: 1,
      title: 'PoC GenAI : Générateur de composants',
      type: 'Pro',
      description: "Réalisé lors de mon stage de fin de BUT2 chez L'Oréal. L'objectif était d'identifier les forces de l'IA générative sur la conception d'interfaces pour pallier un goulot d'étranglement côté design. Succès complet, le projet a été industrialisé dès la fin de mon stage.",
      duration: '2 mois',
      team: 'Individuel',
      objectives: [
        'Accélérer le time to delivery des applications métiers',
        'Générer des composants React TypeScript dynamiques'
      ],
      tasks: [
        'Étude de faisabilité et création du PoC',
        'Intégration du design system L\'Oréal',
        'Connexion aux données réelles'
      ],
      deliverables: ['Générateur de composants fonctionnel', 'Preuve de concept validée'],
      technologies: ['React', 'TypeScript', 'GenAI'],
      pdfPage: 2,
      videoUrl: 'Portfolio/Demo_Poc_GenAi.mp4'
    },
    {
      id: 2,
      title: 'Visualisation de dépendances inter-applications',
      type: 'Pro',
      description: "Stage de fin de BUT3 chez L'Oréal (6 mois). Conception d'une solution d'augmentation de la gouvernance par l'IA. J'ai réalisé une cartographie complexe croisant appels API, référentiel APM et codes sources.",
      duration: '6 mois',
      team: 'Individuel',
      objectives: [
        'Résoudre les pain points liés aux dépendances techniques',
        'Donner un contexte transverse à un LLM',
        'Optimiser le fonctionnement du projet Wiki LLM'
      ],
      tasks: [
        'Étude d\'agents de rétro-documentation',
        'Croisement de données (API, APM ServiceNow, Git)',
        'Requêtage via langage naturel (LLM)'
      ],
      deliverables: ['Graphe des dépendances applicatives', 'Outil de visualisation interactif'],
      technologies: ['LLM', 'ServiceNow', 'Graphes'],
      pdfPage: 3
    },
    {
      id: 3,
      title: 'Chaîne agentique de contexte projet',
      type: 'Pro',
      description: "Projet L'Oréal pour outiller la gouvernance. Conception d'un 'compagnon métier' (L'Oréal GPT) orchestrateur capable de créer et ingérer du contenu documentaire dans un Wiki (Confluence) via l'approche graph-RAG.",
      duration: 'Continu',
      team: 'Individuel',
      objectives: [
        'Ingérer des documents en unités sémantiques (graph-RAG)',
        'Générer des documents de framing (vision, roadmap, epics)'
      ],
      tasks: [
        'Création d\'agents avec system prompt et outils',
        'Intégration MCP Confluence',
        'Génération automatique de comptes rendus'
      ],
      deliverables: ['Plateforme MyStat Toolkit', 'Chaîne agentique automatisée'],
      technologies: ['LLMs', 'Confluence', 'Graph-RAG', 'Agents IA'],
      pdfPage: 4
    },
    {
      id: 4,
      title: 'Revue de littérature automatisée',
      type: 'Universitaire',
      description: "En partenariat avec THALES. Création d'un outil automatisé pour étudier l'impact des systèmes d'identité dans les pays en développement, en s'appuyant sur l'IA pour extraire et analyser des centaines d'articles scientifiques.",
      duration: '6 semaines',
      team: '4 étudiants',
      objectives: [
        'Automatiser la recherche et l\'analyse documentaire',
        'Appliquer le NLP pour générer des résumés',
        'Produire un tableau récapitulatif exploitable'
      ],
      tasks: [
        'Appels à l\'API Google Scholar et l\'API Groq (LLM)',
        'Nettoyage et analyse des données textuelles',
        'Création de graphiques de distribution'
      ],
      deliverables: ['Tableau de bord d\'analyse', 'Graphiques de corpus', 'Rapport final'],
      technologies: ['Python', 'API Groq', 'Pandas', 'Matplotlib', 'Streamlit'],
      githubUrl: 'https://github.com/Lucas-MARIE/MSI_THALES_GROUPE6',
      pdfPage: 5
    },
    {
      id: 5,
      title: 'Benchmark des implémentations de Voronoï',
      type: 'Universitaire',
      description: "Travail de recherche (BUT3) visant à comparer les implémentations d'un diagramme de Voronoï générées par différents LLMs (Claude, ChatGPT, Grok, Gemini...) face à une implémentation 100% étudiante.",
      duration: 'Projet BUT3',
      team: '7 étudiants',
      objectives: [
        'Évaluer les capacités des LLM sur de l\'algorithmique complexe',
        'Comparer les complexités algorithmiques (Big O)'
      ],
      tasks: [
        'Génération de code via différents modèles',
        'Mesure des performances temporelles',
        'Analyse de la qualité du code et des erreurs'
      ],
      deliverables: ['Tableau de benchmark complet', 'Implémentations fonctionnelles'],
      technologies: ['Python', 'LLMs', 'Tkinter'],
      pdfPage: 6
    },
    {
      id: 6,
      title: 'Application mobile de recommandation de voyage',
      type: 'Universitaire',
      description: "Création d'une application Flutter fonctionnelle hors ligne (mode avion). Utilisation de scripts Python et de LLM pour collecter et nettoyer des bases de données de voyages, activités et vols.",
      duration: 'Projet BUT',
      team: '7 étudiants',
      objectives: [
        'Permettre la recommandation de voyages sans connexion internet',
        'Intégrer de la sérendipité dans les choix'
      ],
      tasks: [
        'Scraping et appels API pour la base SQLite',
        'Développement frontend Flutter',
        'Algorithme de similarité cosinus pour les recommandations'
      ],
      deliverables: ['Application mobile Flutter', 'Base SQLite optimisée (<0.3s)'],
      technologies: ['Flutter', 'SQLite', 'Python', 'Kaggle'],
      pdfPage: 8
    },
    {
      id: 7,
      title: 'Enquête sur les alumni',
      type: 'Universitaire',
      description: "Enquête menée à la demande du HCÉRES sur les poursuites d’études et l'insertion professionnelle des diplômés de l’IUT de Villetaneuse pour aider la direction.",
      duration: '3 semaines',
      team: '4 étudiants',
      objectives: [
        'Interview des chefs de départements',
        'Création d\'un questionnaire',
        'Analyse des données récoltées'
      ],
      tasks: [
        'Conception de l\'enquête',
        'Collecte et traitement des retours',
        'Rédaction du rapport analytique'
      ],
      deliverables: ['Questionnaire', 'Rapport d\'interview final'],
      technologies: ['Word', 'Excel'],
      demoUrl: '/Portfolio/CR.pdf'
    },
    {
      id: 8,
      title: 'Visualiseur audio intelligent Analify',
      type: 'Perso',
      description: "Projet développé lors de la Nuit de l'info 2026. Création d'un visualiseur audio open source capable d'analyser le son ambiant du micro ou d'un MP3. L'interface a été conçue à l'aide de l'IA générative.",
      duration: '1 nuit',
      team: '3 étudiants',
      objectives: [
        'Développer un outil open source fun et interactif',
        'Intégrer une analyse audio en temps réel'
      ],
      tasks: [
        'Intégration d\'une librairie d\'analyse audio',
        'Génération de l\'UI via IA',
        'Connexion au flux micro et upload MP3'
      ],
      deliverables: ['Application Analify fonctionnelle'],
      technologies: ['IA Générative', 'Analyse Audio', 'Web'],
      pdfPage: 9
    },
    {
      id: 9,
      title: 'Nuit de l\'info 2024',
      type: 'Perso',
      description: "Chef d'équipe d'un groupe de 14 étudiants pour répondre à la thématique 'Le corps et l'océan' en une nuit. Une excellente expérience de gestion d'équipe et de communication dans l'urgence.",
      duration: '16h',
      team: '14 étudiants',
      objectives: [
        'Développer une application informatique en une nuit',
        'Organiser le travail de 14 personnes'
      ],
      tasks: [
        'Analyse du sujet et brainstorming',
        'Planification et répartition des tâches',
        'Développement frontend'
      ],
      deliverables: ['Site web conceptuel', 'Défis annexes réalisés'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
      githubUrl: 'https://github.com/Lucas-MARIE/cookie-cauchemar',
      demoUrl: 'https://www.nuitdelinfo.com'
    },
    {
      id: 10,
      title: 'Prominder - Outil d\'EPS',
      type: 'Perso',
      description: "Outil d'aide à l'observation de matchs de badminton pour les professeurs d'EPS. Création de profils dynamiques d'élèves basés sur leurs coups (smash, dégagé...) et génération de conseils tactiques.",
      duration: '8 semaines',
      team: '2 étudiants',
      objectives: [
        'Gamification de l\'observation des matchs',
        'Fournir des ressources pédagogiques interactives'
      ],
      tasks: [
        'Conception de l\'application sous Excel',
        'Programmation VBA des profils',
        'Tests en conditions réelles'
      ],
      deliverables: ['Application Excel sécurisée', 'Documentation spécialisée'],
      technologies: ['Excel', 'VBA'],
      githubUrl: 'https://github.com/Lucas-MARIE/Prominder-badminton-EPS-TICE'
    }
  ];

  const filteredProjets = activeFilter === 'all' 
    ? projets 
    : projets.filter(projet => projet.type === activeFilter);

  return (
    <ProjetsContainer>
      <PageTitle>Mes Projets</PageTitle>

      {/* SECTION DASHBOARD */}
      <DashboardContainer>
        <DashboardTable>
          <thead>
            <tr>
              <th>Projet</th>
              <th>Type</th>
              <th>Technologies</th>
              <th>Durée</th>
              <th>Aperçu rapide</th>
            </tr>
          </thead>
          <tbody>
            {projets.map(projet => (
              <tr key={`dash-${projet.id}`}>
                <td><strong>{projet.title}</strong></td>
                <td><TypeBadge $type={projet.type}>{projet.type}</TypeBadge></td>
                <td>{projet.technologies.slice(0, 3).join(', ')}{projet.technologies.length > 3 ? '...' : ''}</td>
                <td>{projet.duration}</td>
                <td>
                  {projet.pdfPage && (
                    <a href={`${pdfBaseUrl}#page=${projet.pdfPage}`} target="_blank" rel="noreferrer">
                      PDF (p.{projet.pdfPage})
                    </a>
                  )}
                  {projet.pdfPage && projet.videoUrl && ' | '}
                  {projet.videoUrl && (
                    <a href={projet.videoUrl} target="_blank" rel="noreferrer">Vidéo</a>
                  )}
                  {!projet.pdfPage && !projet.videoUrl && '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </DashboardTable>
      </DashboardContainer>

      {/* SECTION FILTRES */}
      <FilterSection>
        <FilterButton 
          $active={activeFilter === 'all'} 
          onClick={() => setActiveFilter('all')}
        >
          Tous les projets
        </FilterButton>
        <FilterButton 
          $active={activeFilter === 'Pro'} 
          onClick={() => setActiveFilter('Pro')}
        >
          Professionnels (L'Oréal)
        </FilterButton>
        <FilterButton 
          $active={activeFilter === 'Universitaire'} 
          onClick={() => setActiveFilter('Universitaire')}
        >
          Universitaires
        </FilterButton>
        <FilterButton 
          $active={activeFilter === 'Perso'} 
          onClick={() => setActiveFilter('Perso')}
        >
          Personnels & Hackathons
        </FilterButton>
      </FilterSection>

      {/* SECTION GRILLE DES CARTES */}
      <ProjetsGrid>
        {filteredProjets.map(projet => (
          <ProjetCard key={projet.id}>
            <ProjetHeader>
              <TypeBadge $type={projet.type} style={{ position: 'absolute', top: '15px', right: '15px' }}>
                {projet.type}
              </TypeBadge>
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

              <TechnologiesSection>
                <h4>Technologies utilisées</h4>
                <TechnologiesList>
                  {projet.technologies.map((tech, index) => (
                    <TechnologyTag key={index}>{tech}</TechnologyTag>
                  ))}
                </TechnologiesList>
              </TechnologiesSection>

              <ProjetActions>
                {projet.pdfPage && (
                  <ActionButton href={`${pdfBaseUrl}#page=${projet.pdfPage}`} target="_blank" className="primary">
                    Détails PDF
                  </ActionButton>
                )}
                {projet.videoUrl && (
                  <ActionButton href={projet.videoUrl} target="_blank" className="primary">
                    Voir la Démo
                  </ActionButton>
                )}
                {projet.githubUrl && (
                  <ActionButton href={projet.githubUrl} target="_blank">
                    Code Source
                  </ActionButton>
                )}
                {projet.demoUrl && !projet.videoUrl && (
                  <ActionButton href={projet.demoUrl} target="_blank">
                    Lien / Démo
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