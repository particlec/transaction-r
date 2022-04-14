import React from "react";
import DashBoardStyledDiv from "./styled";

const DashBoard = () => {
  return (
    <DashBoardStyledDiv>
      <div className={"dashBoard-background"}>
        <div className={"dashBoard-background-blue"}>
          <div className={"dashBoard-card-container"}>
            <div className={"dashBoard-card"}>
              <div className={"card-Row"}>
                <div className={"card-col-2"}>
                  <img
                    src={require("./../../assets/my.png").default}
                    style={{ width: "20px", height: "20px" }}
                    alt={""}
                  />
                </div>
              </div>
              <p>
                <span> 3.48%</span>
                <span>Since last month</span>
              </p>
            </div>
            <div className={"dashBoard-card"}>
              <div className={"card-Row"}>
                <div className={"card-col-1"}>
                  <h5 className={"card-col-h5"}>Total traffic</h5>
                  <span>957</span>
                </div>
                <div className={"card-col-2"}>
                  <img
                    src={require("./../../assets/my.png").default}
                    style={{ width: "20px", height: "20px" }}
                    alt={""}
                  />
                </div>
              </div>
              <p>
                <span> 3.48%</span>
                <span>Since last month</span>
              </p>
            </div>
            <div className={"dashBoard-card"}>
              <div className={"card-Row"}>
                <div className={"card-col-1"}>
                  <h5 className={"card-col-h5"}>Total traffic</h5>
                  <span>957</span>
                </div>
                <div className={"card-col-2"}>
                  <img
                    src={require("./../../assets/my.png").default}
                    style={{ width: "20px", height: "20px" }}
                    alt={""}
                  />
                </div>
              </div>
              <p>
                <span> 3.48%</span>
                <span>Since last month</span>
              </p>
            </div>
            <div className={"dashBoard-card"}>
              <div className={"card-Row"}>
                <div className={"card-col-1"}>
                  <h5 className={"card-col-h5"}>Total traffic</h5>
                  <span>957</span>
                </div>
                <div className={"card-col-2"}>
                  <img
                    src={require("./../../assets/my.png").default}
                    style={{ width: "20px", height: "20px" }}
                    alt={""}
                  />
                </div>
              </div>
              <p>
                <span> 3.48%</span>
                <span>Since last month</span>
              </p>
            </div>
          </div>
        </div>
        <div className={"dashBoard-background-#f8f9fe"} />
      </div>
    </DashBoardStyledDiv>
  );
};
export default DashBoard;
