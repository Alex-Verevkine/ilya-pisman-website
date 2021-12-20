import produce from "immer";
import { ProjectAction, ProjectActionKind } from ".";
import { ProjectsState } from "../../store";

const projectReducer = (state: ProjectsState, action: ProjectAction) => {
  const { type, payload } = action;
  switch (type) {
    case ProjectActionKind.GET_PROJECTS:
      return produce(state, (draft) => {
        draft.projects.push(...payload);
      });
    default:
      return state;
  }
};

export default projectReducer;
