import { Route } from "react-router-dom";
import { Layout } from "antd";
import React from "react";
import LayoutStyleDiv from "./styled";
import HeadLogin from "../head/headLogin";

const { Header, Content, Footer } = Layout;

const LayoutLogin = ({
  path,
  component: Component,
}: {
  path: string;
  component: any;
}) => {
  return (
    <Route path={path}>
      <LayoutStyleDiv>
        <Header>
          <HeadLogin />
        </Header>
        <Content>
          <Component />
        </Content>
        <Footer>Footer</Footer>
      </LayoutStyleDiv>
    </Route>
  );
};
export default LayoutLogin;
