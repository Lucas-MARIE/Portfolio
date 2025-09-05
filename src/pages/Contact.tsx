import React from 'react';
import styled from 'styled-components';
import { getProfile } from '../utils/dataLoader';

const ContactContainer = styled.div`
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const InfoSection = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  h3 {
    color: #2c3e50;
    margin-bottom: 0.3rem;
    font-size: 1rem;
  }

  p {
    color: #7f8c8d;
    margin: 0;
  }

  a {
    color: #3498db;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
  }
`;

const CVSection = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  margin-top: 2rem;
`;

const CVButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(39, 174, 96, 0.3);
  }
`;


const Contact: React.FC = () => {
  const profile = getProfile();

  return (
    <ContactContainer>
      <PageTitle>Contact & CV</PageTitle>
      
      <ContentGrid>
        <InfoSection>
          <SectionTitle>Informations de Contact</SectionTitle>
          
          <ContactInfo>
            <InfoItem>
              <InfoIcon>✉</InfoIcon>
              <InfoContent>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </p>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>📱</InfoIcon>
              <InfoContent>
                <h3>Téléphone</h3>
                <p>
                  <a href={`tel:${profile.phone}`}>
                    {profile.phone}
                  </a>
                </p>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoContent>
                <h3>Localisation</h3>
                <p>{profile.location}</p>
                <p className="sub-info">Disponible pour déplacements</p>
              </InfoContent>
            </InfoItem>

            <InfoItem>
              <InfoIcon>🎓</InfoIcon>
              <InfoContent>
                <h3>Statut</h3>
                <p>{profile.title}</p>
                <p className="sub-info">En recherche de stage/alternance</p>
              </InfoContent>
            </InfoItem>
          </ContactInfo>

          <SectionTitle>Réseaux Professionnels</SectionTitle>
          <SocialLinks>
            <SocialLink href={profile.github} target="_blank" aria-label="GitHub">
              G
            </SocialLink>
            <SocialLink href={profile.linkedin} target="_blank" aria-label="LinkedIn">
              L
            </SocialLink>
            <SocialLink href={`mailto:${profile.email}`} aria-label="Email">
              @
            </SocialLink>
          </SocialLinks>

          <CVSection>
            <h3 style={{ marginBottom: '1rem', color: '#2c3e50' }}>Mon CV</h3>
            <p style={{ marginBottom: '1.5rem', color: '#7f8c8d' }}>
              Téléchargez mon CV au format PDF pour plus de détails sur mon parcours.
            </p>
            <CVButton href="/Portfolio/CV_Lucas_MARIE_info_alt" download="CV_Lucas_MARIE.pdf">
              📄 Télécharger mon CV
            </CVButton>
          </CVSection>
        </InfoSection>
      </ContentGrid>
    </ContactContainer>
  );
};

export default Contact;