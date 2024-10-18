import React from "react";
import avatar from '../images/avatar_natu.webp';

export function Header({ toggleTheme, theme, language, toggleLanguage }) {
    return (
        <header>
            <img src={avatar} alt='Avatar' className='pictHeader' />
            <h1>{language === 'fr' ? 'Alizée Dereppe' : 'Alizée Dereppe'} <span>{language === 'fr' ? 'Développeuse web' : 'Web Developer'}</span></h1>
            <ul className='nav'>
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'fr' ? 'Accueil' : 'Home'}</button></li>
                <li><button onClick={() => scrollToSection('ancre-profil')}>{language === 'fr' ? 'Profil' : 'Profile'}</button></li>
                <li><button onClick={() => scrollToSection('ancre-competences')}>{language === 'fr' ? 'Compétences' : 'Skills'}</button></li>
                <li><button onClick={() => scrollToSection('ancre-projets')}>{language === 'fr' ? 'Projets' : 'Projects'}</button></li>
                <li><button onClick={() => scrollToSection('ancre-contact')}>{language === 'fr' ? 'Contact' : 'Contact'}</button></li>
                <li><button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button></li>
                <li><button onClick={toggleLanguage}>{language === 'fr' ? 'EN' : 'FR'}</button></li>
            </ul>
        </header>
    );
}

export function Footer({ language }) {
    return (
        <footer>
            <p>{language === 'fr' ? '© 2024 Mon Portfolio' : '© 2024 My Portfolio'}</p>
        </footer>
    );
}

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};
