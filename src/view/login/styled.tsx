import styled from "styled-components";

const LoginStyledDiv = styled.div`
  height: 100%;
  width: 100%;

  div.text-white {
    height: 300px;
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

    //  画图形，本质是对css 边框、和翻转的理解   https://css-tricks.com/the-shapes-of-css/
    //  css transparent属性_css 透明颜色transparent的使用
  }

  div.login-main {
    height: 95px;
    background: linear-gradient(to left, #1172ef, #11caef);
    position: relative;

    div.background-blue-black {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 55px solid #172b4d;
      border-right: 1200px solid #172b4d;
      border-top: 55px solid transparent;
      border-left: 1200px solid transparent;
    }
  }

  div.background-black-a {
    position: relative;
    background-color: #172b4d;
    height: 500px;

    .login-window {

      z-index: 5;
      width: 446px;
      height: 592px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      .login-window-main {
        border-radius: 0.375em;
        background-color: #f7fafc;
        margin: 3px;
        width: 440px;
        height: 500px;

        .login-thirdParty {
          height: 165px;
          width: 100%;

          .login-thirdParty-font {
            padding: 20px 20px 0 20px;
            text-align: center;
          }

          // 鼠标放上去像按钮一样弹出 ,核心就是hover时 ，tran往上移动1px，阴影加深，  之前设置阴影，云彩
          .login-thirdParty-label {
            padding: 40px 85px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .github {
              border: 1px solid #172b4d;
              border-radius: 0.25em;
              width: 125px;
              height: 45px;
            }

            .google {
              border: 1px solid #172b4d;
              border-radius: 0.25em;
              width: 125px;
              height: 45px;
            }
          }
        }

        .login-account {
          height: 335px;
        }

      }

      .login-window-password {
        color: #ced4da;
        margin-top: 50px;


        display: flex;
        align-items: end;
        justify-content: space-between;
      }
    }
  }
`;
export default LoginStyledDiv;
