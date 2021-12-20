import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import { AppContainer } from "./components";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <div className="App">
      {process.env.REACT_APP_TEST}
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
}

export default App;
