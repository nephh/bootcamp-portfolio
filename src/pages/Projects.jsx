import projects from "../data/projects";
import ProjectItem from "../components/ProjectItem";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="m-6">My Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          return (
            <ProjectItem
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
