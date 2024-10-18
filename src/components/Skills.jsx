import React from "react";

export function Skills({ language }) {
    return (
        <section className="skills">
            <h2>{language === 'fr' ? 'Compétences' : 'Skills'}</h2>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
            </ul>
        </section>
    )
}
