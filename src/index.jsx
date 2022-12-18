// 💖 de l'appli
import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Router";
import "./index.css"
import { BrowserRouter as Router  } from "react-router-dom";

// ReactDom.render() va chercher "root" ds l'index.html et lui greffe notre appli
const root = ReactDOM.createRoot(document.getElementById("root"));
// App = 1er composant réact
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Router>
      <Routing />
   </Router>
);

