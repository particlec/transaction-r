import { HashRouter, Redirect, Switch } from "react-router-dom";
import LayoutSide from "../components/layout/layoutSide";
import HomePage from "../homePage/homePage";
import React from "react";
import DashBoard from "../view/dashBoard";
import LayoutLogin from "../components/layout/layoutLogin";
import Login from "../view/login";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <LayoutSide path="/gitlab.utcook.com" component={HomePage} />
        <LayoutSide path="/DashBoard" component={DashBoard} />
        <LayoutSide path="/auth/login" component={DashBoard} />
        <LayoutLogin path="/home" component={Login} />
        <Redirect to="/gitlab.utcook.com" />
      </Switch>
    </HashRouter>
  );
};
export default Router;
