import { useContext, useRef, } from "react";
import AuthContext from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import './login.css';

const Login = () => {
    const ctx = useContext(AuthContext);
    const inputName = useRef();
    const inputPsd = useRef();
    const truePsd = '123';
    const handleLogin = () => {
        if (truePsd == inputPsd.current.value) {
            ctx.onLogin(inputName.current.value, inputPsd.current.value)
        } else {
            // alert('第一次登入密碼123');
            inputPsd.current.focus();
        }
    };

    const navigate = useNavigate();
    const handleCheckoutClick = () => {
        // 導向到 Checkout 頁面
        navigate("/Checkout");
    };

    return (
        <div className="formBox wrapper2" style={{ textAlign:'center',minHeight: '100vh' }}>
            <div className="container mt-3">
                <h1 className="title2">登入花生の居</h1>
                <form className='container'>
                    {!ctx.isLoggedIn && (
                        <>
                            <div class="mb-3 mt-3">
                                {/* <label formFor="text">帳號:</label> */}
                                <input style={{ width: '300px' }} ref={inputName} type="text" id="account" placeholder="請輸入暱稱" name="account" required/>
                            </div>
                            <div class="mb-3 mt-3"></div>
                            {/* <label formFor="pwd">密碼:</label> */}
                            <input style={{ width: '300px' }} ref={inputPsd} type="password" id="psd" placeholder="請輸入123" name="psd" required/>

                            <div className="form-check mb-3">
                                <label className="form-check-label mt-4">
                                    <input className="form-check-input " type="checkbox" name="remember" /> 記住帳密
                                </label>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-warning me-2">忘記密碼</button>
                                <button type="submit" className="btn btn-warning"
                                    onClick={handleLogin}>登入</button>
                            </div>
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
        </div>
    )
}

export default Login;