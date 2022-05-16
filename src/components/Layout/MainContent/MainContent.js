import React from "react";
import { Route } from "react-router";
import { Switch, BrowserRouter } from "react-router-dom";

import "./MainContent.css";
import { routes } from "../../../utils/routes";

function MainContent({ children, className }) {
  return (
    <div className="main">
      <h1>Main content</h1>
      <BrowserRouter>
        <Switch>{renderRoutes()}</Switch>
      </BrowserRouter>
    </div>
  );
}

const renderRoutes = () => {
  return routes.map((r) => (
    <Route key={r.id} path={r.path} exact={r.exact} component={r.component} />
  ));
};
export default MainContent;
