import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1>Building Digital Experiences That Inspire</h1>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
                <div>
                    <a href="mailto:contact@nickmbk.co.uk">
                        <div className="contact-icon">
                            <img src="./assets/images/icons/contact/email.webp" alt="email logo" />
                        </div>
                    </a>
                    <a href="https://github.com/nickmbk" target="_blank">
                        <div className="contact-icon">
                            <img src="./assets/images/icons/contact/github.webp" alt="github logo" />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/nickmbk" target="_blank">
                        <div className="contact-icon">
                            <img src="./assets/images/icons/contact/linkedin.webp" alt="linkedin logo" />
                        </div>
                    </a>
                </div>
            </div>

            <div className="hero-img">
                <div>
                    <img src="https://picsum.photos/400" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;