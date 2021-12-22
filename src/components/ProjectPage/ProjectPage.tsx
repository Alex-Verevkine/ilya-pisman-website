import { ProjectPageProps } from "./ProjectPage.types";
import "./ProjectPage.scss";

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <div className="project-page-container">
      <h1>{project.title}</h1>
      {project.imageUrl && (
        <div>
          <picture className="project-page-image">
            <img src={project.imageUrl} alt={`${project.title}`} />
          </picture>
        </div>
      )}
      {project.videoUrl && (
        <div>
          <video src={project.videoUrl} />
        </div>
      )}
      <div className="project-page-content">{project.content}</div>
    </div>
  );
};

export default ProjectPage;
