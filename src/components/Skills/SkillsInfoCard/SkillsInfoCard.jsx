import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">
            <h3>{heading}</h3>

            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <div className="skills-icon">
                                <img src={item.iconUrl} alt={item.skill} />
                            </div>
                            
                            <p>{item.skill}</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillsInfoCard;