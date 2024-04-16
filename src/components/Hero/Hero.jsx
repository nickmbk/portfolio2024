import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h1>Passionate Junior Frontend Developer</h1>
                <p>
                    Hi, I'm Nick, a Frontend Developer with a keen interest in crafting user-friendly websites. I've built a solid foundation in HTML, CSS, and JavaScript, and I'm have venturing into PHP and more complex projects, as I continue to learn and grow towards becoming a Full Stack Developer.
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
                    <img src="./assets/images/headshot.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;