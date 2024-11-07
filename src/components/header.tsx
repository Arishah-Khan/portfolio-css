"use client";

import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { BsProjectorFill } from 'react-icons/bs';
import "@/styles/header.css"
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Image from 'next/image';

export default function Navbar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false); 

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen); 
    };

    const pathname = usePathname();
    return (
        <header className="navbar">
        
            <div className="logo">
                <Image src="/images/logo1.png" alt="logo" width="80" height="80" />
            </div>

            {/* Desktop Navigation */}
            <nav className="navbar-menu">
                <ul className="nav-links">
                    <li><a href="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>Home</a></li>
                    <li><a href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>About</a></li>
                    <li><a href="/project" className={`nav-link ${pathname === "/project" ? "active" : ""}`}>Projects</a></li>
                    <li><a href="/contact" className={`nav-link ${pathname === "/contact" ? "active" : ""}`}>Contact</a></li>
                </ul>
            </nav>

            <div className="social-icons">
                        <div className="social-icon">
                            <Link href="https://www.linkedin.com" className="link">
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                        <div className="social-icon">
                            <Link href="https://github.com" className="link">
                                <FaGithub size={20} />
                            </Link>
                        </div>
                    </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
                <button onClick={toggleDrawer} className="menu-button">
                    <FaBars size={24} />
                </button>


                <div className={`overlay ${isDrawerOpen ? 'show' : ''}`}></div>
                <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
                    <div className="drawer-header">
                        <Image src="/images/logo1.png" alt="logo" width="80" height="80" />
                        <button onClick={toggleDrawer} className="close-button">
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <ul className="drawer-links">
                        <li><a href="/" className="drawer-link"><FaHome /> Home</a></li>
                        <li><a href="/about" className="drawer-link"><FaInfoCircle /> About</a></li>
                        <li><a href="/projects" className="drawer-link"><BsProjectorFill /> Projects</a></li>
                        <li><a href="/contact" className="drawer-link"><FaEnvelope /> Contact</a></li>
                    </ul>

                    <div className="social-icons-mobile">
                        <div className="social-icon">
                            <Link href="https://www.linkedin.com" className="link">
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                        <div className="social-icon">
                            <Link href="https://github.com" className="link">
                                <FaGithub size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
