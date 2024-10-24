"use client"; // For Next.js to ensure it's client-side

import { useState } from 'react';
import { FaLinkedinIn, FaGithub, FaBars, FaTimes, FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { BsProjectorFill } from 'react-icons/bs';
import "@/styles/header.css"
import Link from 'next/link';

export default function Navbar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false); // Drawer toggle state

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen); // Toggle between open and close
    };

    return (
        <header className="navbar">
            {/* Logo */}
            <div className="logo">
                <img src="/images/logo1.png" alt="logo" width="80" height="80" />
            </div>

            {/* Desktop Navigation */}
            <nav className="navbar-menu">
                <ul className="nav-links">
                    <li><Link href="#home" className="nav-link">Home</Link></li>
                    <li><Link href="#about" className="nav-link">About</Link></li>
                    <li><Link href="#projects" className="nav-link">Projects</Link></li>
                    <li><Link href="#contact" className="nav-link">Contact</Link></li>
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

                {/* Mobile Drawer */}

                <div className={`overlay ${isDrawerOpen ? 'show' : ''}`}></div>
                <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
                    <div className="drawer-header">
                        <img src="/images/logo1.png" alt="logo" width="80" height="80" />
                        <button onClick={toggleDrawer} className="close-button">
                            <FaTimes size={24} />
                        </button>
                    </div>
                    <ul className="drawer-links">
                        <li><Link href="#home" className="drawer-link"><FaHome /> Home</Link></li>
                        <li><Link href="#about" className="drawer-link"><FaInfoCircle /> About</Link></li>
                        <li><Link href="#projects" className="drawer-link"><BsProjectorFill /> Projects</Link></li>
                        <li><Link href="#contact" className="drawer-link"><FaEnvelope /> Contact</Link></li>
                    </ul>

                    {/* Social Icons */}
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
