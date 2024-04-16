import React, { useState } from "react";
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <div className="logo">
                        Nick Misselbrook
                    </div>
                    <ul>
                        <li>
                            <Link to="/#home" className="menu-item" onClick={() => setOpenMenu(false)}>Home</Link>
                        </li>
                        <li>
                            <Link to="/#skills" className="menu-item" onClick={() => setOpenMenu(false)}>Skills</Link>
                        </li>
                        <li>
                            <Link to="/#projects" className="menu-item" onClick={() => setOpenMenu(false)}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/#contactme" className="menu-item" onClick={() => setOpenMenu(false)}>Contact Me</Link>
                        </li>
                        <a className="contact-btn" href="./assets/documents/nick-misselbrook-cv.pdf">
                            My CV <span className="material-symbols-outlined">download</span>
                        </a>
                    </ul>
                    <button className="menu-btn" onClick={toggleMenu}>
                        <span className={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;