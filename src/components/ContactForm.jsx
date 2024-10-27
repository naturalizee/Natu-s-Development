import React, { useState } from "react";
import emailjs from "emailjs-com";
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
                    }).catch((error) => {
                        setError(language === 'fr' ? "Erreur lors de l'envoi de la réponse automatique." : "Error sending auto-reply.");
                    });
                },
                (error) => {
                    setError(language === 'fr' ? "Une erreur est survenue lors de l'envoi du message." : "An error occurred while sending the message.");
                }
            );
    };

    return (
        <div className="contact">
            <h2>{language === 'fr' ? 'Contact' : 'Contact'}</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                
                {/* HoneyPot field*/}
                <div style={{ display: 'none' }}>
                    <label>Leave this field blank</label>
                    <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    />
                </div>

                <div>
                    <label>{language === 'fr' ? 'Nom:' : 'Name:'}</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label>{language === 'fr' ? 'Email:' : 'Email:'}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label>{language === 'fr' ? 'Message:' : 'Message:'}</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">{language === 'fr' ? 'Envoyer' : 'Send'}</button>

                {emailSent && <p style={{ color: "green" }}>{language === 'fr' ? 'Email envoyé avec succès !' : 'Email sent successfully!'}</p>}
            </form>
        </div>
    );
};

export default ContactForm;
