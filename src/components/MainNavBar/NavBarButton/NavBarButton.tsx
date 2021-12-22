import { useContext } from "react";
import { noop } from "lodash";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBarButton.scss";
import { NavBarButtonFC, NavBarButtonProps } from "./NavBarButton.types";
import { setAnchorScroll } from "../../../actions";
import { AnchorScrollContext } from "../../../context-providers";

const NavBarButton: NavBarButtonFC = ({
  to,
  scrollToRef,
  children,
  color,
  onClick = noop,
  fontSize = "small"
}: NavBarButtonProps) => {
  const { anchorScrollDispatch } = useContext(AnchorScrollContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleCLick = () => {
    onClick();
    if (location.pathname !== to) {
      navigate(to);
    }
    setAnchorScroll(scrollToRef)(anchorScrollDispatch);
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
