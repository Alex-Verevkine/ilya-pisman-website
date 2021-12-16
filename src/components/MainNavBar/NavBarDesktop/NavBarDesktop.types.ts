import { FC, PropsWithChildren } from "react";
import { MainNavBarProps } from "../MainNavBar.types";

export type NavBarDesktopProps = PropsWithChildren<{
  options: MainNavBarProps["options"];
}>;

export type NavBarDesktopFC = FC<NavBarDesktopProps>;
