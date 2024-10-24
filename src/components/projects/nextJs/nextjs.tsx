import NextjsCard from "./next-card";
import "@/styles/nextjs.css" 

const projects = [
    {
        name: "Ice Cream Website",
        images: ["/images/ice1.png", "/images/ice2.png", "/images/ice3.png"],
        demoLink: "https://nextjs-single-page-website.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/Nextjs-Single-Page-website",
        bgColor: "ice-bg", 
        hoverBgColor: "ice-hover-bg", 
        textColor: "text-white", 
        hoverTextColor: "hover-black", 
        headingColour: "ice-heading", 
        cardbg: "ice-card-bg", 
    },
    {
        name: "Grocery Website",
        images: ["/images/grocery1.png", "/images/grocery2.png" , "/images/grocery3.png"],
        demoLink: "https://multipage-website-nextjs.vercel.app/",
        codeLink: "https://github.com/Arishah-Khan/multipage-website-nextjs",
        bgColor: "grocery-bg", 
        hoverBgColor: "grocery-hover-bg", 
        textColor: "text-white", 
        hoverTextColor: "hover-black", 
        headingColour: "grocery-heading",
        cardbg: "grocery-card-bg",
    },
];

export default function NextJsProjects() {
    return (
        <main className="projects-main">
            <section>
                <h3>NextJs Projects</h3>
                <p>
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
