import { FC, PropsWithChildren } from "react";

export type Option = {
  to: string;
  scrollToRef?: string;
  text: string;
};

export type MainNavBarProps = PropsWithChildren<{
  options: Array<Option>;
}>;

export type MainNavBarFC = FC<MainNavBarProps>;
