import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage, MainFooter } from "..";
import { LandingPage } from "../LandingPage";
import { MainNavBar } from "../MainNavBar";
import { ProjectPage } from "../ProjectPage";
import { AnchorScrollContext, ProjectsContext } from "../../context-providers";
import "./AppContainer.scss";
import { scrollTo } from "../../utils";

const AppContainer = () => {
  const { projectsState } = useContext(ProjectsContext);
  const { anchorScrollState } = useContext(AnchorScrollContext);
  const mainHeaderRef = "main-header";
  const productsCardsGridRef = "products-cards-grid";

  useEffect(() => {
    const scrollAnchor = anchorScrollState?.scrollAnchor;
    if (scrollAnchor) {
      debugger;
      scrollTo({
        id: scrollAnchor,
        positionOffset: 71
      });
    }
  }, [anchorScrollState?.scrollAnchor]);

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
