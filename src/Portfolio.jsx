import React from 'react';
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
import { Contact } from './components/Contact.jsx';
import useToggleTheme from './components/toggleTheme';

const Portfolio = () => {
  const { theme, toggleTheme } = useToggleTheme();

  return (
    <div className="portfolio">
      <ParticlesBackground theme={theme} />
      <div id='ancre-accueil' />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <div id='ancre-profil' />
        <About />
        <div id='ancre-competences' />
        <Skills />
        <div id='ancre-projets' />
        <Projects />
        <div id='ancre-contact' />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
