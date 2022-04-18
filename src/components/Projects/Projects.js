import { useContext } from "react";
import ScrollContext from "../../helpers/context/scrollContext";
import Project from "../Shared/Project/Project";
import { projects } from "../../config/projects";
import "./Projects.css";

export default function Projects() {
  const { projectSection } = useContext(ScrollContext);
  return (
    <section className="projects" ref={projectSection}>
      <h1 className="projects__header">Projects</h1>
      <div className="projects__container">
        {projects.map((project, i) => {
          // not good to use i as key
          // will fix later when unique projects are configured
          return <Project key={i} project={project} />;
        })}
      </div>
    </section>
  );
}
