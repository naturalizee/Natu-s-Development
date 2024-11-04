import React from "react";
import { IntroductionHelmet } from "./StructuredDataSnippets";
import '../styles/introduction.scss'

export function Introduction({ language }) {
    return (
        <>
            <IntroductionHelmet />
            <section className="introduction">
                <h1>
                    {language === 'fr' ? `Des sites dévelopés aujourd'hui, pensés pour demain.` : `Websites developed today, designed for tomorrow.`}
                </h1>
            </section>
        </>
    );
}
