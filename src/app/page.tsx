import HeroSec from "@/components/hero-section"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects/project"
import ContactMe from "@/components/contact"

export default function Home() {
  return (
    <>
       <HeroSec />
       <About />
             <Skills />
     <Projects />
      <ContactMe /> 
    </>

  )
}