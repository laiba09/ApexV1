import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

const path = window.location.pathname;

let Page;


if (path === "/about") {
  Page = About;
} else if (path === "/services") {
  Page = Services;
} else if (path === "/projects") {
  Page = Projects;
} else if (path === "/contact") {
  Page = Contact;
} else {
  Page = App;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
);