import { Dispatch } from "react";
import { AnchorScrollAction } from "../../reducers";
import { AnchorScrollState } from "../../store";

export interface AnchorScrollContextType {
  anchorScrollState?: AnchorScrollState;
  anchorScrollDispatch: Dispatch<AnchorScrollAction>;
}
