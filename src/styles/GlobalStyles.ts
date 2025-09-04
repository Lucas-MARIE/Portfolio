import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    color: #555;
  }

  a {
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 0.5rem;
    }
  }
`;