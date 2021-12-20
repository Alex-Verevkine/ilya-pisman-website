import { Dispatch } from "react";
import { ProjectModel } from "../../models";
import { ProjectAction, ProjectActionKind } from "../../reducers";

export const getProjects =
  (data: Array<ProjectModel>) => (dispatch: Dispatch<ProjectAction>) => {
    dispatch({
      type: ProjectActionKind.GET_PROJECTS,
      payload: data
    });
  };
