import React from "react";
import '../styles/introduction.scss'

export function Introduction({ language }) {
    return (
        <section className="introduction">
            <h1>
                {language === 'fr' ? `Des sites développés aujourd'hui, pensés pour demain.` : `Websites developed today, designed for tomorrow.`}
            </h1>
        </section>
    );
}
