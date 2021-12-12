import React from "react";
import { Link } from "react-router-dom";
import "./NavBarButton.scss";
import { NavBarButtonProps } from "./NavBarButton.types";

const NavBarButton = ({ children }: NavBarButtonProps) => {
  return (
    <Link to="/dashboard" className="nav-bar-button">
      {children}
    </Link>
  );
};

export default NavBarButton;
