import React, { useState } from "react";
import classnames from "classnames";
import { Sling as Hamburger } from "hamburger-react";
import { Transition } from "react-transition-group";
import "./NavBarMobile.scss";
import { NavBarButton } from "../NavBarButton";
import { NavBarMobileFC } from "./NavBarMobile.types";
import { NavBarMobileProps } from ".";
import { Option } from "../MainNavBar.types";

const NavBarMobile: NavBarMobileFC = ({ options = [] }: NavBarMobileProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const classNames = classnames("nav-bar-mobile", {
    "nav-bar-mobile-open": isMenuOpen
  });

  const handleCloseFLoatingMenu = () => setIsMenuOpen(false);
  return (
    <nav className={classNames}>
      <Hamburger
        size={24}
        rounded
        easing="ease-in-out"
        toggled={isMenuOpen}
        onToggle={setIsMenuOpen}
        label="nav-bar-mobile-hamburger"
      />

      <Transition timeout={1000} appear={isMenuOpen} in={isMenuOpen}>
        {(state) => {
          return (
            <div
              onClick={handleCloseFLoatingMenu}
              className={`nav-bar-mobile-floating-menu fade ${state}`}
            >
              {options.map((option: Option, optionIndex) => (
                <NavBarButton
                  color="white"
                  fontSize="medium"
                  key={`${option.to}-${optionIndex}`}
                  scrollToRef={option.scrollToRef}
                  to={option.to}
                  onClick={handleCloseFLoatingMenu}
                >
                  {option.text}
                </NavBarButton>
              ))}
            </div>
          );
        }}
      </Transition>
    </nav>
  );
};

export default NavBarMobile;
