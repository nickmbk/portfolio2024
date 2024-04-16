import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
    return (
        <section className="contact-container">
            <h2>Contact Me</h2>

            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl='./assets/images/icons/contact/email.webp'
                        text='contact@nickmbk.co.uk'
                        url='mailto:contact@nickmbk.co.uk'
                    />
                    <ContactInfoCard
                        iconUrl='./assets/images/icons/contact/github.webp'
                        text='github.com/nickmbk'
                        url='https://github.com/nickmbk'
                    />
                    <ContactInfoCard
                        iconUrl='./assets/images/icons/contact/linkedin.webp'
                        text='linkedin.com/in/nickmbk'
                        url='https://linkedin.com/in/nickmbk'
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