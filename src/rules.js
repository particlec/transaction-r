import { Menu } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

const Rules = () => {
  const history = useHistory();
  return (
    <SubMenu
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
                width: "14px",
                height: "14px",
              }}
              alt={"home"}
            />
            <span style={{ marginLeft: "8px" }}>Dashboard</span>
          </span>
        }
      >
        <Menu.Item
          key="3"
          onClick={() => {
            history.push("/DashBoard");
          }}
        >
          Option 3
        </Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/information.png").default}
              style={{
                width: "14px",
                height: "14px",
              }}
              alt={"information"}
            />
            <span style={{ marginLeft: "8px" }}>Components</span>
          </span>
        }
      >
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub4"
        title={
          <span className={"Menu-title"}>
            <img
              src={require("../../assets/side/order.png").default}
              style={{
                width: "15px",
                height: "15px",
              }}
              alt={"order"}
            />
            <span style={{ marginLeft: "8px" }}>Examine your</span>
          </span>
        }
      >
        <Menu.ItemGroup key="g0" title="four-ot">
          <Menu.Item key="4">
            No one appears in the air. You must enter the field first
          </Menu.Item>
          <Menu.Item key="2">
            Develop strengths and avoid weaknesses and reduce expectations for
            short boards
          </Menu.Item>
          <Menu.Item>work1000</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </SubMenu>
  );
};
export default Rules;
