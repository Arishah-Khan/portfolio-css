import Image from "next/image";
import "@/styles/typescript-card.css"



interface CardProps {
    name: string; 
    image: string; 
    npmLink: string; 
    codeLink: string; 
}

const TypescriptCard: React.FC<CardProps> = ({
    name,
    image,
    npmLink,
    codeLink,
}) => {
    return (
        <div className="typescript-cards">
            {/* Project Name */}
            <h3 className="project-name">
                {name}
            </h3>

            <div className="flex justify-center mb-4">
                <Image
                    src={image}
                    alt={name}
                    width={200} 
                    height={160} 
                    className="projects-image"
                    style={{ objectFit: 'cover' }}
                />
            </div>

            <div className="buttons-container">
                <a href={npmLink} className="button">NPM</a>
                <a href={codeLink} className="button">GitHub</a>
            </div>
        </div>
    );
};

export default TypescriptCard;
