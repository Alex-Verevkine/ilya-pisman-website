import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./MainFooter.scss";

const MainFooter = () => {
  return (
    <footer className="main-footer">
      <a className="main-footer-link" href="tel:+972-77-7777777">
        <FontAwesomeIcon icon={faHeart} /> +972-77-7777777
      </a>
      <a className="main-footer-link" href="mailto:test@gmail.com">
        test@gmail.com
      </a>
    </footer>
  );
};

export default MainFooter;
