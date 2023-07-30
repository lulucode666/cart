import React, { createContext, useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MenuCard } from './MenuCard';
import { Button, Table } from 'reactstrap';
import { menuData } from './MenuData';

// Create a Context for sharing the cart state across components
export const CartContext = createContext();

const Cart = () => {
    const { cart, deleteCartItem } = useContext(CartContext);
    return (
        <div className="container mt-3">
            <h2>您的購物車</h2>
            <Table>
                <thead>
                    <tr>
                        <th>商品名稱</th>
                        <th>價格</th>
                        <th>數量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td><Button color="danger" onClick={() => deleteCartItem(index)}>刪除</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Link to="/">返回商店</Link>
        </div>
    );
};

const Main = () => {
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);
    // ... (similar to previous Main component)
};

const App = () => {
    const cartContextValue = useContext(Main);
    return (
        <CartContext.Provider value={cartContextValue}>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">商店</Link></li>
                        <li><Link to="/cart">購物車</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </CartContext.Provider>
    );
};

export default App;
