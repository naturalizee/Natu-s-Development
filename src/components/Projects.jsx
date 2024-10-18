import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";  
import '../styles/projects.scss';
import ModaleProjects from './ModaleProjects'; 

const NextArrow = ({ onClick }) => (
    <div className="nextArrow" onClick={onClick}>
        <i className="fa-solid fa-circle-arrow-right"></i>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="prevArrow" onClick={onClick}>
        <i className="fa-solid fa-circle-arrow-left"></i>
    </div>
);

export function Projects({ language }) {
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
                console.error(language === 'fr' ? "Erreur lors de la récupération des projets" : "Error fetching projects", error);
            }
        };
        fetchProjects();
    }, [language]);

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
            <h2>{language === 'fr' ? 'Projets' : 'Projects'}</h2>
            <Slider {...settings}>
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            src={project.fields['Image de couverture']?.[0]?.url}
                            alt={language === 'fr' ? 'Image de couverture' : 'Cover image'}
                            className="cover-image"
                        />

                        {/* Utilisation des colonnes spécifiques à chaque langue */}
                        <h3>{language === 'fr' ? project.fields['Nom du projet'] : project.fields['Nom du projet (EN)']}</h3>

                        <p>{language === 'fr' ? project.fields['Description'] : project.fields['Description (EN)']}</p>

                        <div className="technologies">
                            {project.fields.Technologies?.map((tech) => (
                                <button key={tech} className="tech-button">{tech}</button>
                            ))}
                        </div>

                        <button className="see-more" onClick={() => openModale(project)}>
                            {language === 'fr' ? 'En savoir plus' : 'See more'}
                        </button>

                        {project.fields.Statut === 'En cours' && (
                            <span className="status"><i className="fa-solid fa-spinner"></i> <br />{language === 'fr' ? 'Projet en cours de développement' : 'Project in progress'}</span>
                        )}
                    </div>
                ))}
            </Slider>

            <ModaleProjects 
                isOpen={isModaleOpen} 
                project={currentProject} 
                onClose={closeModale} 
                language={language}
            />
        </section>
    );
}
