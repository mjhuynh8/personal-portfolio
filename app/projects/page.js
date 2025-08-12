import ProjectCard from "../components/ProjectCard";
import { projects } from "./projects";

export default function Projects() {
  return (
    <div className="container-background min-h-screen">
      <div className="p-15 flex flex-col gap-15 max-w-screen-2xl mx-auto">
        <h1
          className="text-8xl tracking-tighter 
text-balance"
        >
          Some of my work.
        </h1>
        <div className="flex flex-col gap-15">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                links={project.links}
                stack={project.stack}
                date={project.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
