import LoginStyledDiv from "./styled";

const Login = () => {
    return (
        <LoginStyledDiv>
            <div className={"text-white"}>
                <div className={"text"}>
                    <h1 className={"text-title"}>Welcome!</h1>
                    <p className={"text-content"}>
                        Use these awesome forms to login or create new account in your
                        project for free.
                    </p>
                </div>
            </div>
            <div className={"login-main"}>
                <div className={"background-blue-black"}>

                </div>

                <div className={"background-black"}>

                </div>

            </div>
        </LoginStyledDiv>
    );
};
export default Login;

//
//
// top: auto;
// left: 0;
// right: 0;
// width: 100%;
// height: 150px;
// -webkit-transform: translateZ(0);
// transform: translateZ(0);
// overflow: hidden;
// 认证------https://www.cnblogs.com/ypppt/p/13332017.html
// 前端账号密码;
// 服务端给token;
// 前端调用token验证功能跳转界面;
// 访问接口时需要加token;
