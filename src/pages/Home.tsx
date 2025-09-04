import React from 'react';
import styled from 'styled-components';
import { getProfile, getStats, getCompetences } from '../utils/dataLoader';
import profileImage from '../assets/profil.jpg';
import backgroundImage from '../assets/iut/ia.jpg';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-bottom: 3rem;
  color: white;
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: #3498db;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-weight: 500;
`;

const CompetencesSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #2c3e50;
`;

const CompetencesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const CompetenceCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const CompetenceTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.5rem;
`;

const CompetenceDescription = styled.p`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const CompetenceLevel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProgressBar = styled.div<{ level: number }>`
  flex: 1;
  height: 8px;
  background: #ecf0f1;
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.level}%;
    background: linear-gradient(90deg, #3498db, #2980b9);
    transition: width 0.3s ease;
  }
`;

const LevelText = styled.span`
  color: #3498db;
  font-weight: 500;
  font-size: 0.9rem;
`;

const Home: React.FC = () => {
  const profile = getProfile();
  const stats = getStats();
  const competences = getCompetences();

  return (
    <HomeContainer>
      <HeroSection>
        <ProfileImage>
          <img src={profileImage} alt={profile.name} />
        </ProfileImage>
        <HeroTitle>{profile.name}</HeroTitle>
        <HeroSubtitle>
          {profile.description}
        </HeroSubtitle>
      </HeroSection>

      <StatsSection>
        <StatCard>
          <StatNumber>{stats.projects}</StatNumber>
          <StatLabel>Projets réalisés</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.experiences}</StatNumber>
          <StatLabel>Expériences professionnelles</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.technologies}</StatNumber>
          <StatLabel>Technologies maîtrisées</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{stats.studyYears}</StatNumber>
          <StatLabel>Années d'études</StatLabel>
        </StatCard>
      </StatsSection>

      <CompetencesSection>
        <SectionTitle>Compétences BUT Informatique</SectionTitle>
        <CompetencesGrid>
          {competences.map((competence, index) => (
            <CompetenceCard key={index}>
              <CompetenceTitle>{competence.name}</CompetenceTitle>
              <CompetenceDescription>{competence.description}</CompetenceDescription>
              <CompetenceLevel>
                <ProgressBar level={competence.level} />
                <LevelText>{competence.level}%</LevelText>
              </CompetenceLevel>
            </CompetenceCard>
          ))}
        </CompetencesGrid>
      </CompetencesSection>
    </HomeContainer>
  );
};

export default Home;