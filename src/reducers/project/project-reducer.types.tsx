import { ProjectModel } from "../../models";

export enum ProjectActionKind {
  GET_PROJECTS = "GET_PROJECTS"
}

export interface ProjectAction {
  type: ProjectActionKind;
  payload: Array<ProjectModel>;
}
