import React, { useState, useEffect } from "react";
import avatar from '../images/avatar_natu.webp';

export function Header({ toggleTheme, theme, language, toggleLanguage }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Ferme le menu lorsque l'utilisateur redimensionne la fenêtre au-delà de 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    return (
        <header>
            <div className="titleAndAvatar">
                <img src={avatar} alt='Avatar' className='pictHeader' />
                <h1>{language === 'fr' ? 'Alizée Dereppe' : 'Alizée Dereppe'} <span>{language === 'fr' ? 'Développeuse web' : 'Web Developer'}</span></h1>
            </div>
            <div className={`nav-and-controls ${isMenuOpen ? 'open' : ''}`}>
                <ul className="nav">
                    <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{language === 'fr' ? 'Accueil' : 'Home'}</button></li>
                    <li><button onClick={() => scrollToSection('ancre-profil')}>{language === 'fr' ? 'Profil' : 'Profile'}</button></li>
                    <li><button onClick={() => scrollToSection('ancre-competences')}>{language === 'fr' ? 'Compétences' : 'Skills'}</button></li>
                    <li><button onClick={() => scrollToSection('ancre-projets')}>{language === 'fr' ? 'Projets' : 'Projects'}</button></li>
                    <li><button className="contact-button" onClick={() => scrollToSection('ancre-contact')}>{language === 'fr' ? 'Contact' : 'Contact'}</button></li>
                </ul>
                <div className="controls">
                    <button className="languageButton" onClick={toggleLanguage}>{language === 'fr' ? 'EN' : 'FR'}</button>
                    <button onClick={toggleTheme} className="theme-toggle-button">
                        {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                    </button>
                </div>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
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
