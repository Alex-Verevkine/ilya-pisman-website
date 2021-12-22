import { PropsWithChildren, FC } from "react";
import { FontSize } from "../../../types/typography.types";

export type NavBarButtonProps = PropsWithChildren<
  FontSize & {
    to: string;
    scrollToRef?: string;
    color?: "white" | "black";
    onClick?: () => any;
  }
>;

export type NavBarButtonFC = FC<NavBarButtonProps>;
