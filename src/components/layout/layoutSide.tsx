import { Route } from "react-router-dom";
import { Layout } from "antd";
import MenuHome from "../sider/menuHome";
import React from "react";
import Head from "../head/head";
import LayoutStyleDiv from "./styled";

const { Sider, Header, Content, Footer } = Layout;

const LayoutSide = ({
  path,
  component: Component,
}: {
  path: string;
  component: any;
}) => {
  return (
    <Route path={path}>
      <LayoutStyleDiv>
        <Sider>
          <MenuHome />
        </Sider>
        <Layout>
          <Header>
            <Head />
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </LayoutStyleDiv>
    </Route>
  );
};
export default LayoutSide;
