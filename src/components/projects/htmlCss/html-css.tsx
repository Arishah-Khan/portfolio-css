import "@/styles/html-css.css";
import ProjectHtmlCard from "./html-card";

const projects = [
        {
            name: "Covid Website",
            images: ["/images/covidhalf.jpg", "/images/covidFull.png"],
            demoLink: "https://arishah-khan.github.io/HTML-CSS-BOOTSTRAP-Hackhathon/",
            codeLink: "https://github.com/Arishah-Khan/HTML-CSS-BOOTSTRAP-Hackhathon",
            bgColor: "#6b43bd", 
            hoverBgColor: "#60a0d1", 
            textColor: "white", 
            hoverTextColor: "black",
            headingColour: "#6b43bd", 
            cardbg: "#e2d9f3", 
        },
        {
            name: "Realstate Website",
            images: ["/images/realHalf.png", "/images/realFull.png"],
            demoLink: "https://arishah-khan.github.io/Bootstrap-figma-file/",
            codeLink: "https://github.com/Arishah-Khan/Bootstrap-figma-file",
            bgColor: "#447687", 
            hoverBgColor: "#dddad0", 
            textColor: "white", 
            hoverTextColor: "black",
            headingColour: "#447687", 
            cardbg: "#cadbe1", 
        },
        {
            name: "Ride Website",
            images: ["/images/ridehalf.png", "/images/ridefull.png"],
            demoLink: "https://arishah-khan.github.io/Assignment-4-bootsrap/",
            codeLink: "https://github.com/Arishah-Khan/Assignment-4-bootsrap",
            bgColor: "#297c2e", 
            hoverBgColor: "#c6c0c0", 
            textColor: "white", 
            hoverTextColor: "black",
            headingColour: "#297c2e", 
            cardbg: "#b6dab7", 
        },
        {
            name: "Bakery Website",
            images: ["/images/bakeryhalf.png", "/images/bakeryfull.png"],
            demoLink: "https://arishah-khan.github.io/Bootstrap-Assignment-1/",
            codeLink: "https://github.com/Arishah-Khan/Bootstrap-Assignment-1",
            bgColor: "#bc1e38", 
            hoverBgColor: "#f4cad1", 
            textColor: "white", 
            hoverTextColor: "black",
            headingColour: "#bc1e38", 
            cardbg: "#f2a9b5", 
        },
        {
            name: "Bookmark Website",
            images: ["/images/bookmarkhalf.png", "/images/bookmarkfull.png"],
            demoLink: "https://arishah-khan.github.io/CSS-4th-Assignment/",
            codeLink: "https://github.com/Arishah-Khan/CSS-4th-Assignment",
            bgColor: "#5267df", 
            hoverBgColor: "#d6dbf7", 
            textColor: "white", 
            hoverTextColor: "black",
            headingColour: "#2c3b8e", 
            cardbg: "#b5bef1", 
        },
        {
            name: "Caronavirus Website",
            images: ["/images/coronavirushalf.png", "/images/caronavirusfull.png"],
            demoLink: "https://arishah-khan.github.io/Final-Hackhaton/",
            codeLink: "https://github.com/Arishah-Khan/Final-Hackhaton",
            bgColor: "#b65ac4", 
            hoverBgColor: "#c08ce2", 
            textColor: "white", 
            hoverTextColor: "white",
            headingColour: "#782b84", 
            cardbg: "#e0f1c1", 
        },
    ];
    

export default function HtmlCssProjects() {
  return (
    <main className="mainContainer">

      <section>
        <h3 className="sectionHeading">HTML, CSS, and Bootstrap Projects</h3>
        <p className="projectDescription">
          Here are some of the projects I have created using HTML, CSS, and Bootstrap.
        </p>

        <div className="projectsGrid">
          {projects.map((project, index) => (
            <div key={index} className="width-control">
              <ProjectHtmlCard
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
