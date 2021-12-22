import { ProjectModel } from "../../models";

export enum ProjectActionKind {
  GET_PROJECTS = "GET_PROJECTS",
  GET_PROJECTS_STARTED = "GET_PROJECTS_REQUESTED"
}

export interface ProjectAction {
  type: ProjectActionKind;
  payload?: Array<ProjectModel>;
}
