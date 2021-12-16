import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, MainFooter } from "..";
import { LandingPage } from "../LandingPage";
import { MainNavBar } from "../MainNavBar";

const HomePage = (props: any) => {
  const mainHeaderRef = useRef<HTMLHeadElement>(null);
  const productsCardsGridRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <MainNavBar
        options={[
          {
            to: "/",
            scrollToRef: mainHeaderRef,
            text: "Home"
          },
          {
            to: "/",
            scrollToRef: productsCardsGridRef,
            text: "Portfolio"
          },
          {
            to: "/about",
            text: "About"
          }
        ]}
      />
      <div style={{ marginTop: "72px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                headerRef={mainHeaderRef}
                productsCardsRef={productsCardsGridRef}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <MainFooter />
      </div>
    </div>
  );
};

export default HomePage;
