import { createContext, useReducer, FC } from "react";

import { anchorScrollReducer } from "../../reducers";
import { anchorScrollInitialState } from "../../store";
import { AnchorScrollContextType } from "./anchor-scroll-context-provider.types";

export const AnchorScrollContext = createContext<AnchorScrollContextType>(
  {} as any
);

export const AnchorScrollContextProvider: FC = ({ children }) => {
  const [anchorScrollState, anchorScrollDispatch] = useReducer(
    anchorScrollReducer,
    anchorScrollInitialState
  );
  return (
    <AnchorScrollContext.Provider
      value={{
        anchorScrollState,
        anchorScrollDispatch
      }}
    >
      {children}
    </AnchorScrollContext.Provider>
  );
};
