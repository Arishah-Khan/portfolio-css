"use client"
import { useState } from "react";
import HtmlCssProjects from "@/components/projects/htmlCss/html-css";
import FilterBtn from "@/components/projects/filter-btn";
import { category } from "@/components/catogory";
import JavaScriptProjects from "@/components/projects/javascript/js";
import TypescriptProjects from "@/components/projects/typescript/typescript";
import NextJsProjects from "@/components/projects/nextJs/nextjs";
import "@/styles/project-page.css"



export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<category>("All");


    const categories: category[] = ["All", "HTML & CSS", "JavaScript", "TypeScript", "NextJs"];

    
    const handleCategoryChange = (category: category) => {
        setSelectedCategory(category);
    };

    return (
        <main className="project-section">
        
            <h2 className={`heading`}>
               My Projects
            </h2>

            <div className="category">
                {categories.map((category) => (
                    <FilterBtn
                        key={category}
                        label={category}
                        isSelected={selectedCategory === category}
                        onClick={() => handleCategoryChange(category)}
                    />
                ))}
            </div>

            <div className="choices">
                {selectedCategory === "All" && (
                    <>
                        <HtmlCssProjects />
                        <JavaScriptProjects />
                        <TypescriptProjects />
                        <NextJsProjects />
                    </>
                )}
                {selectedCategory === "HTML & CSS" && <HtmlCssProjects />}
                {selectedCategory === "JavaScript" && <JavaScriptProjects />}
                {selectedCategory === "TypeScript" && <TypescriptProjects />}
                {selectedCategory === "NextJs" && <NextJsProjects />}
            </div>
        </main>
    );
}
