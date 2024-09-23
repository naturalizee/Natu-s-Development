import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";  // Importer React Slick
import '../styles/projects.scss';
import ModaleProjects from './ModaleProjects';  // Importer la modale

// Composants flèches personnalisées
const NextArrow = ({ onClick }) => {
    return (
        <div className="nextArrow" onClick={onClick}>
            <i className="fa-solid fa-circle-arrow-right"></i>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="prevArrow" onClick={onClick}>
            <i className="fa-solid fa-circle-arrow-left"></i>
        </div>
    );
};

export function Projects() {
    const [projects, setProjects] = useState([]);
    const [isModaleOpen, setIsModaleOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `https://api.airtable.com/v0/${process.env.REACT_APP_BASE_ID}/Projects`,
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                        }
                    }
                );
                setProjects(response.data.records);
            } catch (error) {
                console.error("Erreur lors de la récupération des projets : ", error);
            }
        };
        fetchProjects();
    }, []);

    // Paramètres du carrousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        draggable: true,
        swipe: true,
        touchMove: true,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />, 
    };

    // Ouvrir la modale avec les données du projet sélectionné
    const openModale = (project) => {
        setCurrentProject(project);
        setIsModaleOpen(true);
    };

    const closeModale = () => {
        setIsModaleOpen(false);
        setCurrentProject(null);
    };

    return (
        <section className="projects">
            <h2>Projets</h2>
            <Slider {...settings}>
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.fields['Image de couverture']?.[0]?.url}
                            alt="Image-de-couverture"
                            className="cover-image"
                        />
                
                        <h3>{project.fields['Nom du projet']}</h3>
                
                        <div className="technologies">
                            {project.fields.Technologies?.map((tech) => (
                                <button key={tech} className="tech-button">{tech}</button>
                            ))}
                        </div>

                        <button className="see-more" onClick={() => openModale(project)}>
                            En savoir plus
                        </button>

                        {/* <a href={project.fields['Lien du projet']} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a> */}

                        {project.fields.Statut === 'En cours' && (
                            <span className="status"><i className="fa-solid fa-spinner"></i> <br />Projet en cours de développement</span>
                        )}
                    </div>
                ))}
            </Slider>

            {/* Passer les informations du projet à la modale */}
            <ModaleProjects 
                isOpen={isModaleOpen} 
                project={currentProject} 
                onClose={closeModale} 
            />
        </section>
    );
}
