import Image from "next/image";
import "@/styles/about-page-card.css"; 
import ResumeBtn from "@/components/resume-btn";
import Card from "@/components/aboutCard";

export default function AboutMe() {

    const education = [
        {
            degree: "Master's Degree in Mathematics",
            institution: "University of Karachi",
            year: "2020 - 2022",
        },
        {
            degree: "Bachelor's Degree in Science",
            institution: "DJ Sindh Government Science College, Karachi",
            year: "2018 - 2020",
        },
        {
            degree: "Intermediate (Pre-Engineering)",
            institution: "KMA Girls Degree College, Karachi",
            year: "2016 - 2018",
        },
        {
            degree: "Matriculation",
            institution: "Al-Hamd Grammar School, Karachi",
            year: "2014 - 2016",
        }
    ]

    const Certification = [
        {
            name: "Certification in Cloud Applied Generative AI, Governor Sindh Pakistan Initiative",
            institution: "Governor House Karachi",
            year: "Ongoing",
        },
        {
            name: "Web and Mobile App Development Program",
            institution: "Saylani Mass IT Training",
            year: "Ongoing",
        }
    ]

    return (
        <main className="main-container">
            <h1 className="heading-title">
                About Me
            </h1>


            <div className="about-main-section">
                <div className="about-me-container">
                    <h2 className="about-me-title">
                        Greetings from Arishah
                    </h2>
                    <p className="about-me-description">
                        {`I'm a passionate Full Stack Developer with a strong background in mathematics, constantly exploring new technologies. I have expertise in HTML, CSS, Bootstrap, Tailwind, ReactJS, and NextJS, allowing me to create responsive and user-friendly interfaces. Collaboration and effective communication are crucial to my approach, as I seek feedback to improve my work. My goal is to build aesthetically pleasing and high-performance websites while embracing the latest trends and best practices in web development.`}
                    </p>

                    <div className="resume-btn-container">
                        <ResumeBtn
                            href="https://drive.google.com/file/d/1VOaV_13pheqTqVv2TMnkDrnxqfakcY-A/view?usp=drive_link"
                            text="My Resume"
                        />
                    </div>
                </div>

                <div className="image-container">
                    <div className="gradient-image-container">
                        <Image
                            src="/images/Gradient.svg"
                            alt="Gradient Background"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="profile-image-container">
                        <Image
                            src="/images/profile.png"
                            alt="Profile Pic"
                            width={340}
                            height={320}
                            className="profile-image"
                        />
                    </div>
                </div>
            </div>

            <section className="section-container">
                <div className="sec">
                    <h2 className="section-title">Education</h2>
                    <div className="cards">
                        {education.map((element, index) => (
                            <Card
                                key={index}
                                degree={element.degree}
                                institute={element.institution}
                                year={element.year}
                            />
                        ))}
                    </div>
                </div>

                <div className="sec">
                    <h2 className="section-title">Certifications</h2>
                    <div className="cards">
                        {Certification.map((element, index) => (
                            <Card
                                key={index}
                                degree={element.name}
                                institute={element.institution}
                                year={element.year}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
