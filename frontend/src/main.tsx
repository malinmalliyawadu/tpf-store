import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getLCP, getFID, getCLS } from "web-vitals";
import "./styles/index.css";

getCLS(console.log);
getFID(console.log);
getLCP(console.log);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
