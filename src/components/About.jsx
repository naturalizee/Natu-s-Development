import React from "react";
import portrait from '../images/auto-portrait.webp';

export function About({ language }) {
    return (
        <section className="about">
            <img src={portrait} alt={language === 'fr' ? 'Portrait de moi' : 'My portrait'} className="profile-pic"/>
            <div className="description">
                <h2>{language === 'fr' ? 'À Propos de moi' : 'About Me'}</h2>
                <p>
                    {language === 'fr'
                        ? `Moi, c'est Alizée. Je suis née en 1998, j'habite en Eure-et-Loir et je suis maman d'un petit garçon. 
                        Passionnée d'animaux et de jeux vidéos, j'ai découvert le monde du développement web à travers un site dont j'ai aidé le développement. 
                        C'est alors que j'ai débuté en mars 2024 une formation chez OpenClassrooms, en tant que développeuse web. 
                        Pour moi, ce métier est plus qu'un travail, la création d'expériences numériques et interactives est une passion.`
                        : `I'm Alizée. I was born in 1998, I live in Eure-et-Loir, and I am the mother of a little boy. Passionate about animals and video games, 
                        I discovered the world of web development through a site I helped develop. 
                        In March 2024, I started a web developer training with OpenClassrooms. For me, this job is more than just work, 
                        it's a passion to create interactive digital experiences.`}
                </p>
            </div>
        </section>
    );
}
