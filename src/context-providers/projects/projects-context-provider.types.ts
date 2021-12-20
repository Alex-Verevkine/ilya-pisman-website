import { Dispatch } from "react";
import { ProjectAction } from "../../reducers";
import { ProjectsState } from "../../store";

export interface ProjectContext {
  projectsState?: ProjectsState;
  projectsDispatch: Dispatch<ProjectAction>;
}
