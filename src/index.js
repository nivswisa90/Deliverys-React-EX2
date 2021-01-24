import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Layout from "./Components/LayoutImage";
import Truck from "./Components/Truck";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
      <Layout />
      <Truck />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
