import { RefObject } from "react";

export interface ScrollToProps {
  id?: string;
  ref?: RefObject<HTMLElement>;
  duration?: number;
  positionOffset?: number;
}
