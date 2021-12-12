import React from "react";
import { MainFooter } from "..";
import { MainHeader } from "../MainHeader";
import { MainNavBar } from "../MainNavBar";

const HomePage = ({}) => {
  return (
    <div>
      <MainHeader />
      <MainNavBar />
      <div style={{ height: "100vh" }}></div>
      <MainFooter />
    </div>
  );
};

export default HomePage;
