import "@/styles/about.css"
import ResumeBtn from "./resume-btn"


export default function About() {
  return (
    <section className="section">
      <h2 className="title">
        About Me
      </h2>
      <p className="paragraph">
        {`I’m a Full Stack Developer skilled in ReactJS and NextJS, focusing on building responsive, user-friendly interfaces. I continuously learn and adapt to the latest web trends to create optimized and maintainable code.`}
      </p>
      <div>
        <ResumeBtn
          href="/about"
          text="Get to Know Me"
        />
      </div>
    </section>
  );
}
