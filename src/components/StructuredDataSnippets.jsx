import React from 'react';
import { Helmet } from 'react-helmet-async';

// Code pour la page "À propos de moi"
// const ldJson = {
//     "@context": "https://schema.org",
//     "@type": "AboutPage",
//     "name": "À propos de moi",
//     "description": "Présentation et parcours de Alizée Dereppe, développeuse web.",
//     "url": "https://natusdevelopment.netlify.app/"
// }

export const AboutHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
                "@context": "https://schema.org",
                "@type": "AboutPage",
                "name": "À propos de moi",
                "description": "Présentation et parcours de Alizée Dereppe, développeuse web.",
                "url": "https://natusdevelopment.netlify.app/"
            `}
        </script>
    </Helmet>
);

// Code pour le formulaire de contact
export const ContactFormHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Formulaire de Contact",
          "description": "Page de contact pour joindre Alizée Dereppe, développeuse web.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);

// Code pour l'introduction
export const IntroductionHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Introduction",
          "description": "Page d'introduction présentant les services et compétences de Alizée Dereppe.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);

// Code pour les mentions légales
export const LegalNoticeHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Mentions Légales",
          "description": "Page des mentions légales de Alizée Dereppe.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);

// Code pour la modale des projets
export const ModaleProjectsHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Projets en Détail",
          "description": "Présentation détaillée des projets de Alizée Dereppe.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);

// Code pour la page de protection des données
export const PrivacyDataProtectionHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "PrivacyPolicy",
          "name": "Protection des Données",
          "description": "Politique de confidentialité et protection des données de Alizée Dereppe.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);

// Code pour la page des projets
export const ProjectsHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Projets",
          "description": "Liste des projets de développement web réalisés par Alizée Dereppe.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);

// Code pour la page des compétences
export const SkillsHelmet = () => (
    <Helmet>
        <script type="application/ld+json">
            {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Compétences",
          "description": "Liste des compétences et expertises de Alizée Dereppe en développement web.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
        </script>
    </Helmet>
);
