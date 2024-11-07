import NextjsCard from "./next-card";
import "@/styles/nextjs.css" 

const projects = [
    {
        name: "Ice Cream Website",
        images: ["/images/ice1.png", "/images/ice2.png", "/images/ice3.png"],
        demoLink: "https://nextjs-single-page-website.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/Nextjs-Single-Page-website",
        bgColor: "#d6206b", 
        textColor: "white", 
        hoverBgColor: "ice-hover-bg", 
        hoverTextColor: "black", 
        headingColour: "ice-heading", 
        cardbg: "ice-card-bg", 
    },
    {
        name: "Grocery Website",
        images: ["/images/grocery1.png", "/images/grocery2.png" , "/images/grocery3.png"],
        demoLink: "https://multipage-website-nextjs.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/multipage-website-nextjs",
        bgColor: "#1e5e3f", 
        textColor: "white", 
        hoverBgColor: "grocery-hover-bg", 
        hoverTextColor: "black", 
        headingColour: "grocery-heading",
        cardbg: "grocery-card-bg",
    },
    {
        name: "Agency Website",
        images: ["/images/agency1.png", "/images/agency2.png" , "/images/agency3.png"],
        demoLink: "https://nextjs-css-kohl.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/nextjs-css",
        bgColor: "#5b1a91", 
        hoverBgColor: "agency-hover-bg", 
        textColor: "white", 
        hoverTextColor: "black", 
        headingColour: "agency-heading",
        cardbg: "agency-card-bg",
    },
];

export default function NextJsProjects() {
    return (
        <main className="projects-main">
            <section>
                <h3 className="sectionHeading">NextJs Projects</h3>
                <p className="projectDescription">
                    Here are some of the projects I have created using NextJs and Tailwind CSS.
                </p>

                {/* Grid layout for Projects */}
                <div className="pro-grid">
                    {projects.map((project, index) => (
                        <NextjsCard
                            key={index}
                            name={project.name}
                            images={project.images}
                            demoLink={project.demoLink}
                            codeLink={project.codeLink}
                            bgColor={project.bgColor}
                            hoverBgColor={project.hoverBgColor}
                            textColor={project.textColor}
                            hoverTextColor={project.hoverTextColor}
                            headingColour={project.headingColour}
                            cardbg={project.cardbg}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
