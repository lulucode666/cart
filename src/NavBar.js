import { Link } from "react-router-dom";
import { ShoppingCartSimple, PawPrint, User } from "@phosphor-icons/react";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm  navbar-dark bg-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">
                                <img src="./images/i-logo.png" style={{ width: 52, height: 28 }}></img>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/About' className="nav-link" style={{ fontSize: 16 }}>關於花生
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Main' className="nav-link" style={{ fontSize: 16 }}>私心愛吃
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/TyPage' className="nav-link" style={{ fontSize: 16 }}>花生報颱風
                            </Link>
                        </li>
                    </ul>
                    <div>
                        {/* 更多花生 */}
                        <button class="btn btn-outline-warning me-2" title="更多花生" style={{ width: 50, height: 40 }} >
                            <Link to='/More' className="nav-link ml-auto">
                                <PawPrint size={25} weight="light" />
                            </Link>
                        </button>
                        {/* 購物車 */}
                        <button class="btn btn-outline-warning me-2" title="查看購物車" style={{ width: 50, height: 40 }}>
                            <Link to='/Checkout' className="nav-link ml-auto">
                                <ShoppingCartSimple size={25} />
                            </Link>
                        </button>
                        {/* 登入/註冊 */}
                        <button class="btn btn-outline-warning me-2" title="登入" style={{ width: 50, height: 40 }}>
                            <Link to='/Login' className="nav-link ml-auto">
                                <User size={25} weight="light" />
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    )
};

export default NavBar;
