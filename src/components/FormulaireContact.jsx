import React, { useState } from "react";
import emailjs from "emailjs-com";
import '../styles/formContact.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [emailSent, setEmailSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Réinitialiser les erreurs

        if (!formData.name || !formData.email || !formData.message) {
            setError("Tous les champs sont obligatoires.");
            return;
        }

        // Envoi des données à EmailJS
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
                    alert("Votre message a été envoyé avec succès !");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setError("Une erreur est survenue lors de l'envoi du message.");
                }
            );
    };

    return (
        <div className="contact">
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label>Nom:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Envoyer</button>

                {emailSent && <p style={{ color: "green" }}>Email envoyé avec succès !</p>}
            </form>
        </div>
    );
};

export default ContactForm;
