import produce from "immer";
import { ProjectAction, ProjectActionKind } from ".";
import { ProjectsState } from "../../store";

const projectReducer = (state: ProjectsState, action: ProjectAction) => {
  const { type, payload } = action;
  switch (type) {
    case ProjectActionKind.GET_PROJECTS_STARTED:
      return produce(state, (draft) => {
        draft.isProjectsLoading = true;
      });
    case ProjectActionKind.GET_PROJECTS:
      return produce(state, (draft) => {
        if (payload && Array.isArray(payload)) {
          draft.projects.push(...payload);
        }
        draft.isProjectsLoading = false;
      });
    default:
      return state;
  }
};

export default projectReducer;
