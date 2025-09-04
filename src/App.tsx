import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Formation from './pages/Formation';
import Experiences from './pages/Experiences';
import Projets from './pages/Projets';
import Competences from './pages/Competences';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
