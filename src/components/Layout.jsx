import React, { useState, useEffect } from "react";
import { LegalNotice } from "./LegalNotice";
import { PrivacyDataProtection } from "./PrivacyDataProtection";
import avatar from '../images/avatar_natu.webp';
import '../styles/Layout.scss';

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
            <div className="titleAndAvatar" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src={avatar} alt='Avatar' className='pictHeader' />
                <h1>{language === 'fr' ? 'Alizée Dereppe' : 'Alizée Dereppe'} <span>{language === 'fr' ? 'Développeuse web' : 'Web Developer'}</span></h1>
            </div>
            <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <li><button onClick={() => scrollToSection('profil-anchor')}>{language === 'fr' ? 'Profil' : 'Profile'}</button></li>
                <li><button onClick={() => scrollToSection('skills-anchor')}>{language === 'fr' ? 'Compétences' : 'Skills'}</button></li>
                <li><button onClick={() => scrollToSection('projects-anchor')}>{language === 'fr' ? 'Projets' : 'Projects'}</button></li>
                <li><button className="contact-button" onClick={() => scrollToSection('contact-anchor')}>{language === 'fr' ? 'Contact' : 'Contact'}</button></li>
                <li><button className="languageButton" onClick={toggleLanguage}>{language === 'fr' ? 'EN' : 'FR'}</button></li>
                <li><button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button></li>
            </ul>
            <button className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
        </header>
    );
}


export function Footer({ language }) {
    // États pour contrôler l'affichage des modales
    const [showLegalNotice, setShowLegalNotice] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    return (
        <footer>
            <p>{language === 'fr' ? '© 2024 Mon Portfolio' : '© 2024 My Portfolio'}</p>
            <nav>
                <button onClick={() => setShowLegalNotice(true)}>
                    {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
                </button>
                <button onClick={() => setShowPrivacyPolicy(true)}>
                    {language === 'fr' ? 'Protection des Données' : 'Data Protection'}
                </button>
            </nav>

            {/* Modale pour les mentions légales */}
            {showLegalNotice && (
                <div className="modal-overlay" onClick={() => setShowLegalNotice(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setShowLegalNotice(false)}>X</button>
                        <LegalNotice language={language} />
                    </div>
                </div>
            )}

            {/* Modale pour la protection des données */}
            {showPrivacyPolicy && (
                <div className="modal-overlay" onClick={() => setShowPrivacyPolicy(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setShowPrivacyPolicy(false)}>X</button>
                        <PrivacyDataProtection language={language} />
                    </div>
                </div>
            )}
        </footer>
    );
}

const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const offset = -120; 
        const y = element.getBoundingClientRect().top + window.scrollY + offset;

        window.scrollTo({
            top: y,
            behavior: 'smooth'
        });
    }
};
