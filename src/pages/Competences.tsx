import React, { useState } from 'react';
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
  margin-bottom: 2rem;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

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

const ToggleIcon = styled.div<{ $collapsed: boolean }>`
  transform: rotate(${props => props.$collapsed ? '0deg' : '180deg'});
  transition: transform 0.3s ease;
  font-size: 1.5rem;
`;

const CompetenceContent = styled.div`
  padding: 2rem;
`;

const TechnologiesList = styled.div<{ $origin?: 'iut' | 'stage' | 'personnel' }>`
  background: ${props => 
    props.$origin === 'iut' ? '#f0f4f8' : 
    props.$origin === 'stage' ? '#e6f2e6' : 
    props.$origin === 'personnel' ? '#fff0e6' : 
    '#f8f9fa'};
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid ${props => 
    props.$origin === 'iut' ? '#3498db' : 
    props.$origin === 'stage' ? '#27ae60' : 
    props.$origin === 'personnel' ? '#e67e22' : 
    '#555'};
  margin-bottom: 1rem;

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
        color: ${props => 
          props.$origin === 'iut' ? '#3498db' : 
          props.$origin === 'stage' ? '#27ae60' : 
          props.$origin === 'personnel' ? '#e67e22' : 
          '#555'};
        position: absolute;
        left: 0;
        font-weight: bold;
      }
    }
  }
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

  // Ensure default fallback color if not provided
  color: ${props => props.$color || '#3498db'};
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
  itemsIUT?: string[];
  itemsStage?: string[];
  itemsPersonnel?: string[];
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
  const [collapsedState, setCollapsedState] = useState<{[key: string]: boolean}>({});

  const toggleCollapse = (id: string) => {
    setCollapsedState(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const competences: CompetenceData[] = [
    {
      id: 'realiser',
      title: 'Réaliser',
      subtitle: 'Développement d\'applications informatiques',
      color: '#3498db',
      niveau: 88,
      itemsIUT: ['JavaScript', 'Java', 'HTML/CSS', 'PHP', 'VS Code', 'Git'],
      itemsStage: ['TypeScript', 'React', 'Dotnet Core', 'esbuild', 'Postman'],
      itemsPersonnel: [],
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript', 'Java', 'HTML/CSS', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
        {
          title: 'Portfolio Personnel',
          description: 'Site web développé avec React et TypeScript'
        },
        {
          title: 'Projets Universitaires',
          description: 'Projets de site web avec base de donnée, et de scapping intelligent avec resumé générés par IA'
        }
      ],
      autoEvaluation: "C'est le genre de compétence qui s'acquiert avec la pratique, et cette année de BUT m'a donné de nombreuses occasions de réaliser des projets concrets. Les enseignants se sont efforcés de nous faire travailler autour de projets réels, ce qui m'a permis d'apprendre à développer une application web basique mais fonctionnelle. Mon stage de deux mois chez L'Oréal m'a donné un aperçu de la manière dont les applications sont développées en entreprise, et j'ai pu approfondir mes connaissances en React, TypeScript et .NET Core. Selon moi, il ne nous a manqué qu'une vision « bout en bout » du développement d'une application, de la conception à la mise en production, pour être pleinement opérationnels dans ce domaine."
    },
    {
      id: 'optimiser',
      title: 'Optimiser',
      subtitle: 'Performance et qualité du code',
      color: '#80e4b2',
      niveau: 90,
      itemsIUT: ['Python', 'Algèbre', 'Cryptographie'],
      itemsStage: ['SOnnarQube', 'MCP Context7', 'Normes REST', 'Principes SOLID'],
      itemsPersonnel: [],
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript', 'Java', 'HTML/CSS', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
        {
          title: 'Revue de litérature automatisée',
          description: 'Utilisation de Python pour le traitement de texte et l\'analyse de données'
        },
        {
          title: 'Sondage sur les anciens élèves',
          description: 'Création d\'un questionnaire et analyse des résultats avec Python, pandas et matplotlib'
        },
      ],
      autoEvaluation: "L'étude des structures de données et de la complexité algorithmique m'a permis de mieux comprendre comment écrire du code efficace et maintenable. J'ai appris à utiliser des outils comme SonarQube pour analyser la qualité de mon code et identifier les points d'amélioration lors de mon stage. Une autre bonne pratique que j'ai mise en place est de lire du code de qualité, et je trouve qu'on aurait pu y être davantage encouragés à l'IUT. Mention spéciale tout de même pour le projet autour du jeu vidéo Balatro, que nous devions reprogrammer, ce qui nous a donné une base de code à étudier."
    },
    {
      id: 'administrer',
      title: 'Administrer',
      subtitle: 'Systèmes et réseaux',
      color: '#dbdd52',
      niveau: 84,
      itemsIUT: ['Bash'],
      itemsStage: ['Kubernetes', 'Docker', 'Azure', 'CI/CD'],
      itemsPersonnel: [],
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript', 'Java', 'HTML/CSS', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
      ],
      autoEvaluation: "La formation étant pluridisciplinaire, nous avons eu l'occasion d'aborder les bases de l'administration des systèmes et réseaux. Cependant, c'est là que le bât blesse, car selon moi c'est la compétence la moins développée dans le cursus. Il m'a manqué une approche plus fondamentale et « bas niveau » des systèmes d'exploitation et des réseaux pour vraiment comprendre comment tout cela fonctionne. J'ai dû faire appel à toute l'aide disponible auprès de mes collègues et de mon tuteur de stage pour combler ces lacunes."
    },
    {
      id: 'gerer',
      title: 'Gérer',
      subtitle: 'Données et informations',
      color: '#eb7e99',
      niveau: 85,
      itemsIUT: ['SQL', 'Statistiques', 'Probabilités', 'R', "Test d'hypothèse"],
      itemsStage: ['CosmosDB', 'CI/CD'],
      itemsPersonnel: [],
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript', 'Java', 'HTML/CSS', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
        {
          title: 'Analyse de données de sondage, et de revue de littérature',
          description: 'Utilisation de R pour analyser et visualiser des résultats, idem avec pandas et matplotlib en Python'
        },
      ],
      autoEvaluation: "La gestion des données, et par conséquent l'analyse de ces données, est une compétence que j'ai particulièrement appréciée développer. Les bases théoriques apportées en probabilité et en algèbre m'ont permis d'atteindre un niveau de maîtrise satisfaisant pour appréhender sereinement le monde de la data science.",
    },
    {
      id: 'conduire',
      title: 'Conduire',
      subtitle: 'Projet informatique',
      color: '#db6334',
      niveau: 86,
      itemsIUT: ['Klaxoon', 'UML', 'git hub'],
      itemsStage: ['Agile', 'CI/CD'],
      itemsPersonnel: ['Eisenhower Matrix'],
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript', 'Java', 'HTML/CSS', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
        {
          title: 'Gestion du temps et des priorités en multiprojet',
          description: 'Répartition du temps entre les projets universitaires, le stage, et les projets personnels'
        },
      ],
      autoEvaluation: "Cette année de reconversion a été intense, mais j'ai pu équilibrer mon rythme d'étude avec mes projets personnels (sport et loisirs). Le stage est arrivé au meilleur moment pour consolider mes apprentissages, et ma conduite de projet a été sollicitée à court terme lors des révisions pour le contrôle continu, à moyen terme pour les projets universitaires, et à plus long terme en ayant l'opportunité d'effectuer un stage qui lie ma 2ᵉ et 3ᵉ année entre elles. Mon point faible étant l'anticipation, j'ai choisi pour cette année « passerelle » de suivre le conseil de mon professeur de maths : « sois à fond tout le temps ! »",
    },

    {
      id: 'collaborer',
      title: 'Collaborer',
      subtitle: 'Travailler en équipe',
      color: '#ac4ee2',
      niveau: 83,
      itemsIUT: ['git hub', 'Klaxoon', 'discord'],
      itemsStage: ['Teams', 'Git lab'],
      itemsPersonnel: [],
      outils: [
        {
          categorie: 'Langages de programmation',
          items: ['JavaScript', 'Java', 'HTML/CSS', 'PHP']
        },
        {
          categorie: 'Frameworks Web',
          items: ['React', 'Vue.js', 'Node.js']
        },
        {
          categorie: 'Outils de développement',
          items: ['Git', 'VS Code', 'Docker', 'Postman', 'Jest']
        }
      ],
      experiences: [
        {
          title: 'Communication professionnelle',
          description: 'Présentation orales en groupe et débat d\'idées en classe'
        },
        {
          title: 'Cours interractif en anglais',
          description: 'Travail en équipe autour de sujet d\'actualité dans le monde du numérique en anglais'
        },
        {
          title: 'Projets de groupe',
          description: 'Plusieurs projets réalisés en équipe de 2 à 4 personnes.'
        },
      ],
      autoEvaluation: "J'ai particulièrement aimé collaborer avec mes camarades, aussi bien pour les projets universitaires que pour la vie de classe au quotidien. S'ajoutant aux nombreux cours pertinents, notamment en communication, je me dois également de mentionner ici que la vie étudiante sur le campus renforce l'envie de s'investir collectivement dans un parcours de formation exigeant. Le BDE et le service des sports sont précieux à l'IUT de Villetaneuse, et c'est donc logiquement que je m'y suis impliqué.",
    },
  ];

  return (
    <CompetencesContainer>
      <PageTitle>Compétences BUT Informatique</PageTitle>
      
      {competences.map((competence) => {
        const isCollapsed = collapsedState[competence.id] ?? true;
        return (
          <CompetenceCard key={competence.id}>
            <CompetenceHeader $color={competence.color || '#3498db'} onClick={() => toggleCollapse(competence.id)}>
              <div>
                <CompetenceTitle>{competence.title}</CompetenceTitle>
                <CompetenceSubtitle>{competence.subtitle}</CompetenceSubtitle>
              </div>
              <ToggleIcon $collapsed={isCollapsed}>
                ▼
              </ToggleIcon>
            </CompetenceHeader>
          
          {!isCollapsed && (
            <CompetenceContent>
              <NiveauSection>
                <NiveauHeader>
                  <h3>Niveau d'acquisition</h3>
                  <NiveauIndicateur $level={competence.niveau} $color={competence.color || '#3498db'}>
                    <ProgressBar $level={competence.niveau} $color={competence.color || '#3498db'} />
                    <NiveauTexte $color={competence.color || '#3498db'}>{competence.niveau}%</NiveauTexte>
                  </NiveauIndicateur>
                </NiveauHeader>
              </NiveauSection>

              <OutilsSection>
                <h3>Outils et technologies maîtrisés</h3>
                <OutilsGrid>
                  {competence.itemsIUT && competence.itemsIUT.length > 0 && (
                    <TechnologiesList $origin="iut">
                      <h4>Technologies IUT</h4>
                      <ul>
                        {competence.itemsIUT.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </TechnologiesList>
                  )}
                  {competence.itemsStage && competence.itemsStage.length > 0 && (
                    <TechnologiesList $origin="stage">
                      <h4>Technologies Stage (L'Oréal)</h4>
                      <ul>
                        {competence.itemsStage.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </TechnologiesList>
                  )}
                  {competence.itemsPersonnel && competence.itemsPersonnel.length > 0 && (
                    <TechnologiesList $origin="personnel">
                      <h4>Technologies Personnelles</h4>
                      <ul>
                        {competence.itemsPersonnel.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </TechnologiesList>
                  )}
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
          )}
        </CompetenceCard>
      )})}
    </CompetencesContainer>
  );
};

export default Competences;