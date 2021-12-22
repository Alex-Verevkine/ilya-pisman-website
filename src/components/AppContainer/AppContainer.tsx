import { useRef, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, MainFooter } from "..";
import { LandingPage } from "../LandingPage";
import { MainNavBar } from "../MainNavBar";
import { ProjectPage } from "../ProjectPage";
import { ProjectsContext } from "../../context-providers";
import "./AppContainer.scss";

const AppContainer = () => {
  const { projectsState } = useContext(ProjectsContext);
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
      <div className="app-container-content">
        {projectsState?.isProjectsLoading ? null : (
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
            {projectsState?.projects.map((project, projectIndex) => (
              <Route
                key={`project-${project.name}-${projectIndex}`}
                path={`/${project.name}`}
                element={<ProjectPage project={project} />}
              />
            ))}
          </Routes>
        )}
      </div>
      <MainFooter />
    </div>
  );
};

export default AppContainer;
