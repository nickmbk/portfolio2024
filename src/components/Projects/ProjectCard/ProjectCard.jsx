import React from "react";
import './ProjectCard.css';

const ProjectCard = ({ details }) => {
    return (
        <div className="project-card">
            <div className="project-title">
                <h3>{details.title}</h3>
                <div className="links-container">
                    <div className="project-link">
                        <a href={details.deployed} target="_blank">View Project <span class="material-symbols-outlined">open_in_new</span></a>
                    </div>
                    <div className="project-link">
                        {details.repo === "" ? <p>No public repository available</p> : <a href={details.repo} target="_blank">GitHub Repository <span class="material-symbols-outlined">open_in_new</span></a>}
                    </div>
                </div>
            </div>
            <div className="project-content">
                <div className="project-information">
                    <div className="role-stack">
                        <div className="role">
                            <h4>Role: </h4>
                            <p>{details.role}</p>
                        </div>
                        <div className="stack-title">
                            <h4>Technology Stack:</h4>
                        </div>
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
                        <div className="project-description">
                            <h4>Description:</h4>
                            <div className="description-paragraph">
                                <p>{details.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-screenshot">
                        <img src={details.screenshot} alt={details.title} />
                    </div>
                </div>                        
            </div>
        </div>
    );
};

export default ProjectCard;