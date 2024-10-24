import ProjectButton from "../project-btn";
import Image from "next/image";
import "@/styles/js-card.css";

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

const JavascriptCard = ({
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
            className="cardContainer"
            style={{
                backgroundColor: cardbg, 
                borderColor: headingColour, 
            }}>
            <h3
                className="card-heading"
                style={{
                    color: headingColour, 
                }}>
                {name}
            </h3>

            <div className="image-container">
                {images.map((image, i) => (
                    <Image
                        key={i}
                        src={image}
                        alt={name}
                        width={i === 0 ? 130 : 90}
                        height={i === 0 ? 90 : 160}
                        className={i === 0 ? 'image-large' : 'image-small'}
                        style={{
                            borderColor: headingColour, 
                        }}
                    />
                ))}
            </div>

            <div className="buttons-container">
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

export default JavascriptCard;
