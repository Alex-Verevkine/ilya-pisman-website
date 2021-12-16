import { PropsWithChildren, MutableRefObject } from "react";

export type MainHeaderProps = PropsWithChildren<{
  ref?: MutableRefObject<HTMLElement>;
}>;
