import produce from "immer";
import { AnchorScrollAction, AnchorScrollActionKind } from ".";
import { AnchorScrollState } from "../../store";

const anchorScrollReducer = (
  state: AnchorScrollState,
  action: AnchorScrollAction
) => {
  const { type, payload } = action;
  switch (type) {
    case AnchorScrollActionKind.SET_SCROLL_ANCHOR:
      return produce(state, (draft) => {
        debugger;
        draft.scrollAnchor = payload;
      });
    default:
      return state;
  }
};

export default anchorScrollReducer;
