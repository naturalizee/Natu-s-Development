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
                        ? `Moi, c'est Alizée. Je suis née en 1998, j'habite en Eure-et-Loir et je suis maman d'un petit garçon. <br />
                        Passionnée d'animaux et de jeux vidéos, j'ai découvert le monde du développement web à travers un site dont j'ai aidé le développement. <br />
                        C'est alors que j'ai débuté en mars 2024 une formation chez OpenClassrooms, en tant que développeuse web. <br />
                        Pour moi, ce métier est plus qu'un travail, la création d'expériences numériques et interactives est une passion.`.split('<br />').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))
                        : `I'm Alizée. I was born in 1998, I live in Eure-et-Loir, and I am the mother of a little boy. <br />
                        Passionate about animals and video games, I discovered the world of web development through a site I helped develop. <br />
                        In March 2024, I started a web developer training with OpenClassrooms. <br />
                        For me, this job is more than just work, it's a passion to create interactive digital experiences.`.split('<br />').map((line, index) => (
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
