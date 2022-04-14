import styled from "styled-components";

const LoginStyledDiv = styled.div`
  height: 100%;
  width: 100%;

  div.text-white {
    height: 360px;
    background: linear-gradient(to left, #1172ef, #11caef) !important;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: Open Sans, sans-serif;

    .text {
      width: 31%;

      .text-title {
        text-align: center;
        color: white;
      }

      .text-content {
        text-align: center;
        font-size: 16px
      }
    }
  }

  div.login-main {
    div.background-blue-black {
      background: black;
      top: auto;
      left: 0;
      right: 0;
      width: 100%;
      height: 150px;
      transform: translateZ(0);
      overflow: hidden;

    }

    div.background-black {
      background: black;
      height: 400px;
    }
  }

`;
export default LoginStyledDiv;
