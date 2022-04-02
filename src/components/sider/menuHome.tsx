import { Menu } from "antd";
import React from "react";
import MenuStyleDiv from "./styled";

const { SubMenu } = Menu;

const MenuHome = () => {
  return (
    <MenuStyleDiv
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <div className={"Menu-title-home"}>
        <span className={"Menu-title-home"}>
          <img
            src={require("../../assets/side/logo-github.png").default}
            style={{
              width: "35px",
              height: "35px",
            }}
            alt={"github"}
          />
          <span className={"Menu-title-home-font"}>particlec</span>
        </span>
      </div>

      <SubMenu
        key="sub1"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/home.png").default}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt={"home"}
            />
            <span style={{ marginLeft: "20px" }}>Navigation One</span>
          </span>
        }
      >
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/information.png").default}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt={"information"}
            />
            <span style={{ marginLeft: "20px" }}>Navigation Two</span>
          </span>
        }
      >
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/order.png").default}
              style={{
                width: "20px",
                height: "20px",
              }}
              alt={"order"}
            />
            <span style={{ marginLeft: "20px" }}>Navigation Three</span>
          </span>
        }
      >
        <Menu.Item key="9">Option 9</Menu.Item>
        <Menu.Item key="10">Option 10</Menu.Item>
        <Menu.Item key="11">Option 11</Menu.Item>
        <Menu.Item key="12">Option 12</Menu.Item>
      </SubMenu>
    </MenuStyleDiv>
  );
};
export default MenuHome;
