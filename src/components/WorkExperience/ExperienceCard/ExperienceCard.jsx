import React from "react";
import './ExperienceCard.css';

const ExperienceCard = ({ details }) => {
    return (
        <div className="project-card">
            <div className="project-title">
                <h3>{details.title}</h3>
            </div>
            <div className="project-information">
                <div className="role-stack">
                    <div className="role">
                        <h4>Role: </h4>
                        <p>{details.role}</p>
                    </div>
                    <h4>Technology Stack</h4>
                    <ul>
                        {details.technologies.map((item, index) => (
                            <React.Fragment key={`project_${index}`}>
                            <li className="technology">
                                <div className="technology-icon">
                                    <img src={item.iconUrl} alt={item.name} />
                                </div>
                                
                                <p>{item.name}</p>
                            </li>
                        </React.Fragment>
                        ))}
                    </ul>
                    <div className="project-links">
                        <h4>Project Links</h4>
                        <div className="links-container">
                            <div className="project-link">
                                <h5>Deployed Project:</h5>
                                <a href={details.deployed} target="_blank">{details.deployedTitle}</a>
                            </div>
                            <div className="project-link">
                                <h5>GitHub Repository:</h5>
                                {details.repo === "" ? <p>No public repository available</p> : <a href={details.repo} target="_blank">{details.repoTitle}</a>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-screenshot">
                    <img src={details.screenshot} alt={details.title} />
                </div>
            </div>                        
            <div className="project-description">
                <h4>Description:</h4>
                <div className="description-paragraph">
                    <p>{details.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;