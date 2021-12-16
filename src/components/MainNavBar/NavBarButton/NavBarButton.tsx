import React from "react";
import { noop } from "lodash";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBarButton.scss";
import { NavBarButtonFC, NavBarButtonProps } from "./NavBarButton.types";

const NavBarButton: NavBarButtonFC = ({
  to,
  scrollToRef,
  children,
  color,
  onClick = noop,
  fontSize = "small"
}: NavBarButtonProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCLick = () => {
    onClick();
    if (location.pathname !== to) {
      navigate(to, {
        state: {
          scrollToRef
        }
      });
    }

    setTimeout(() => {
      scrollToRef?.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  };
  return (
    <div
      data-font-size={fontSize}
      color={color}
      onClick={handleCLick}
      className="nav-bar-button"
    >
      {children}
    </div>
  );
};

export default NavBarButton;
