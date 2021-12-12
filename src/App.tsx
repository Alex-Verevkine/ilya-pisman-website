import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";

import { AppContainer } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
}

export default App;
