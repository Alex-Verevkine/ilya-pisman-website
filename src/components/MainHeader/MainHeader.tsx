import React, { forwardRef } from "react";
import { MainHeaderProps } from "./MainHeader.types";
import "./MainHeader.scss";
const MainHeader = forwardRef<HTMLHeadElement, MainHeaderProps>(
  (props, ref) => {
    return <header ref={ref} className="main-header" />;
  }
);

export default MainHeader;
