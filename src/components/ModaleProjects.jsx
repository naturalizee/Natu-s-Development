import React from 'react';
import Slider from 'react-slick';
import '../styles/modaleProjects.scss';
import '../styles/projects.scss';

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

const ModaleProjects = ({ isOpen, project, onClose, language }) => {
    if (!isOpen || !project) return null;

    const isMobile = window.innerWidth <= 768;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isMobile ? 1 : 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }


    return (
            <div className="modale-overlay" onClick={onClose}>
                <div className="modale-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-button" onClick={onClose}>X</button>
                    <Slider {...settings}>
                        {project.fields['Images supplémentaires']?.map((image, index) => (
                            <div key={index}>
                                <img src={image.url} alt={`Slide ${index}`} className="modale-image" />
                            </div>
                        ))}
                    </Slider>
                    {/* Informations du projet sous l'image */}
                    <div className="image-info">
                        <div className="technologies">
                            {project.fields.Technologies?.map((tech) => (
                                <button key={tech} className="tech-button">{tech}</button>
                            ))}
                        </div>
                        <p>{language === 'fr' ? project.fields['Description'] : project.fields['Description (EN)']}</p>
                        <ul className="objectives">
                            {project.fields[language === 'fr' ? 'Objectifs' : 'Objectifs (EN)']?.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))}
                        </ul>
                        <a href={project.fields['Lien du projet']} target="_blank" rel="noopener noreferrer">
                            {language === 'fr' ? 'Voir le projet' : 'See the project'}
                        </a>
                    </div>
                </div>
            </div>
        );
};

export default ModaleProjects;
