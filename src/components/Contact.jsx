import React from "react";
import ContactForm from "./FormulaireContact";

export function Contact() {
    return (
        <section className="Contact">
            <h2>Contact</h2>
            <i className="fa-solid fa-mobile-screen-button"></i>
            <i className="fa-solid fa-at"></i>
        <div className="Formulaire-contact">
        <ContactForm />
        </div>
        </section>
    )
}