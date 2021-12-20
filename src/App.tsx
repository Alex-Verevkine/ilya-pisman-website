import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import { AppContainer } from "./components";
import { fetchProjects } from "./services";
import { getProjects } from "./actions";
import { ProjectsContext } from "./context-providers";

const App = () => {
  const { projectsDispatch } = useContext(ProjectsContext);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    fetchProjects().then((data) => getProjects(data)(projectsDispatch));
  }, [projectsDispatch]);

  return (
    <div className="App">
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
};

export default App;
