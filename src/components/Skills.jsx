import React from "react";
import { SkillsHelmet } from "./StructuredDataSnippets";
import '../styles/skills.scss';

// Utilisation de require.context pour charger tous les fichiers d'images de manière dynamique
const icons = require.context('../images/skills', false, /\.(svg|png|jpe?g|webp)$/);

export function Skills({ language }) {
    // Mapping entre chaque compétence et son icône SVG
    const skills = [
        { name: "HTML", icon: icons("./HTML5.svg") },
        { name: "CSS", icon: icons("./CSS3.svg") },
        { name: "SASS", icon: icons("./Sass.svg") },
        { name: "JavaScript", icon: icons("./JavaScript.svg") },
        { name: "React", icon: icons("./React.svg") },
        { name: "Node.js", icon: icons("./Node.js.svg") },
        { name: "Express", icon: icons("./Express.svg") },
        { name: "MongoDB", icon: icons("./MongoDB.svg") },
        { name: "Mongoose", icon: icons("./Mongoose.js.svg") },
        { name: "Figma", icon: icons("./Figma.svg") },
        { name: "Git", icon: icons("./Git.svg") },
        { name: "GitHub", icon: icons("./GitHub.svg") },
        { name: "Canva", icon: icons("./Canva.svg") },
        { name: language === 'fr' ? "Français" : "French", icon: icons("./french.webp") },
        { name: language === 'fr' ? "Anglais" : "English", icon: icons("./english.png") },
    ];

    return (
        <>
            < SkillsHelmet />
            <section className="skills">
                <h2>{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>
                            <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                            {skill.name}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
