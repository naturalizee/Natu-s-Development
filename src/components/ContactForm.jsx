import React, { useState } from "react";
import emailjs from "emailjs-com";
import '../styles/formContact.scss';

const ContactForm = ({ language }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); 

        if (!formData.name || !formData.email || !formData.message) {
            setError(language === 'fr' ? "Tous les champs sont obligatoires." : "All fields are required.");
            return;
        }

        emailjs
            .send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(
                (result) => {
                    setEmailSent(true);
                    alert(language === 'fr' ? "Votre message a été envoyé avec succès !" : "Your message was sent successfully!");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
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
