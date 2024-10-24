import HtmlCssProjects from "./htmlCss/html-css";
import JavaScriptProjects from "./javascript/js";
import TypescriptProjects from "./typescript/typescript";
import NextJsProjects from "./nextJs/nextjs";
import "@/styles/project.css"

export default function Projects() {
  return (
    <main id="projects" className="projects-main">
      <HtmlCssProjects />
      <TypescriptProjects />
    <JavaScriptProjects /> 
      <NextJsProjects />
    </main>
  );
}
