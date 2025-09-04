import React from 'react';
import styled from 'styled-components';

const CompetencesContainer = styled.div`
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

const CompetenceCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CompetenceHeader = styled.div<{ $color: string }>`
  background: linear-gradient(135deg, ${props => props.$color} 0%, ${props => props.$color}CC 100%);
  color: white;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transform: translate(30px, -30px);
  }
`;

const CompetenceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const CompetenceSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0;
`;

const CompetenceContent = styled.div`
  padding: 2rem;
`;

const NiveauSection = styled.div`
  margin-bottom: 2rem;
`;

const NiveauHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h3 {
    color: #2c3e50;
    margin: 0;
    font-size: 1.2rem;
  }
`;

const NiveauIndicateur = styled.div<{ $level: number; $color: string }>`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProgressBar = styled.div<{ $level: number; $color: string }>`
  width: 200px;
  height: 12px;
  background: #ecf0f1;
  border-radius: 6px;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.$level}%;
    background: linear-gradient(90deg, ${props => props.$color}, ${props => props.$color}CC);
    transition: width 0.8s ease;
    border-radius: 6px;
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const NiveauTexte = styled.span<{ $color: string }>`
  color: ${props => props.$color};
  font-weight: bold;
  font-size: 1rem;
`;

const OutilsSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const OutilsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const OutilCategorie = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;

  h4 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #555;
      font-size: 0.9rem;
      margin-bottom: 0.3rem;
      position: relative;
      padding-left: 1rem;

      &::before {
        content: '✓';
        color: #27ae60;
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
`;

const ExperiencesSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
`;

const ExperiencesList = styled.div`
  display: grid;
  gap: 1rem;
`;

const ExperienceItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;

  h4 {
    color: #2c3e50;
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
  }

  p {
    color: #7f8c8d;
    font-size: 0.85rem;
    margin: 0;
  }
`;

const AutoEvaluationSection = styled.div`
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;

  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin: 0;
    font-style: italic;
  }
`;

interface CompetenceData {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  niveau: number;
  outils: {
    categorie: string;
    items: string[];
  }[];
  experiences: {
    title: string;
    description: string;
  }[];
  autoEvaluation: string;
}

const Competences: React.FC = () => {
  const competences: CompetenceData[] = [
    {
      id: 'realiser',
      title: 'Réaliser',
      subtitle: 'Développement d\'applications informatiques',
      color: '#3498db',
      niveau: 88,
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript/TypeScript', 'Python', 'Java', 'C++', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js', 'Express', 'Laravel']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
        {
          title: 'Application de Gestion de Bibliothèque',
          description: 'Développement full-stack avec React et Node.js'
        },
        {
          title: 'Plateforme E-learning',
          description: 'Création d\'interfaces utilisateur complexes en Vue.js'
        },
        {
          title: 'Application Mobile de Tâches',
          description: 'Développement cross-platform avec React Native'
        }
      ],
      autoEvaluation: 'Je maîtrise bien les technologies web modernes et suis capable de développer des applications complètes. Mon expérience en alternance m\'a permis d\'approfondir mes compétences en développement full-stack et d\'apprendre les bonnes pratiques industrielles.'
    },
    {
      id: 'optimiser',
      title: 'Optimiser',
      subtitle: 'Performance et qualité des solutions informatiques',
      color: '#e74c3c',
      niveau: 90,
      outils: [
        {
          categorie: 'Tests et qualité',
          items: ['Jest', 'Cypress', 'SonarQube', 'ESLint', 'Prettier']
        },
        {
          categorie: 'Performance',
          items: ['Lighthouse', 'WebPageTest', 'Chrome DevTools', 'New Relic']
        },
        {
          categorie: 'Optimisation base de données',
          items: ['EXPLAIN ANALYZE', 'Indexation', 'Requêtes optimisées', 'Caching']
        }
      ],
      experiences: [
        {
          title: 'Optimisation Application Bibliothèque',
          description: 'Amélioration des performances de 40% via optimisation des requêtes'
        },
        {
          title: 'Tests automatisés E-learning',
          description: 'Mise en place d\'une suite de tests couvrant 85% du code'
        }
      ],
      autoEvaluation: 'J\'ai acquis une bonne compréhension des enjeux de performance et de qualité. Je sais utiliser les outils de profiling et mettre en place des tests automatisés, mais je souhaite approfondir mes connaissances en optimisation système.'
    },
    {
      id: 'administrer',
      title: 'Administrer',
      subtitle: 'Systèmes informatiques et réseaux',
      color: '#f39c12',
      niveau: 84,
      outils: [
        {
          categorie: 'Systèmes d\'exploitation',
          items: ['Linux (Ubuntu/CentOS)', 'Windows Server', 'PowerShell', 'Bash']
        },
        {
          categorie: 'Virtualisation et conteneurs',
          items: ['Docker', 'VMware', 'VirtualBox', 'Docker Compose']
        },
        {
          categorie: 'Réseaux et sécurité',
          items: ['TCP/IP', 'DNS', 'DHCP', 'Firewall', 'VPN']
        }
      ],
      experiences: [
        {
          title: 'Support Technique PME',
          description: 'Administration d\'un parc de 50+ postes sous Windows'
        },
        {
          title: 'Système de Monitoring',
          description: 'Déploiement d\'outils de surveillance réseau avec Docker'
        }
      ],
      autoEvaluation: 'Mes compétences en administration système se sont développées principalement lors de mon stage. Je maîtrise les bases mais souhaite approfondir les aspects sécurité et administration de serveurs de production.'
    },
    {
      id: 'gerer',
      title: 'Gérer',
      subtitle: 'Données et informations',
      color: '#27ae60',
      niveau: 85,
      outils: [
        {
          categorie: 'Bases de données',
          items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Redis']
        },
        {
          categorie: 'Outils d\'analyse',
          items: ['Python Pandas', 'Matplotlib', 'Power BI', 'Excel avancé']
        },
        {
          categorie: 'API et intégration',
          items: ['REST API', 'GraphQL', 'JSON/XML', 'ETL processes']
        }
      ],
      experiences: [
        {
          title: 'Base de données Bibliothèque',
          description: 'Conception et optimisation d\'une base de données relationnelle'
        },
        {
          title: 'Analyse de données Lab',
          description: 'Traitement et visualisation de données expérimentales'
        }
      ],
      autoEvaluation: 'J\'ai une bonne maîtrise des bases de données relationnelles et des outils d\'analyse de données. Mon expérience avec différents SGBD me permet de choisir la solution adaptée selon le contexte.'
    },
    {
      id: 'conduire',
      title: 'Conduire',
      subtitle: 'Projets informatiques',
      color: '#9b59b6',
      niveau: 86,
      outils: [
        {
          categorie: 'Méthodologies',
          items: ['Agile/Scrum', 'Kanban', 'Cycle en V', 'DevOps']
        },
        {
          categorie: 'Gestion de projet',
          items: ['Jira', 'Trello', 'GitHub Projects', 'Gantt', 'Planning Poker']
        },
        {
          categorie: 'Documentation',
          items: ['UML', 'Markdown', 'Confluence', 'GitBook', 'Figma']
        }
      ],
      experiences: [
        {
          title: 'Chef de projet Application Mobile',
          description: 'Coordination d\'une équipe de 5 développeurs sur 10 semaines'
        },
        {
          title: 'Planning projet E-learning',
          description: 'Gestion des sprints et coordination avec les parties prenantes'
        }
      ],
      autoEvaluation: 'J\'ai pris goût à la gestion de projet lors des SAÉ. Je sais organiser le travail d\'équipe et respecter les délais, mais je souhaite développer mes compétences en gestion des risques et communication client.'
    },
    {
      id: 'collaborer',
      title: 'Collaborer',
      subtitle: 'Travail en équipe et communication professionnelle',
      color: '#e67e22',
      niveau: 83,
      outils: [
        {
          categorie: 'Communication',
          items: ['Klaxoon', 'Teams', 'Discord', 'agile']
        },
        {
          categorie: 'Collaboration code',
          items: ['Git/GitHub', 'GitLab']
        },
        {
          categorie: 'Présentation',
          items: ['PowerPoint', 'Canva', 'Prezi', 'Figma']
        }
      ],
      experiences: [
        {
          title: 'Équipes projets SAÉ',
          description: 'Collaboration efficace dans toutes les équipes de 3-4 personnes'
        },
        {
          title: "Partage de l'information",
          description: 'Communication technique adaptée aux non-informaticiens'
        },
        {
          title: 'Présentations et soutenances',
          description: 'Présentation de solutions techniques devant un jury'
        }
      ],
      autoEvaluation: 'La collaboration est mon point fort. J\'aime travailler en équipe, partager mes connaissances et apprendre des autres. Ma capacité à vulgariser les concepts techniques me permet de bien communiquer avec tous les profils.'
    }
  ];

  return (
    <CompetencesContainer>
      <PageTitle>Compétences BUT Informatique</PageTitle>
      
      {competences.map((competence) => (
        <CompetenceCard key={competence.id}>
          <CompetenceHeader $color={competence.color}>
            <CompetenceTitle>{competence.title}</CompetenceTitle>
            <CompetenceSubtitle>{competence.subtitle}</CompetenceSubtitle>
          </CompetenceHeader>
          
          <CompetenceContent>
            <NiveauSection>
              <NiveauHeader>
                <h3>Niveau d'acquisition</h3>
                <NiveauIndicateur $level={competence.niveau} $color={competence.color}>
                  <ProgressBar $level={competence.niveau} $color={competence.color} />
                  <NiveauTexte $color={competence.color}>{competence.niveau}%</NiveauTexte>
                </NiveauIndicateur>
              </NiveauHeader>
            </NiveauSection>

            <OutilsSection>
              <h3>Outils et technologies maîtrisés</h3>
              <OutilsGrid>
                {competence.outils.map((categorie, index) => (
                  <OutilCategorie key={index}>
                    <h4>{categorie.categorie}</h4>
                    <ul>
                      {categorie.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </OutilCategorie>
                ))}
              </OutilsGrid>
            </OutilsSection>

            <ExperiencesSection>
              <h3>Expériences et projets associés</h3>
              <ExperiencesList>
                {competence.experiences.map((experience, index) => (
                  <ExperienceItem key={index}>
                    <h4>{experience.title}</h4>
                    <p>{experience.description}</p>
                  </ExperienceItem>
                ))}
              </ExperiencesList>
            </ExperiencesSection>

            <AutoEvaluationSection>
              <h3>Auto-évaluation</h3>
              <p>{competence.autoEvaluation}</p>
            </AutoEvaluationSection>
          </CompetenceContent>
        </CompetenceCard>
      ))}
    </CompetencesContainer>
  );
};

export default Competences;