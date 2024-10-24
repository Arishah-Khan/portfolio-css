import Image from "next/image";
import "@/styles/skills.css" // Import the CSS module



export default function Skills() {
    const skills = [
        { name: "HTML5", image: "/images/html5.png" },
        { name: "CSS3", image: "/images/css3.png" },
        { name: "JavaScript", image: "/images/javascript.png" },
        { name: "TypeScript", image: "/images/typescript.png" },
        { name: "ReactJS", image: "/images/react.png" },
        { name: "NextJS", image: "/images/next-js.svg" },
        { name: "Git", image: "/images/git.png" },
        { name: "GitHub", image: "/images/github.png" },
        { name: "Bootstrap", image: "/images/bootstrap.png" },
        { name: "Tailwind CSS", image: "/images/tailwind.png" },
        { name: "ShadCN", image: "/images/shadcn.png" },
        { name: "Figma", image: "/images/figma.png" },
    ];

    return (
        <div className="grid">
            <h2 className="title">
                Skills
            </h2>
            <p className="description">
                Tools and technologies I use to create and optimize web applications.
            </p>

            <div className="gridCard">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skillCard"
                    >
                        <Image
                            src={skill.image}
                            alt={`${skill.name} Icon`}
                            width={50}
                            height={50}
                            className="skillImage"
                        />
                        <p className="skillName">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
