// Routing page
// Remember to install react router dom via command npm i react-router-dom
// Remember to import and render Browser router in index.js

import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./Landingpage";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Landingpage} />
    <Route exact path="/Skills" component={Skills} />
    <Route exact path="/Contact" component={Contact} />
    <Route exact path="/Projects" component={Projects} />
    <Route exact path="/Resume" component={Resume} />
  </Switch>
);

export default Router;
