import HeadStyleDiv from "./styled";
import React from "react";
import { Badge, Input } from "antd";

const { Search } = Input;

const Head = () => {
  return (
    <HeadStyleDiv>
      <div className={"head-left"}>
        <Search
          className={"head-left-search"}
          placeholder="input search text"
          // onSearch={onSearch}
          enterButton
        />
      </div>
      <div>
        <Badge count={5} size={"small"}>
          <img
            src={require("../../assets/side/information.png").default}
            style={{ width: "25px", height: "25px" }}
            alt={"information"}
          />
        </Badge>

        <img
          src={require("../../assets/my.png").default}
          style={{ width: "25px", height: "25px", marginLeft: "25px" }}
          alt={"my"}
        />
      </div>
    </HeadStyleDiv>
  );
};
export default Head;
