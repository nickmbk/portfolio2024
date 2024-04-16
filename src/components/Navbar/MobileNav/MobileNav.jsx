import { React } from "react";
import './MobileNav.css';

const MobileNav = ({ isOpen, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${isOpen ? "active": ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <div className="logo">
                        Nick Misselbrook
                    </div>

                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>
                        <li>
                            <a className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item">Projects</a>
                        </li>
                        <li>
                            <a className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            My CV <span class="material-symbols-outlined">download</span>
                        </button>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default MobileNav;
