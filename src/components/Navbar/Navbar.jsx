import {React, useState} from "react";
import './Navbar.css';
import MobileNav from './MobileNav/MobileNav';

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
                        nick misselbrook
                    </div>

                    <ul>
                        <li>
                            <a className="menu-item">home</a>
                        </li>
                        <li>
                            <a className="menu-item">skills</a>
                        </li>
                        <li>
                            <a className="menu-item">work experience</a>
                        </li>
                        <li>
                            <a className="menu-item">contact me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {}}>
                            hire me
                        </button>
                    </ul>

                    <button class="menu-btn" onClick={toggleMenu}>
                        <span class={"material-symbols-outlined"} style={{ fontSize: "1.8rem" }}>
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
};

export default Navbar;