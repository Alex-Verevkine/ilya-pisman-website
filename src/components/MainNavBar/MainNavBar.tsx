import React from "react";
import "./MainNavBar.scss";
import { NavBarButton } from "./NavBarButton";
const MainNavBar = ({}) => {
  return (
    <nav className="nav-bar">
      <NavBarButton>Home</NavBarButton>
      <NavBarButton>Portfolio</NavBarButton>
      <NavBarButton>About</NavBarButton>
    </nav>
  );
};

export default MainNavBar;
