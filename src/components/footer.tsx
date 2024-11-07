// components/Footer.tsx

import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import ResumeBtn from './resume-btn';
import '@/styles/footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-links">
                    <div className="links">
                        <Link href="/" className="footerLink">Home</Link>
                        <Link href="/about" className="footerLink">About</Link>
                        <Link href="/project" className="footerLink">Projects</Link>
                        <Link href="/contact" className="footerLink">Contact</Link>
                    </div>

                    {/* Centered Email Me Button */}
                    <div className='email'>
                        <ResumeBtn
                            href="mailto:arishahsanaullah78@gmail.com"
                            text="Email Me"
                        />
                </div>

                {/* Third Div for GitHub and LinkedIn Icons */}
                <div className="footer-icons">
                    <div className="footer-icon">
                        <Link href="https://www.linkedin.com/in/arishah-khan-b606092b8/" aria-label="LinkedIn" className="footer-link">
                            <FaLinkedinIn size={20} />
                        </Link>
                        <span className="footer-tooltip">LinkedIn</span>
                    </div>

                    <div className="footer-icon footer-icon-github">
                        <Link href="https://github.com/Arishah-Khan" aria-label="GitHub" className="footer-link">
                            <FaGithub size={20} />
                        </Link>
                        <span className="footer-tooltip">GitHub</span>
                    </div>
                </div>
            </div>
            <div>
                <p className="footer-note">© 2024 <span className="footer-highlight">Arishah</span> All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
