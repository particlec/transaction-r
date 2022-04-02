import { HashRouter, Redirect, Switch } from "react-router-dom";
import LayoutSide from "../components/layout/layoutSide";
import HomePage from "../homePage/homePage";
import React from "react";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <LayoutSide path="/gitlab.utcook.com" component={HomePage} />
        <Redirect to="/gitlab.utcook.com" />
      </Switch>
    </HashRouter>
  );
};
export default Router;
