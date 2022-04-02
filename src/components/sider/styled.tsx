import styled from "styled-components";
import { Menu } from "antd";

const MenuStyleDiv = styled(Menu)`
  height: 100%;
  font-family: Open Sans, sans-serif;

  div.Menu-title-home {
    height: 60px;
    width: auto;

    //HotWate HotScoll Carttoon Other FenlingShequ LikeMFriend
    span.Menu-title-home {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
        monospace;
    }

    span.Menu-title-home {
      margin: 10px;
      font-size: large;
      font-weight: bold;

      img {
        margin: 15px 10px 10px 15px;
      }

      span.Menu-title-home-font {
        margin: 15px 10px 10px 8px;
      }
    }
  }

  span.Menu-title {
    display: flex;
    align-items: center;
  }
`;
export default MenuStyleDiv;
