import React from "react";
import { LegalNoticeHelmet } from "./StructuredDataSnippets";

export function LegalNotice({ language }) {
    return (
        <>
            <LegalNoticeHelmet />
            <section className="LegalNotice">
                <h2>
                    {language === "fr" ? "1. Présentation du site" : "1. Website Presentation"}
                </h2>

                <p>
                    {language === "fr" ? (
                        <React.Fragment>
                            Le site web accessible à ladresse suivante : <br />
                            https://natusdevelopment.netlify.app/ <br />
                            (ci-après "le Site") est un portfolio en ligne de développeuse web appartenant à :
                        </React.Fragment>
                    ) : <React.Fragment>
                        The website accessible at the following address: https://natusdevelopment.netlify.app/ (hereinafter referred to as "the Site") is an online portfolio for a web developer owned by:`
                    </React.Fragment>
                    }
                </p>
                <p>
                    {language === "fr" ? (
                        <React.Fragment>
                            Éditeur du site : <br />
                            Nom : Alizée Dereppe <br />
                            Adresse : 3 Route d'Epernon, 28320 GALLARDON <br />
                            Adresse email : natusdevelopment@gmail.com <br />
                            Numéro de téléphone : 0760424589 <br />
                            Responsable de la publication : Alizée Dereppe <br />
                            Hébergeur du site : Netlify, Inc. <br />
                            2325 3rd Street, Suite 296, San Francisco, California 94107, USA. <br />
                            Site web : https://www.netlify.com <br />
                            Conception et réalisation : <br />
                            Ce site a été conçu et développé par Alizée Dereppe.
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            Site Publisher: <br />
                            Name: Alizée Dereppe <br />
                            Address: 3 Route d'Epernon, 28320 GALLARDON <br />
                            Email address: natusdevelopment@gmail.com <br />
                            Phone number: 0760424589 <br />
                            Publication Manager: Alizée Dereppe <br />
                            Website Host: Netlify, Inc. <br />
                            2325 3rd Street, Suite 296, San Francisco, California 94107, USA. <br />
                            Website: https://www.netlify.com <br />
                            Design and Development: <br />
                            This site was designed and developed by Alizée Dereppe.
                        </React.Fragment>
                    )}
                </p>

                <h2>
                    {language === "fr" ? "2. Conditions d'utilisation" : "2. Terms of Use"}
                </h2>
                <p>
                    {language === "fr"
                        ? "L'utilisation du Site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-après. Ces conditions d'utilisation peuvent être modifiées ou complétées à tout moment. Les utilisateurs du Site sont donc invités à les consulter de manière régulière."
                        : "Using the Site implies full and complete acceptance of the terms of use described below. These terms of use may be modified or supplemented at any time. Users of the Site are therefore invited to consult them regularly."}
                </p>

                <h2>
                    {language === "fr" ? "3. Propriété intellectuelle" : "3. Intellectual Property"}
                </h2>
                <p>
                    {language === "fr"
                        ? "Tous les contenus présents sur le Site (textes, images, illustrations, logos, etc.) sont la propriété exclusive de Alizée Dereppe, sauf indication contraire. Toute reproduction, distribution, modification, adaptation ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès de Alizée Dereppe."
                        : "All content on the Site (texts, images, illustrations, logos, etc.) is the exclusive property of Alizée Dereppe, unless otherwise indicated. Any reproduction, distribution, modification, adaptation, or publication, even partial, of these various elements is strictly prohibited without the express permission of Alizée Dereppe."}
                </p>

                <h2>
                    {language === "fr" ? "4. Limitations de responsabilité" : "4. Limitation of Liability"}
                </h2>
                <p>
                    {language === "fr"
                        ? "L’éditeur du Site ne pourra être tenu pour responsable des dommages directs ou indirects causés au matériel de l’utilisateur, lors de l’accès au Site, résultant de l’apparition d’un bug ou d’une incompatibilité."
                        : "The Site publisher cannot be held responsible for any direct or indirect damage caused to the user's equipment when accessing the Site, resulting from the occurrence of a bug or incompatibility."}
                </p>

                <h2>
                    {language === "fr" ? "5. Gestion des données personnelles" : "5. Management of Personal Data"}
                </h2>
                <p>
                    {language === "fr"
                        ? "Les informations recueillies via le formulaire de contact du Site (nom ou dénomination sociale, adresse e-mail, message) sont nécessaires pour pouvoir répondre aux demandes des utilisateurs. Ces données sont transmises et stockées via le service EmailJS. Elles ne sont en aucun cas revendues à des tiers ou utilisées à des fins commerciales sans le consentement explicite des utilisateurs."
                        : "The information collected via the Site's contact form (name or business name, email address, message) is necessary to respond to user inquiries. This data is transmitted and stored via the EmailJS service and is in no way sold to third parties or used for commercial purposes without the explicit consent of the users."}
                </p>
            </section>
        </>
    );
}
