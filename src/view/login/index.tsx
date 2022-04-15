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
            </div>
            <div className={"background-black-a"}>
                <div className={"login-window"}>
                    <div className={"login-window-main"}>
                        <div className={"login-thirdParty"}>
                            <div className={"login-thirdParty-font"}>Sign in with</div>
                            <div className={"login-thirdParty-label"}>
                                <a className={"github"}>
                                    <span>
                                      111
                                    </span>
                                    <span>
                                       222
                                    </span>
                                </a>
                                <a className={"google"}>
                                   <span>
                                      111
                                    </span>
                                    <span>
                                       222
                                    </span>
                                </a>
                            </div>

                        </div>
                        <div className={"login-account"}>

                        </div>

                    </div>
                    <div className={"login-window-password"}>
                        <div className={"forgot-password"}>Forgot password?</div>
                        <div className={"create-new-account"}>Create new account</div>
                    </div>
                </div>
            </div>
        </LoginStyledDiv>
    );
};
export default Login;

// 认证------https://www.cnblogs.com/ypppt/p/13332017.html
// 前端账号密码;
// 服务端给token;
// 前端调用token验证功能跳转界面;
// 访问接口时需要加token;
