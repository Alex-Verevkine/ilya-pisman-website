import { FC, PropsWithChildren } from "react";
import { MainNavBarProps } from "../MainNavBar.types";

export type NavBarMobileProps = PropsWithChildren<{
  options: MainNavBarProps["options"];
}>;

export type NavBarMobileFC = FC<NavBarMobileProps>;
