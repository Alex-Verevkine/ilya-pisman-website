import React from "react";
import "./NavBarDesktop.scss";
import { NavBarButton } from "../NavBarButton";
import { NavBarDesktopFC } from "./NavBarDesktop.types";
import { NavBarDesktopProps } from ".";
import { Option } from "../MainNavBar.types";

const NavBarDesktop: NavBarDesktopFC = ({
  options = []
}: NavBarDesktopProps) => {
  return (
    <nav className="nav-bar-desktop">
      {options.map((option: Option, optionIndex) => (
        <NavBarButton
          key={`${option.to}-${optionIndex}`}
          scrollToRef={option.scrollToRef}
          to={option.to}
        >
          {option.text}
        </NavBarButton>
      ))}
    </nav>
  );
};

export default NavBarDesktop;
