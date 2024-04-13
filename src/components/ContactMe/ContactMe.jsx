import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h5>Contact Me</h5>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl='./assets/images/icons/email.svg'
                        text='contact@nickmbk.co.uk'
                    />
                    <ContactInfoCard
                        iconUrl='./assets/images/icons/github.svg'
                        text='https://github.com/nickmbk'
                    />
                    <ContactInfoCard
                        iconUrl='./assets/images/icons/linkedin.svg'
                        text='https://www.linkedin.com/in/nickmbk'
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default ContactMe;