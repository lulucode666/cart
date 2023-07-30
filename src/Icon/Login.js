import { useContext, useRef, } from "react";
import AuthContext from "../store/AuthContext";
import { useNavigate  } from "react-router-dom";

const Login = () => {
    const ctx = useContext(AuthContext);
    const inputName = useRef();
    const inputPswd = useRef();
    const truePswd = 123;
    const handleLogin = () => {
        if (truePswd == inputPswd.current.value) {
            ctx.onLogin(inputName.current.value, inputPswd.current.value)
        } else {
            alert('密碼錯誤');
            inputPswd.current.focus();
        }
    };

    const navigate = useNavigate();
    const handleCheckoutClick = () => {
        // 導向到 Checkout 頁面
        navigate("/Checkout");
    };

    return (
        <div class="container mt-3">
            <h2>登入花生の居</h2>
            <form>
                {!ctx.isLoggedIn && (
                    <>
                        <div class="mb-3 mt-3">
                            <label formFor="text">帳號:</label>
                            <input ref={inputName} type="text" class="form-control" id="account" placeholder="請輸入帳號" name="account" />
                        </div>
                        <div class="mb-3 mt-3"></div>
                        <label formFor="pwd">密碼:</label>
                        <input ref={inputPswd} type="password" class="form-control" id="pwd" placeholder="請輸入密碼" name="pswd" />

                        <div class="form-check mb-3">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="remember" /> Remember me
                            </label>
                        </div>

                        <button type="submit" class="btn btn-warning"
                            onClick={handleLogin}>登入</button>
                    </>
                )}

                {ctx.isLoggedIn && (
                    <>
                        <h5>喵嗚 ~ {ctx.name} ~ 歡迎回來~</h5>
                        <button type="submit" class="btn btn-warning me-2"
                            onClick={() => ctx.onLogout()}>登出</button>
                        <button type="submit" class="btn btn-warning me-2"
                            onClick={handleCheckoutClick}>查看購物車</button>
                    </>
                )}
            </form>
        </div>
    )
}

export default Login;