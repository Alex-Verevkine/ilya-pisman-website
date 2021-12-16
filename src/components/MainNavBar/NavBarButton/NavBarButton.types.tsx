import { PropsWithChildren, FC, RefObject } from "react";
import { FontSize } from "../../../types/typography.types";

export type NavBarButtonProps = PropsWithChildren<
  FontSize & {
    to: string;
    scrollToRef?: RefObject<HTMLElement>;
    color?: "white" | "black";
    onClick?: () => any;
  }
>;

export type NavBarButtonFC = FC<NavBarButtonProps>;
