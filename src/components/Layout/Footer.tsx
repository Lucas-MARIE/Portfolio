import React from 'react';
import styled from 'styled-components';
import githubIcon from '../../assets/github.webp';
import linkedinIcon from '../../assets/logo-linkedin-rond.webp';
import mailIcon from '../../assets/mail.webp';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #3498db;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  p, li {
    color: #bdc3c7;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
  }

  a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #5dade2;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #3498db;
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  padding: 8px;

  &:hover {
    background: #2980b9;
    transform: translateY(-2px);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #34495e;
  color: #95a5a6;
  grid-column: 1 / -1;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>À propos</h3>
          <p>
            Étudiant en 3ème année de BUT Informatique, passionné par la science des données, l'inovation et la musique.
          </p>
          <SocialLinks>
            <SocialLink href="https://github.com/Lucas-MARIE" target="_blank" aria-label="GitHub">
              <img src={githubIcon} alt="GitHub" />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/lucas-marie-60bbb3346" target="_blank" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
              
            </SocialLink>
            <SocialLink href="mailto:lucasmariepro1@gmail.com" aria-label="Email">
              <img src={mailIcon} alt="Mail" />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <Copyright>
          <p>&copy; 2026 Portfolio BUT Informatique. Tous droits réservés.</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;