import React, { useState } from 'react';

/* CSS styles generals */
import './styles/general.scss';
import './styles/portfolio.scss';
import './styles/Particles.scss';

/* Components for react app */
import { About } from './components/About.jsx';
import ParticlesBackground from './components/particles/Particles-background.jsx';
import { Header, Footer } from './components/Layout.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Introduction } from './components/Introduction.jsx';
import { PDFViewer } from './components/PDFViewer.jsx';
import ContactForm from './components/ContactForm.jsx';
import useToggleTheme from './components/toggleTheme';

const Portfolio = () => {
  /* Theme and language controls */
  const { theme, toggleTheme } = useToggleTheme();
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    /* French language in default */
    setLanguage((prevLanguage) => (prevLanguage === 'fr' ? 'en' : 'fr'));
  };

  return (
    <div className="portfolio">
      <ParticlesBackground theme={theme} />
      <div id='home-anchor' />
      <Header theme={theme} toggleTheme={toggleTheme}
        language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Introduction language={language} />
        <div id='profil-anchor' />
        <About language={language} />
        <div id='skills-anchor' />
        <Skills language={language} />
        <div id='projects-anchor' />
        <Projects language={language} />
        <div id='contact-anchor' />
        <PDFViewer language={language} />
        <ContactForm language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Portfolio;
