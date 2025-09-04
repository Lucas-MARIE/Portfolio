import React from 'react';
import styled from 'styled-components';
import { getFormations, getJustificationBUT } from '../utils/dataLoader';

const FormationContainer = styled.div`
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

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #3498db 0%, #2980b9 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::before {
      left: 20px;
    }
  }
`;

const TimelineItem = styled.div<{ $isLeft?: boolean }>`
  position: relative;
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: ${props => props.$isLeft ? 'flex-end' : 'flex-start'};

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-left: 40px;
  }
`;

const TimelineContent = styled.div<{ $isLeft?: boolean }>`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 45%;
  margin: ${props => props.$isLeft ? '0 2rem 0 0' : '0 0 0 2rem'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border: 10px solid transparent;
    ${props => props.$isLeft 
      ? `
        right: -20px;
        border-left-color: white;
      ` 
      : `
        left: -20px;
        border-right-color: white;
      `
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;

    &::before {
      left: -20px;
      border-right-color: white;
      border-left-color: transparent;
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background: #3498db;
  border: 4px solid white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const TimelineYear = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -30px;
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    left: 20px;
    transform: none;
  }
`;

const FormationTitle = styled.h3`
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const FormationSchool = styled.h4`
  color: #3498db;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const FormationLogo = styled.img`
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const FormationDescription = styled.p`
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FormationDetails = styled.ul`
  list-style: none;
  padding: 0;

  li {
    color: #555;
    margin-bottom: 0.5rem;
    position: relative;
    padding-left: 1rem;

    &::before {
      content: '•';
      color: #3498db;
      position: absolute;
      left: 0;
    }
  }
`;

const JustificationSection = styled.section`
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
`;

const JustificationTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
`;

const JustificationText = styled.p`
  color: #555;
  line-height: 1.8;
  font-size: 1.1rem;
  text-align: justify;
  max-width: 800px;
  margin: 0 auto;
`;

const Formation: React.FC = () => {
  const formations = getFormations();
  const justification = getJustificationBUT();

  return (
    <FormationContainer>
      <PageTitle>Parcours de Formation</PageTitle>
      
      <Timeline>
        {formations.map((formation, index) => (
          <TimelineItem key={index} $isLeft={formation.position === 'left'}>
            <TimelineYear>{formation.year}</TimelineYear>
            <TimelineDot />
            <TimelineContent $isLeft={formation.position === 'left'}>
              <FormationLogo src={formation.logo} alt={`${formation.school} logo`} />
              <FormationTitle>{formation.title}</FormationTitle>
              <FormationSchool>{formation.school}</FormationSchool>
              <FormationDescription>{formation.description}</FormationDescription>
              <FormationDetails>
                {formation.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </FormationDetails>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      <JustificationSection>
        <JustificationTitle>{justification.title}</JustificationTitle>
        {justification.content.map((paragraph, index) => (
          <JustificationText key={index}>
            {paragraph}
          </JustificationText>
        ))}
      </JustificationSection>
    </FormationContainer>
  );
};

export default Formation;