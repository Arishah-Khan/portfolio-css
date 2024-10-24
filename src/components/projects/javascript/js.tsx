import JavascriptCard from "./js-card";
import "@/styles/js.css";


const jsProjects = [
    {
        name: "Calculator",
        images: ["/images/jsCal1.png", "/images/jsCal2.png"],
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
    {
        name: "Quiz App",
        images: ["/images/quiz1.png", "/images/quiz2.png"],
        demoLink: "https://arishah-khan.github.io/quiz-app-javaascript/",
        codeLink: "https://github.com/Arishah-Khan/quiz-app-javaascript",
        bgColor: "#487c69",
        hoverBgColor: "#D3EE98",
        textColor: "white",
        hoverTextColor: "black",
        headingColour: "#2f604e",
        cardbg: "#b8e893",
    },
    {
        name: "My Todo List",
        images: ["/images/todo1.png", "/images/todo2.png"],
        demoLink: "https://arishah-khan.github.io/Todo-App/",
        codeLink: "https://github.com/Arishah-Khan/Todo-App",
        bgColor: "#000080",
        hoverBgColor: "#87cefa",
        textColor: "white",
        hoverTextColor: "black",
        headingColour: "#000080",
        cardbg: "#1beaf4",
    },
];

export default function JavaScriptProjects() {
    return (
        <main>
            <section>
                <h3>JavaScript Projects</h3>
                <p >
                    Here are some of the projects I have created using JavaScript.
                </p>

                <div className="projects-grid">
                    {jsProjects.map((project, index) => (
                        <div key={index} className="projects-card">
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
        </main>
    );
}
