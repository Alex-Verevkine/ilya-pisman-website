import React from "react";
import classnames from "classnames";
import "./BurgerButton.scss";
import { BurgerButtonFC, BurgerButtonProps } from "./BurgerButton.types";

const BurgerButton: BurgerButtonFC = ({
  className,
  isOpen,
  onClick
}: BurgerButtonProps) => (
  <div
    onClick={onClick}
    className={classnames("burger-button", className, {
      open: isOpen
    })}
  >
    <div className="burger-lines" />
  </div>
);

export default BurgerButton;
