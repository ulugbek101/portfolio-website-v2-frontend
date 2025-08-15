import {useState, useEffect} from "react";

import {navLinks} from "../constants";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    // track if the user has scrolled down the page
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // create an event listener for when the user scrolls
        const handleScroll = () => {
            // check if the user has scrolled down at least 10px
            // if so, set the state to true
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        // add the event listener to the window
        window.addEventListener("scroll", handleScroll);

        // cleanup the event listener when the component is unmounted
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    Adrian JSM
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={name} className="group">
                                <NavLink to={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex flex-row items-center gap-5">
                    <Link to="/#contact" className="contact-btn group">
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </Link>
                    <Link to="/login" className="border border-white text-white transition hover:bg-gray-700 active:scale-95 rounded-lg py-2 px-4">
                        Login
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
