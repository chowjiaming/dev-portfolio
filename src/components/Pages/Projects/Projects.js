import { useContext } from "react";
import ScrollContext from "../../../context/scrollContext";
import Project from "./Project/Project";
import { projects } from "../../../config/projects";
import "./Projects.css";

export default function Projects() {
  const { projectSection } = useContext(ScrollContext);
  return (
    <section className="projects" ref={projectSection}>
      <h1 className="projects__header">Projects</h1>
      <div className="projects__container">
        {projects.map((project) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              screenshot={project.screenshot}
              github={project.github}
              link={project.link}
              shortDesc={project.shortDesc}
              longDesc={project.longDesc}
            />
          );
        })}
      </div>
    </section>
  );
}
