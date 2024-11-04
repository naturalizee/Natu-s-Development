import React from 'react';
import { Helmet } from 'react-helmet-async';

// Code pour la page "À propos de moi"
export const AboutHelmet = () => (
  <Helmet>
    <title>À propos de moi | Alizée Dereppe</title>
    <meta name="description" content="Découvrez l'histoire et le parcours de Alizée Dereppe, développeuse web." />
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "À propos de moi",
          "description": "Présentation et parcours de Alizée Dereppe, développeuse web.",
          "url": "https://natusdevelopment.netlify.app/"
        }
      `}
    </script>
  </Helmet>
);

// Code pour le formulaire de contact
export const ContactFormHelmet = () => (
  <Helmet>
    <title>Formulaire de Contact | Alizée Dereppe</title>
    <meta name="description" content="Contactez Alizée Dereppe via le formulaire en ligne pour toute demande ou projet." />
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
    <title>Introduction | Alizée Dereppe</title>
    <meta name="description" content="Introduction aux services et compétences de Alizée Dereppe." />
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
    <title>Mentions Légales | Alizée Dereppe</title>
    <meta name="description" content="Consultez les mentions légales du site web de Alizée Dereppe." />
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
    <title>Projets en Détail | Alizée Dereppe</title>
    <meta name="description" content="Découvrez les détails des projets de Alizée Dereppe." />
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
    <title>Protection des Données | Alizée Dereppe</title>
    <meta name="description" content="Consultez la politique de protection des données de Alizée Dereppe." />
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
    <title>Projets | Alizée Dereppe</title>
    <meta name="description" content="Découvrez les projets web réalisés par Alizée Dereppe." />
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
    <title>Compétences | Alizée Dereppe</title>
    <meta name="description" content="Découvrez les compétences de développement web de Alizée Dereppe." />
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
