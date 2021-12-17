import { PropsWithChildren, FC } from "react";

export type BurgerButtonProps = PropsWithChildren<{
  className?: string;
  isOpen?: boolean;
  onClick?: (props: any) => any;
}>;

export type BurgerButtonFC = FC<BurgerButtonProps>;
