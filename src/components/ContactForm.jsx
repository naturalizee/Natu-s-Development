import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ContactFormHelmet } from "./StructuredDataSnippets";
import '../styles/contactForm.scss';

/* ContactForm configurations */
const ContactForm = ({ language }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        honeypot: "" // Champ caché pour l'anti-bot
    });
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState("");

    /* HoneyPot and required fields verification */
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (formData.honeypot) {
            console.log("Bot detected - form not submitted");
            return;
        }

        if (!formData.name || !formData.email || !formData.message) {
            setError(language === 'fr' ? "Tous les champs sont obligatoires." : "All fields are required.");
            return;
        }

        // Message send to client
        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    reply_to: formData.email
                },
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    // Auto-reply send
                    emailjs.send(
                        process.env.REACT_APP_EMAILJS_SERVICE_ID,
                        process.env.REACT_APP_EMAILJS_REPLY_TEMPLATE_ID,
                        {
                            name: formData.name,
                            email: formData.email,
                            reply_to: formData.email
                        },
                        process.env.REACT_APP_EMAILJS_USER_ID
                    ).then(() => {
                        /* Emptying fields */
                        setEmailSent(true);
                        alert(language === 'fr' ? "Votre message a été envoyé avec succès !" : "Your message was sent successfully!");
                        setFormData({
                            name: "",
                            email: "",
                            message: "",
                            honeypot: ""
                        });
                    }).catch(() => {
                        setError(language === 'fr' ? "Erreur lors de l'envoi de la réponse automatique." : "Error sending auto-reply.");
                    });
                },
                () => {
                    setError(language === 'fr' ? "Une erreur est survenue lors de l'envoi du message." : "An error occurred while sending the message.");
                }
            );
    };

    return (
        <>
            <ContactFormHelmet />
            <div className="contact">
                <h2>{language === 'fr' ? 'Contact' : 'Contact'}</h2>
                <form className="contact-form" onSubmit={handleSubmit}>

                    {/* HoneyPot field*/}
                    <div style={{ display: 'none' }}>
                        <label htmlFor="honeypot">Leave this field blank</label>
                        <input
                            type="text"
                            id="honeypot"
                            name="honeypot"
                            value={formData.honeypot}
                            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="name">{language === 'fr' ? 'Nom' : 'Name'}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">{language === 'fr' ? 'Email' : 'Email'}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="message">{language === 'fr' ? 'Message' : 'Message'}</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    {error && <p style={{ color: "red" }}>{error}</p>}

                    <button aria-label="submit" type="submit">{language === 'fr' ? 'Envoyer' : 'Send'}</button>

                    {emailSent && <p style={{ color: "green" }}>{language === 'fr' ? 'Email envoyé avec succès !' : 'Email sent successfully!'}</p>}
                </form>
            </div>
        </>
    );
};

export default ContactForm;
