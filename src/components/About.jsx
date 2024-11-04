import React from "react";
import '../styles/about.scss';

/* Images import */
import portrait from '../images/auto-portrait.webp';

export function About({ language }) {
    return (
        <section className="about">
            <img src={portrait} alt={language === 'fr' ? 'Portrait de moi'
                : 'My portrait'} className="profile-pic" />
            <h2>{language === 'fr' ? 'À Propos de moi'
                : 'About Me'}</h2>
            <div className="description">
                <p>
                    {language === 'fr'
                        ? `Créative et méthodique, j’accompagne mes clients dans le développement de solutions digitales personnalisées. <br />
                        Ma formation de développeuse web m’a permis de maîtriser plusieurs outils et technologies pour répondre aux attentes de chaque projet, avec rigueur et engagement. <br />
                        Je m’efforce d’allier performance et esthétisme pour créer des interfaces intuitives et adaptées aux besoins des utilisateurs. <br />
                        Mon approche collaborative et ma capacité à m’adapter aux nouvelles tendances me permettent d’assurer un suivi de qualité et de proposer des solutions évolutives et durables. <br />
                        Chaque projet est pour moi l’occasion de repousser mes limites et de garantir un résultat à la hauteur des attentes de mes clients.`.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))
                        : `Creative and methodical, I support my clients in developing tailored digital solutions. <br />
                        My training as a web developer has allowed me to master various tools and technologies to meet the expectations of each project with precision and commitment. <br />
                        I strive to blend performance and aesthetics to create intuitive interfaces tailored to users' needs. <br />
                        My collaborative approach and adaptability to new trends enable me to ensure quality follow-up and offer scalable, long-lasting solutions. <br />
                        Each project is an opportunity for me to push my limits and deliver results that meet my clients' expectations.`.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))
                    }
                </p>
            </div>
        </section>
    );
}
