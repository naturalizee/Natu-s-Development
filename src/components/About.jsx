import React from "react";
import portrait from '../images/auto-portrait.webp';


export function About() {
    return (
        <section className="about">
            <img src={portrait} alt='Portrait de moi' className="profile-pic"/>
            <div className="description">
                <h2>À Propos de moi</h2>
                <p>
                    Moi, c'est Alizée. <br/>
                    Je suis née en 1998, j'habite en Eure-et-Loir et je suis maman d'un petit garçon. <br />
                    Passionnée d'animaux et de jeux vidéos, j'ai découvert le monde du développement web à travers
                    un site dont j'ai aidé le développement. <br />
                    C'est alors que j'ai débuté en mars 2024 une formation chez OpenClassrooms, en tant que développeuse web. <br />
                    Pour moi, ce métier est plus qu'un travail, la création d'expériences numériques et interactives est une passion.
                </p>
            </div>
        </section>
    );
}
