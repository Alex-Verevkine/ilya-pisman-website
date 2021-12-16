import React from "react";
import "./MainNavBar.scss";
import { isDesktop } from "react-device-detect";
import { NavBarDesktop } from "./NavBarDesktop";
import { NavBarMobile } from "./NavBarMobile";
import { MainNavBarFC, MainNavBarProps } from "./MainNavBar.types";

const MainNavBar: MainNavBarFC = ({ options = [] }: MainNavBarProps) => {
  const NavBarComponent = isDesktop ? NavBarDesktop : NavBarMobile;

  return (
    <div className="nav-bar">
      <NavBarComponent options={options} />
    </div>
  );
};

export default MainNavBar;
