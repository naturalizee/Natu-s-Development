import React from "react";
import avatar from '../images/avatar_natu.webp';

export function Header({ toggleTheme, theme }) {
    return (
        <header>
            <img src={avatar} alt='Avatar' className='pictHeader' />
            <h1>Alizée Dereppe <span>Développeuse web</span></h1>
            <ul className='nav'>
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Accueil</button></li>
                <li><button onClick={() => scrollToSection('ancre-profil')}>Profil</button></li>
                <li><button onClick={() => scrollToSection('ancre-competences')}>Compétences</button></li>
                <li><button onClick={() => scrollToSection('ancre-projets')}>Projets</button></li>
                <li><button onClick={() => scrollToSection('ancre-contact')}>Contact</button></li>
                <li><button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'light' ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
                </button></li>
            </ul>
        </header>
    );
}


export function Footer() {
    return (
        <footer>
            <p>© 2024 Mon Portfolio</p>
        </footer>
    );
}

const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

    