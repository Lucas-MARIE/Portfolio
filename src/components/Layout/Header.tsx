import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  
  &:hover {
    color: #f8f9fa;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  color: ${props => props.$active ? '#ffd700' : 'white'};
  text-decoration: none;
  font-weight: ${props => props.$active ? 600 : 400};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffd700;
  }

  ${props => props.$active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 2px;
      background: #ffd700;
    }
  `}

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.3rem 0.8rem;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Accueil' },
    { path: '/formation', label: 'Formation' },
    { path: '/experiences', label: 'Expériences' },
    { path: '/projets', label: 'Projets' },
    { path: '/competences', label: 'Compétences' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">Portfolio BUT</Logo>
        <Nav>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;