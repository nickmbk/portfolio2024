import  { useRef } from 'react';
import './WorkExperience.css';
import { PROJECTS } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import Slider from 'react-slick';

const WorkExperience = () => {
const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const slideRight = () => {
        sliderRef.current.slickNext();
    }

    const slideLeft = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <section className="projects-container">
            <h2>Projects</h2>

            <div className="projects-content">
                <div className="arrow-right" onClick={slideRight}>
                    <span class="material-symbols-outlined">chevron_right</span>
                </div>

                <div className="arrow-left" onClick={slideLeft}>
                    <span class="material-symbols-outlined">chevron_left</span>
                </div>

                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default WorkExperience;