import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";  // Importer React Slick
import '../styles/projects.scss';

// Composants flèches personnalisées
const NextArrow = ({ onClick }) => {
    return (
        <div className="nextArrow" onClick={onClick}>
            →
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="prevArrow" onClick={onClick}>
            ←
        </div>
    );
};

export function Projects() {
    const [projects, setProjects] = useState([]);
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(
                    `https://api.airtable.com/v0/appYNcXOTo4xyIagh/Projects`,
                    {
                        headers: {
                            Authorization: `Bearer pat57YeDT1QRInu5o.164a21f32e27b1e5e0d2857247d411e75a537cbbc15e9d7fc576dbf0598e823f`
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
        slidesToShow: 3,  // Montrer 3 projets à la fois
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const toggleDetails = (id) => {
        if (activeProject === id) {
            setActiveProject(null);
        } else {
            setActiveProject(id);
        }
    };

    return (
        <section className="projects">
            <h2>Projets</h2>
            <Slider {...settings}>
                {projects.map((project) => (
                    <div className="project-card" key={project.id} onClick={() => toggleDetails(project.id)}>
                        <img src={project.fields['Image de couverture']} alt="Image-de-couverture" className="cover-image" />
                        <h3>{project.fields['Nom du projet']}</h3>

                        <div className="technologies">
                            {project.fields.Technologies?.map((tech) => (
                                <button key={tech} className="tech-button">{tech}</button>
                            ))}
                        </div>

                        {activeProject === project.id && (
                            <div className="details">
                                <p>{project.fields.Description}</p>
                                <ul className="objectives">
                                    {project.fields.Objectifs?.map((objective, index) => (
                                        <li key={index}>{objective}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button className="see-more" onClick={() => toggleDetails(project.id)}>
                            {activeProject === project.id ? 'Réduire' : 'En savoir plus'}
                        </button>

                        <a href={project.fields['Lien du projet']} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a>

                        {project.fields.Statut === 'En cours' && (
                            <span className="status">En cours</span>
                        )}
                    </div>
                ))}
            </Slider>
        </section>
    );
}
