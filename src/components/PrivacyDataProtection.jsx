import React from "react";
import "../styles/PrivacyDataProtection.scss"

export function PrivacyDataProtection({ language }) {
    return (
        <section className="PrivacyDataProtection">
            <h2>
                {language === "fr" ? "1. Nature des données collectées" : "1. Types of Data Collected"}
            </h2>
            <p>
                {language === "fr" 
                    ? "Les données personnelles collectées sur le Site sont celles fournies volontairement par l'utilisateur lors du remplissage du formulaire de contact. Les données obligatoires sont :"
                    : "The personal data collected on the Site is voluntarily provided by the user when filling out the contact form. The required data includes:"}
                <br />
                {language === "fr" ? "Nom ou dénomination sociale" : "Name or Business Name"}
                <br />
                {language === "fr" ? "Adresse e-mail" : "Email Address"}
                <br />
                {language === "fr" ? "Message" : "Message"}
                <br />
                {language === "fr" 
                    ? "Ces données sont nécessaires pour traiter et répondre aux demandes des utilisateurs."
                    : "This information is necessary to process and respond to user inquiries."}
            </p>

            <h2>
                {language === "fr" ? "2. Finalité des données collectées" : "2. Purpose of Data Collection"}
            </h2>
            <p>
                {language === "fr"
                    ? "Les données personnelles sont recueillies dans le seul but de répondre aux demandes envoyées via le formulaire de contact du Site. Elles ne sont ni revendues ni utilisées à des fins publicitaires."
                    : "Personal data is collected solely for the purpose of responding to inquiries sent via the Site's contact form. This data is neither sold nor used for advertising purposes."}
            </p>

            <h2>
                {language === "fr" ? "3. Conservation des données" : "3. Data Retention"}
            </h2>
            <p>
                {language === "fr"
                    ? "Les données sont conservées uniquement pour le temps nécessaire au traitement de la demande et sont stockées via le service EmailJS, qui est conforme aux réglementations RGPD. L'utilisateur peut demander la suppression de ses données en contactant natusdevelopment@gmail.com."
                    : "Data is retained only for the time necessary to process the request and is stored via the EmailJS service, which is GDPR-compliant. The user can request the deletion of their data by contacting natusdevelopment@gmail.com."}
            </p>

            <h2>
                {language === "fr" ? "4. Droits des utilisateurs" : "4. User Rights"}
            </h2>
            <p>
                {language === "fr"
                    ? "Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :"
                    : "In accordance with GDPR, you have the following rights regarding your personal data:"}
                <br />
                {language === "fr" 
                    ? "Droit d’accès : Vous avez le droit de demander l’accès à vos données personnelles."
                    : "Right of Access: You have the right to request access to your personal data."}
                <br />
                {language === "fr"
                    ? "Droit de rectification : Vous pouvez demander la correction des données inexactes ou incomplètes."
                    : "Right of Rectification: You can request the correction of inaccurate or incomplete data."}
                <br />
                {language === "fr"
                    ? "Droit à l'effacement : Vous pouvez demander la suppression de vos données dans certaines conditions."
                    : "Right to Erasure: You can request the deletion of your data under certain conditions."}
                <br />
                {language === "fr"
                    ? "Droit à la limitation du traitement : Vous pouvez demander la limitation du traitement de vos données personnelles."
                    : "Right to Restrict Processing: You can request the restriction of your personal data processing."}
                <br />
                {language === "fr"
                    ? "Droit d'opposition : Vous pouvez vous opposer au traitement de vos données personnelles."
                    : "Right to Object: You can object to the processing of your personal data."}
                <br />
                {language === "fr"
                    ? "Droit à la portabilité des données : Vous pouvez demander à recevoir vos données personnelles dans un format structuré, couramment utilisé et lisible par machine."
                    : "Right to Data Portability: You can request to receive your personal data in a structured, commonly used, and machine-readable format."}
                <br />
                {language === "fr"
                    ? "Pour exercer ces droits, veuillez contacter : natusdevelopment@gmail.com"
                    : "To exercise these rights, please contact: natusdevelopment@gmail.com"}
            </p>

            <h2>
                {language === "fr" ? "5. Sécurité des données" : "5. Data Security"}
            </h2>
            <p>
                {language === "fr"
                    ? "L’éditeur s’engage à prendre toutes les mesures nécessaires pour garantir la sécurité et la confidentialité des données personnelles recueillies sur le Site. Les données sont stockées via le service EmailJS, qui respecte des standards de sécurité élevés."
                    : "The publisher is committed to taking all necessary measures to ensure the security and confidentiality of personal data collected on the Site. Data is stored via the EmailJS service, which adheres to high security standards."}
            </p>

            <h2>
                {language === "fr" ? "6. Contact" : "6. Contact"}
            </h2>
            <p>
                {language === "fr"
                    ? "Pour toute question relative à la politique de confidentialité ou pour l’exercice de vos droits, vous pouvez contacter : natusdevelopment@gmail.com."
                    : "For any questions regarding the privacy policy or to exercise your rights, you may contact: natusdevelopment@gmail.com."}
            </p>

            <h2>
                {language === "fr" ? "7. Modification de la politique de confidentialité" : "7. Changes to the Privacy Policy"}
            </h2>
            <p>
                {language === "fr"
                    ? "La présente politique de confidentialité peut être modifiée ou complétée à tout moment pour se conformer aux évolutions législatives ou réglementaires. Nous invitons donc les utilisateurs à la consulter régulièrement."
                    : "This privacy policy may be modified or supplemented at any time to comply with legislative or regulatory changes. We therefore invite users to consult it regularly."}
            </p>
        </section>
    );
}
