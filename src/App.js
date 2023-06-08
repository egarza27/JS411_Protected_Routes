import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";
import Router from "./Router";
// import { Provider } from "react-redux";
// import store from "./redux/store";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
