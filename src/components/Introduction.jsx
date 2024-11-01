import React from "react";
import '../styles/introduction.scss'

export function Introduction({ language }) {
    return (
        <section className="introduction">
            <h2>
                {language === 'fr' ? `Vous avez les idées, j'ai les solutions. Faisons équipe.` : `You have the ideas, I have the solutions. Let's team up.`}
            </h2>
        </section>
    );
}
