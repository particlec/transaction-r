import styled from "styled-components";

const DashBoardStyledDiv = styled.div`
  background-size: 50% 100%;
  background-color: #11cdef;

  div.dashBoard-background {
    z-index: -1;

    div.dashBoard-background-blue {
      width: 100%;
      height: 250px;
      background-color: #11cdef;

      div.dashBoard-card-container {
        display: flex;
        margin: 0 15px 15px 15px;

        div.dashBoard-card {
          margin: 10px;
          flex: 1 1 20%;
          background-color: white;
          padding: 1rem 1.5rem;
          border-radius: 0.375rem;
        }
      }
    }

    div.dashBoard-background-#f8f9fe {
      width: 100%;
      height: auto;
      background-color: #f8f9fe;
    }
  }
`;

export default DashBoardStyledDiv;

// border-radius: 0.375rem; 边框圆润    border-radius-- https://www.zhangxinxu.com/wordpress/2015/11/css3-border-radius-tips/
// rem css相对单位------https://zhuanlan.zhihu.com/p/39811831
// :root {                            1
//     font-size: 0.75em;               1
// }                                  1
//
// @media (min-width: 800px) {        2
// :root {                          2
//         font-size: 0.875em;            2
//     }                                2
// }                                  2
//
// @media (min-width: 1200px) {       3
// :root {                          3
//         font-size: 1em;                3
//     }                                3
// }
// 媒体查询字体

// 字段首行缩进50像素: p { text-indent:50px; }
// 四卡片 弹性盒子
// 一
// flex-wrap 当父组件收缩后, 子组件是否换行
// flex-wrap 默认值为 nowrap 不换行,但是弹性盒子就应该
// 换行 flex-wrap :wrap
//
//
// 二
// 其卡片的样式为 flex:0 0 25%
// flex属性是flex-grow,flex-shrink,flex-basis的简写，默认值为0,1，auto
// flex:0 0 25% 等于flex-grow=0（分配父组件多余空间）+flex-shrink=0（父组件收缩时把收缩的空间分配一下）+flex-basis=25%（ 项目占据主轴的空间）
// 没搞懂为啥要这样???
//
// 三
