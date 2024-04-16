import { React } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import './MobileNav.css';


const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <div className="logo">
                        Nick Misselbrook
                    </div>

                    <ul>
                        <li>
                            <Link to="/#home" className="menu-item" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/#skills" className="menu-item" onClick={toggleMenu}>Skills</Link>
                        </li>
                        <li>
                            <Link to="/#projects" className="menu-item" onClick={toggleMenu}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/#contactme" className="menu-item" onClick={toggleMenu}>Contact Me</Link>
                        </li>
                        <a className="contact-btn" href="./assets/documents/nick-misselbrook-cv.pdf">
                            My CV <span className="material-symbols-outlined">download</span>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNav;