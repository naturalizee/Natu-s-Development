import React from "react";

export function Introduction({ language }) {
    return (
        <section className="introduction">
            <h3>
                {language === 'fr' ? `Vous avez les idées, j'ai les solutions. Faisons équipe.` : `You have the ideas, I have the solutions. Let's team up.`}
            </h3>
        </section>
    );
}
