import React from 'react';
import './SkillsInfoCard.css';

const SkillsInfoCard = ({ heading, skills }) => {
    return (
        <div className="skills-info-card">
            <h6>{heading}</h6>

            <div className="skills-info-content">
                {skills.map((item, index) => (
                    <React.Fragment key={`skill_${index}`}>
                        <div className="skill-info">
                            <div className="skills-icon">
                                <img src={item.iconUrl} alt={item.skill} />
                            </div>
                            
                            <p>{item.skill}</p>
                        </div>

                        {/* <div className="skill-progress-bg">
                            <div className="skill-progress" style={{ width: item.percentage }} />
                        </div> */}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillsInfoCard;