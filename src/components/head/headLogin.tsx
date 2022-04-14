import LoginStyled from "./loginStyled";
import React from "react";

const HeadLogin = () => {
  return (
    <LoginStyled
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "64px",
      }}
    >
      <div className={"login-head-left"}>
        <img src={require("./../../assets/slp-icon.png")} alt={"log"} />
        <div className={"left-font"}>ParticleC</div>
        <ul style={{ display: "flex" }}>
          <li>dashboard</li>
          <li>transaction</li>
          <li>scrip</li>
          <li>login</li>
          <li>register</li>
        </ul>
      </div>
      <div className={"login-head-right"}>
        <div>2</div>
      </div>
    </LoginStyled>
  );
};
export default HeadLogin;
