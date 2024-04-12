import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and Visually Stunning Web Solutions
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <img src="https://picsum.photos/400" alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="https://picsum.photos/200" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;