import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
import "@/styles/contact-sec.css"
import ResumeBtn from "@/components/resume-btn";

export default function ContactSec() {
    return (
        <section className="contact-section">
            <div className="container">
                <h2 className="section-title">
                    Contact Me
                </h2>
                <p className="intro-text">
                    {`Have any questions or want to collaborate? I'm just a message away!`}
                </p>

                <p className="email-info">
                    📧 Email: <Link href="mailto:arishahsanaullah78@gmail.com" className="email-link">arishahsanaullah78@gmail.com</Link>
                </p>
                
                <div className="icon-container">
                    <div className="icon linkedin">
                        <Link href="https://www.linkedin.com/in/arishah-khan-b606092b8/" aria-label="LinkedIn">
                            <FaLinkedinIn size={25} className="width"/>
                        </Link>
                    </div>
                    <div className="icon github">
                        <Link href="https://github.com/Arishah-Khan" aria-label="GitHub">
                            <FaGithub size={25}  className="width"/>
                        </Link>
                    </div>
                    <div className="icon instagram">
                        <Link href="https://www.instagram.com/arishahsanaullah78/?hl=en" aria-label="Instagram">
                            <FaInstagram size={25}  className="width"/>
                        </Link>
                    </div>
                </div>
        
                <p className="outro-text">
                    {`I'm always open to new opportunities. Let's create something amazing together!`}
                </p>
                
                <div className="button-container">
                    <ResumeBtn
                    href="/contact"
                    text="Get in Touch"
                    />
                </div>
            </div>
        </section>
    );
}
