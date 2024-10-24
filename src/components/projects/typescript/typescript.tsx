import TypescriptCard from "./typescript-card";
import "@/styles/typescript.css"; // Import custom CSS



const projects = [
    {
        name: "Calculator",
        image: "/images/calculator.png", 
        npmLink: "https://www.npmjs.com/package/n8ka3-simple-calculator",
        codeLink: "https://github.com/Arishah-Khan/Project_00-Simple-Command-Line-Calculator-with-npx-",
      
    },
    {
        name: "Currency Converter",
        image: "/images/currency.png", 
        npmLink: "https://www.npmjs.com/package/@arishah/currency-convertor", 
        codeLink: "https://github.com/Arishah-Khan/Project-04-CLI-based-Currency-Convertor",
    },
    {
        name: "Word Counter",
        image: "/images/wordcounter.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/word_counter_project", // npm link
        codeLink: "https://github.com/Arishah-Khan/Project-05-CLI-based-Word-Counter",
    },
    
    {
        name: "Student Management System",
        image: "/images/student.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/std23_student_management_system", // npm link
        codeLink: "https://github.com/Arishah-Khan/CLI-Student-Management-System",
    
    },
    {
        name: "Adventure Game",
        image: "/images/game.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/adventure_game", // npm link
        codeLink: "https://github.com/Arishah-Khan/project07_adventure_game",
     
    },
    {
        name: "Quiz App",
        image: "/images/quiz.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/quiz_project", // npm link
        codeLink: "https://github.com/Arishah-Khan/project08_quiz",
    
    },
    {
        name: "Number Guessing Game",
        image: "/images/guessing.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/cli-number-guessing-game", // npm link
        codeLink: "https://github.com/Arishah-Khan/CLI-Number-Guessing-Game",
  
    },
    {
        name: "ATM Machine",
        image: "/images/atm.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/atm_machine", // npm link
        codeLink: "https://github.com/Arishah-Khan/Project_02-CLI-ATM-Machine",
      
    },
    {
        name: "Todo App",
        image: "/images/todo.png", // Single image URL
        npmLink: "https://www.npmjs.com/package/@arishah/todolists", // npm link
        codeLink: "https://github.com/Arishah-Khan/CLI-based-TODO-List",
       
    }
];

export default function TypescriptProjects() {
    return (
        <main className="typescript-projects-container">
            <section>
                <h3>TypeScript Projects</h3>
                <p>Here are some of the projects I have created using TypeScript.</p>

                <div className="projectsGrds">
                    {projects.map((project, index) => (
                        <div key={index} className="projects-crd">
                            <TypescriptCard
                                name={project.name}
                                image={project.image}
                                npmLink={project.npmLink}
                                codeLink={project.codeLink}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
