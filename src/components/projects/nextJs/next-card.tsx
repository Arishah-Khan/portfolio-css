import ProjectButton from "../project-btn";
import Image from "next/image";
import "@/styles/nextjs-card.css"; 



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

const NextjsCard = ({
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
        <div className={`card-container ${cardbg} ${headingColour}`}>
            <h3 className={`card-title ${headingColour}`}>
                {name}
            </h3>

            <div className="img-container">
                <div className="top-images">
                    {images.slice(0, 2).map((image, i) => (
                        <Image
                            key={i}
                            src={image}
                            alt={name}
                            width={120} 
                            height={100}
                            className="project-imag"
                            style={{ objectFit: 'cover' }}
                        />
                    ))}
                </div>

                <Image
                    src={images[2]} 
                    alt={name}
                    width={80} 
                    height={120}
                    className="project-image project-image-bottom"
                    style={{ objectFit: 'cover' }}
                />
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

export default NextjsCard;
