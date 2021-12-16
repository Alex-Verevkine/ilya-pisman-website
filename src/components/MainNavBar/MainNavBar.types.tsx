import { FC, PropsWithChildren, RefObject } from "react";

export type Option = {
  to: string;
  scrollToRef?: RefObject<HTMLElement>;
  text: string;
};

export type MainNavBarProps = PropsWithChildren<{
  options: Array<Option>;
}>;

export type MainNavBarFC = FC<MainNavBarProps>;
