import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import Home from "./components/Home/Home.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
reportWebVitals();
