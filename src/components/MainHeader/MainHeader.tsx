import React, { forwardRef } from "react";
import { MainHeaderProps } from "./MainHeader.types";
import "./MainHeader.scss";
const MainHeader = forwardRef<HTMLHeadElement, MainHeaderProps>(
  ({ id }, ref) => {
    return <header id={id} ref={ref} className="main-header" />;
  }
);

export default MainHeader;
