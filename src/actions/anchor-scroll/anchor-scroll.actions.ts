import { Dispatch } from "react";
import { AnchorScrollAction, AnchorScrollActionKind } from "../../reducers";

export const setAnchorScroll =
  (data: string | undefined) => (dispatch: Dispatch<AnchorScrollAction>) => {
    dispatch({
      type: AnchorScrollActionKind.SET_SCROLL_ANCHOR,
      payload: data
    });
  };
