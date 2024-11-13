/* extends components for projects cards */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import ModaleProjects from './ModaleProjects';
import { config } from "react-spring";
import '../styles/projects.scss';

export function Projects({ language }) {
    const [projects, setProjects] = useState([]);
    const [isModaleOpen, setIsModaleOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);
    const [goToSlide, setGoToSlide] = useState(0);

    /* AirTable API call */
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

    const slides = projects.map((project, index) => ({
        key: uuidv4(),
        content: (
            <Card className="card-main" onClick={() => setGoToSlide(index)}>
                <div className="circle-div">
                    {project.fields['Image de couverture'] && project.fields['Image de couverture'][0] && (
                        <img
                            src={project.fields['Image de couverture'][0].url}
                            alt={language === 'fr' ? 'Image de couverture' : 'Cover image'}
                            className="cover-image"
                        />
                    )}
                </div>
                <CardBody>
                    <CardTitle tag="h3" className="card-title">
                        {language === 'fr' ? project.fields['Nom du projet'] : project.fields['Nom du projet (EN)']}
                    </CardTitle>
                    <CardText tag="p" className="card-text">
                        {language === 'fr' ? project.fields['Description'] : project.fields['Description (EN)']}
                    </CardText>
                    <div className="technologies">
                        {project.fields.Technologies && project.fields.Technologies.map((tech) => (
                            <button aria-label="technologies" key={tech} className="tech-button">{tech}</button>
                        ))}
                    </div>
                    <button aria-label="see more" className="see-more" onClick={() => openModale(project)}>
                        {language === 'fr' ? 'En savoir plus' : 'See more'}
                    </button>
                </CardBody>
            </Card>
        )
    }));

    const openModale = (project) => {
        setCurrentProject(project);
        setIsModaleOpen(true);
    };

    const closeModale = () => {
        console.log("Modale fermée");
        setIsModaleOpen(false);
        setCurrentProject(null);
    };

    return (
            <section className="projects">
                <h2>{language === 'fr' ? 'Projets' : 'Projects'}</h2>
                <div style={{ width: "80%", margin: " 300px auto" }}>
                    <Carousel
                        slides={slides}
                        goToSlide={goToSlide}
                        offsetRadius={2}
                        animationConfig={config.gentle}
                        showNavigation={false}
                    />
                </div>
                <ModaleProjects
                    isOpen={isModaleOpen}
                    project={currentProject}
                    onClose={closeModale}
                    language={language}
                />
            </section>
    );
}
