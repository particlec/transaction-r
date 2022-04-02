import styled from "styled-components";

const DivStyledPageContent = styled.div`
  width: 100%;
  height: 100%;
  //display: flex;
  div.content-left {
    width: 70%;
    float: left;
  }

  div.content-right {
    height: 700px;
    border-left: 1px solid #e5e5e5;
    float: right;
    width: 281px;
    position: relative;

    div.content-right-navigation {
      left: 25px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 40px;

      h3 {
        line-height: 2.7;
        margin-top: 25px;
        color: #617173;
        border-bottom: 1px solid #e5e5e5;
      }

      div.content-right-newTitle {
        color: #6e7173;
        //color: #444444;
        margin: 5px 0;
        font-family: "Iowan Old Style", "Ovo", "Hoefler Text", Georgia,
          "Times New Roman", "TIBch", "Source Han Sans", "PingFangSC-Regular",
          "Hiragino Sans GB", "STHeiti", "Microsoft Yahei",
          "Droid Sans Fallback", "WenQuanYi Micro Hei", sans-serif;
      }
    }
  }
`;

export default DivStyledPageContent;