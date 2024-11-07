// HeroSection.tsx
import Image from "next/image";
import ResumeBtn from "./resume-btn";
import '@/styles/hero-section.css'; 



export default function HeroSec() {
    return (
        <main className="main-section">
            {/* Text Section */}
            <div className="text-section">
                <h3 className="greeting-text">
                    Hello, I&apos;m
                </h3>
                <h1 className="name-text">
                    Arishah Khan
                </h1>
                <h2 className="role-text">
                    Full Stack Developer
                </h2>
                <p className="description-text">
                    I create beautiful and user-friendly interfaces <br /> with ReactJS and NextJS.
                </p>
                <div>
                    <ResumeBtn
                        href="https://drive.google.com/file/d/1VOaV_13pheqTqVv2TMnkDrnxqfakcY-A/view?usp=drive_link"
                        text="My Resume"
                    />
                </div>
            </div>

            <div className="image-container">
                <div className="gradient-bg">
                    <Image
                        src="/images/Gradient.svg"
                        alt="Gradient Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="profile-image">
                    <Image
                        src="/images/profile.png"
                        alt="Profile Pic"
                        width={340}
                        height={320}
                        className="profile-img" 
                    />
                </div>
            </div>
        </main>
    );
}
