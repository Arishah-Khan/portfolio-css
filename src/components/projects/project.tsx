
import "@/styles/project-sec.css"
import ProjectHtmlCard from "./htmlCss/html-card";
import JavascriptCard from "./javascript/js-card";
import ResumeBtn from "../resume-btn";

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
]

const jsProjects = [
  {
      name: "Resume Builder",
      images: ["/images/resume1.png", "/images/resume2.png"],
      demoLink: "https://hackathone-mile-stone4.vercel.app/",
      codeLink: "https://github.com/Arishah-Khan/hackathoneMileStone4",
      bgColor: "#464443", 
      hoverBgColor: "#F09090", 
      textColor: "white", 
      hoverTextColor: "#8C0000",
      headingColour: "#464443",
      cardbg: "#d0cccd",
  },
  {
      name: "Calculator",
      images: ["/images/jscal1.png", "/images/jscal2.png"],
      demoLink: "https://arishah-khan.github.io/Calculator-javascript/",
      codeLink: "https://github.com/Arishah-Khan/Calculator-javascript",
      bgColor: "#B80000", 
      hoverBgColor: "#F09090", 
      textColor: "white", 
      hoverTextColor: "#8C0000",
      headingColour: "#B80000",
      cardbg: "#ffadad",
  },
  {
      name: "My Post",
      images: ["/images/post1.png", "/images/post2.png"],
      demoLink: "https://arishah-khan.github.io/My-Post/",
      codeLink: "https://github.com/Arishah-Khan/My-Post",
      bgColor: "#b57e19",
      hoverBgColor: "#f7c94c",
      textColor: "white",
      hoverTextColor: "black",
      headingColour: "#8e6518",
      cardbg: "#f5ee96",
  },
  {
      name: "Sign Up And Login Form",
      images: ["/images/sign.png", "/images/login2.png"],
      demoLink: "https://arishah-khan.github.io/signUp-LoginForm/",
      codeLink: "https://github.com/Arishah-Khan/signUp-LoginForm",
      bgColor: "#772db5",
      hoverBgColor: "#e7c6ff",
      textColor: "white",
      hoverTextColor: "black",
      headingColour: "#5b1a91",
      cardbg: "#c8b6ff",
  },
]

export default function Projects() {
  return (
    <main className="projects-section">
        <h2 className="projectsHeading">
        Projects
      </h2>
      <section className="html-sec">
        <h3 className="sectionHeading">HTML, CSS, and Bootstrap Projects</h3>
        <p className="projectDescription">
          Here are some of the projects I have created using HTML, CSS, and Bootstrap.
        </p>

        <div className="htmlGrid">
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
      

      <section className="html-sec">
        <h3 className="sectionHeading">JavaScript Projects</h3>
        <p className="projectDescription">
        Here are some of the projects I have created using JavaScript.
        </p>

        <div className="htmlGrid">
          {jsProjects.map((project, index) => (
            <div key={index} className="width-control">
              <JavascriptCard
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
      <div className="btn">
      <ResumeBtn
      href="/project" 
      text = "View All Projects"
      />
</div>
    </main>
  );
}
