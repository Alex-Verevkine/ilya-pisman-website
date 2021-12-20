import { createContext, useReducer, FC } from "react";

import { projectReducer } from "../../reducers";
import { projectsInitialState } from "../../store";
import { ProjectContext } from "./projects-context-provider.types";

export const ProjectsContext = createContext<ProjectContext>({} as any);

export const ProjectsContextProvider: FC = ({ children }) => {
  const [projectsState, projectsDispatch] = useReducer(
    projectReducer,
    projectsInitialState
  );
  return (
    <ProjectsContext.Provider
      value={{
        projectsState,
        projectsDispatch
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};
