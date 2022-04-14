import styled from "styled-components";

const HeadStyleDiv = styled.div`
  background-color: #11cdef !important;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .ant-layout {
    border-radius: 30%;
  }

  div.head-left {
    display: flex;
    justify-content: center;
    align-items: center;

    .head-left-search {
      border-radius: 30% !important;
    }

    span.ant-input-wrapper.ant-input-group {
      border-radius: 30% !important;
    }
  }
`;
export default HeadStyleDiv;

//antd样式改动不生效
// < span className={ant-input-group-wrapper ant-input-search ant-input-search-with-button}
// 2.71828 e
//background: linear-gradient(red, blue);
// background: -webkit-linear-gradient(red, blue);
// background: -o-linear-gradient(red, blue);
// background: -moz-linear-gradient(red, blue);
// to top :颜色从下往上渐变：
// background:-webkit-linear-gradient(to top, red, blue);
// background:linear-gradient(to top,red,blue);
// to bottom :颜色从上往下渐变：
// background:-webkit-linear-gradient(to bottom, red, blue);
// background:linear-gradient(to bottom,red,blue);
// to left :颜色从右往左渐变
// background:-webkit-linear-gradient(to left, red, blue);
// background:linear-gradient(to left,red,blue);
// to right :颜色从左往右渐变：
// background:-webkit-linear-gradient(to right, red, blue);
// background:linear-gradient(to right,red,blue);
// to right :颜色从左往右渐变：
// background:-webkit-linear-gradient(to right, red, blue);
// background:linear-gradient(to right,red,blue);
// to bototm right :颜色从左上角度到右下角渐变：
// background:-webkit-linear-gradient(to right, red, blue);
// background:linear-gradient(to right,red,blue);
// to top left :颜色从右下角度到左上角渐变：
// background:-webkit-linear-gradient(to right, red, blue);
// background:linear-gradient(to right,red,blue);
