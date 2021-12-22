export enum AnchorScrollActionKind {
  SET_SCROLL_ANCHOR = "SET_SCROLL_ANCHOR"
}

export interface AnchorScrollAction {
  type: AnchorScrollActionKind;
  payload?: string;
}
