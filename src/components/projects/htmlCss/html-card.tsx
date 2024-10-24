import Image from "next/image";
import "@/styles/html-card.css"; 
import ProjectButton from "../project-btn";

interface CardProps {
    name: string;
    images: string[];
    demoLink: string;
    codeLink: string;
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    hoverTextColor: string;
    headingColour: string;
    cardbg: string;
}

const ProjectHtmlCard = ({
    name,
    images,
    demoLink,
    codeLink,
    bgColor,
    hoverBgColor,
    textColor,
    hoverTextColor,
    headingColour,
    cardbg,
}: CardProps) => {
    return (
        <div
            style={{
                backgroundColor: cardbg, 
                color: textColor,
                border: `1px solid ${headingColour}`,
                transition: "background-color 0.3s ease", 
            }}
            className={`card-container`}
        >
            <h3 className={`card-heading`}
               style={{
                color: ` ${headingColour}`,
                textAlign:"center"
                }}>
                {name}
            </h3>

            <div className="image-container">
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image}
                        alt={name}
                        width={i === 0 ? 120 : 50}
                        height={i === 0 ? 90 : 180}
                        className={`project-image ${i === 0 ? 'project-image-large' : 'project-image-small'} ${headingColour}`}
                        style={{
                            border: `2px solid ${headingColour}`,
                            borderRadius: "5px", 
                            objectFit: "cover",                        }}
                    />
                ))}
            </div>

            <div className="button-container">
                <ProjectButton
                    label="Live Demo"
                    link={demoLink}
                    bgColor={bgColor}
                    hoverBgColor={hoverBgColor}
                    textColor={textColor}
                    hoverTextColor={hoverTextColor}
                />
                <ProjectButton
                    label="Code"
                    link={codeLink}
                    bgColor={bgColor}
                    hoverBgColor={hoverBgColor}
                    textColor={textColor}
                    hoverTextColor={hoverTextColor}
                />
            </div>
        </div>
    );
};

export default ProjectHtmlCard;
