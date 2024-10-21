import React, { useState } from 'react';
import './styles/Particles.scss';
import './styles/skills.scss';
import './styles/projects.scss';
import './styles/Layout.scss';
import './styles/about.scss';
import './styles/portfolio.scss';
import './styles/general.scss';
import { About } from './components/About.jsx';
import ParticlesBackground from './components/particles/Particles-background.jsx';
import { Header, Footer } from './components/Layout.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Introduction } from './components/Introduction.jsx';
import ContactForm from './components/ContactForm.jsx';
import useToggleTheme from './components/toggleTheme';

const Portfolio = () => {
  const { theme, toggleTheme } = useToggleTheme();
  const [language, setLanguage] = useState('fr');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'fr' ? 'en' : 'fr'));
  };

  return (
    <div className="portfolio">
      <ParticlesBackground theme={theme} />
      <div id='ancre-accueil' />
      <Header theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
      <main>
        <Introduction langugage={language} />
        <div id='ancre-profil' />
        <About language={language} />
        <div id='ancre-competences' />
        <Skills language={language} />
        <div id='ancre-projets' />
        <Projects language={language} />
        <div id='ancre-contact' />
        <ContactForm language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default Portfolio;
