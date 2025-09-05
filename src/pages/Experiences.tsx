import React from 'react';
import styled from 'styled-components';
import { Experience } from '../utils/types';

// Import background images
import lorealBg from '../assets/loreal.jpg';
import musicBg from '../assets/gam.jpg';
import epsBg from '../assets/EN.jpg';

const ExperiencesContainer = styled.div`
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

const ExperiencesGrid = styled.div`
  display: grid;
  gap: 3rem;
`;

const ExperienceCard = styled.div`
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

const ExperienceHeader = styled.div<{ $backgroundImage?: string }>`
  background: ${props => props.$backgroundImage 
    ? `linear-gradient(rgba(52, 152, 219, 0.8), rgba(41, 128, 185, 0.8)), url(${props.$backgroundImage})`
    : 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)'
  };
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
  color: white;
  padding: 2rem;
  position: relative;
`;

const ExperienceTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
  margin-bottom: 0.5rem;
`;

const ExperiencePeriod = styled.p`
  opacity: 0.8;
  font-size: 0.9rem;
`;

const ExperienceContent = styled.div`
  padding: 2rem;
`;

const ExperienceDescription = styled.div`
  margin-bottom: 2rem;

  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p {
    color: #555;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: #555;
      margin-bottom: 0.5rem;
      position: relative;
      padding-left: 1.5rem;

      &::before {
        content: '→';
        color: #3498db;
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
`;

const CompetencesSection = styled.div`
  margin-bottom: 2rem;

  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const CompetencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`;

const CompetenceItem = styled.div`
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;

  h5 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
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
  margin-bottom: 2rem;

  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
`;

const EvaluationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const EvaluationItem = styled.div`
  h5 {
    color: #27ae60;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;

    &.improvement {
      color: #e67e22;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: #555;
      font-size: 0.85rem;
      margin-bottom: 0.3rem;
      position: relative;
      padding-left: 1rem;

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
  h4 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.1rem;
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
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Experiences: React.FC = () => {
  const backgroundImages = [lorealBg, musicBg, epsBg];

const experiences = [
    {
      title: 'Développeur Full-Stack stagiaire',
      company: "L'Oréal R&I",
      period: 'Juillet 2025 - Août 2025',
      description: {
        missions: [
          'Développement d\'une application web de génération de composant React grace à la GenAI',
          'Optimiser le process interne de création de composants UI',
          'Permettre une hyper-personnalisation des composants existants en temps réèl',
          'Rédaction et génération de documentation technique'
        ],
        context: 'Stage de fin de 2eme année en BUT Informatique dans le département Recherche et Innovation de L\'Oréal.'
      },
      competences: [
        {
          title: 'Réaliser',
          description: 'Développement d\'interfaces utilisateur et APIs REST'
        },
        {
          title: 'Collaborer',
          description: 'Travail en équipe agile, présentation de projets'
        },
        {
          title: 'Gérer',
          description: 'Gestion de bases de données cosmos et création de documentation technique'
        },
        { title : 'Conduire', description: 'Autonomie dans la gestion des tâches et respect des délais' },
        { title : 'Optimiser', description: 'Amélioration continue du prompt système et des ajout progressif de features innovantes' }
      
      ],
      autoEvaluation: {
        pointsForts: [
          'Apprentissage rapide des nouvelles technologies',
          'Capacité d\'adaptation aux besoins clients',
          'Rigueur dans le développement et les tests'
        ],
        ameliorations: [
          'Gestion du temps sur projets complexes',
          'Communication avec les personnes ressources'
        ]
      },
      technologies: ['React', 'Dotnet Core', 'TypeScript', 'CosmosDB', 'Git', 'SonarQube', 'Semantic search']
    },
    {
      title: 'Musicien professionnel',
      company: 'Groupement Musical Montpellierain',
      period: 'Septembre 2020 - Août 2024',
      description: {
        missions: [
          'Concerts de jazz avec différents groupes',
          'Enseignement de la batterie à des élèves de tous âges',
          'Improvisation et composition musicale',
          'Organisation d\'événements musicaux'
        ],
        context: 'Volonté de dépassé ma pratique réguilière de la batterie et des percussions pour m\'embarquer dans une expérience professionnelle passionnate.'
      },
      competences: [],
      autoEvaluation: {
        pointsForts: [
          'Créativité et sens de l\'écoute',
          'Travail en équipe et adaptation',
          'Gestion du stress en performance'
        ],
        ameliorations: [
          'Démarchage pour obtenir plus de visibilité',
          'Création d\'un réseau professionnel plus large'
        ]
      },
      technologies: []
    },
    {
      title: 'Enseignant d\'EPS stagiaire',
      company: 'Education Nationale',
      period: 'Septembre 2014 - Juin 2020',
      description: {
        missions: [
          'Planification et animation de cours d\'EPS',
          'Évaluation des performances des élèves',
          'Gestion de groupe et sécurité',          
        ],
        context: 'Stages réguliers durant ma formation en STAPS pour devenir professeur d\'EPS.'
      },
      competences: [],
      autoEvaluation: {
        pointsForts: [
          'Pédagogie et didactique',
          'Donner du sens aux activités physiques',
          'Adaptabilité aux différents niveaux pour placer les élèves en réussite'
        ],
        ameliorations: [
          'Utilisation des outils numériques pour l\'enseignement',
          'Gestion administrative'
        ]
      },
      technologies: []
    }
  ];

  return (
    <ExperiencesContainer>
      <PageTitle>Expériences Professionnelles</PageTitle>
      
      <ExperiencesGrid>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index}>
            <ExperienceHeader $backgroundImage={backgroundImages[index]}>
              <ExperienceTitle>{experience.title}</ExperienceTitle>
              <ExperienceCompany>{experience.company}</ExperienceCompany>
              <ExperiencePeriod>{experience.period}</ExperiencePeriod>
            </ExperienceHeader>
            
            <ExperienceContent>
              <ExperienceDescription>
                <h4>Missions réalisées</h4>
                <p>{experience.description.context}</p>
                <ul>
                  {experience.description.missions.map((mission, missionIndex) => (
                    <li key={missionIndex}>{mission}</li>
                  ))}
                </ul>
              </ExperienceDescription>

              {experience.competences && experience.competences.length > 0 && (
              <CompetencesSection>
                <h4>Compétences BUT développées</h4>
                <CompetencesGrid>
                  {experience.competences.map((competence, compIndex) => (
                    <CompetenceItem key={compIndex}>
                      <h5>{competence.title}</h5>
                      <p>{competence.description}</p>
                    </CompetenceItem>
                  ))}
                </CompetencesGrid>
              </CompetencesSection>
            )}

              <AutoEvaluationSection>
                <h4>Auto-évaluation</h4>
                <EvaluationGrid>
                  <EvaluationItem>
                    <h5>Points forts</h5>
                    <ul>
                      {experience.autoEvaluation.pointsForts.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </EvaluationItem>
                  <EvaluationItem>
                    <h5 className="improvement">Axes d'amélioration</h5>
                    <ul>
                      {experience.autoEvaluation.ameliorations.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </EvaluationItem>
                </EvaluationGrid>
              </AutoEvaluationSection>

{experience.technologies && experience.technologies.length > 0 && (
              <TechnologiesSection>
                <h4>Technologies utilisées</h4>
                <TechnologiesList>
                  {experience.technologies.map((tech, techIndex) => (
                    <TechnologyTag key={techIndex}>{tech}</TechnologyTag>
                  ))}
                </TechnologiesList>
              </TechnologiesSection>)}
            </ExperienceContent>
          </ExperienceCard>
        ))}
      </ExperiencesGrid>
    </ExperiencesContainer>
  );
};

export default Experiences;