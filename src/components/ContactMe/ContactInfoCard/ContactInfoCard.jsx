import React from "react";
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, url }) => {
    return (
        <a href={url}>
            <div className="contact-details-card">
                <div className="icon">
                    <img src={iconUrl} alt={text} />
                </div>

                <p>{text}</p>
            </div>
        </a>
    );
};

export default ContactInfoCard;