import { menuData } from "./MenuData";
import { useState, useEffect,useContext} from 'react';
import { MenuCard } from "./MenuCard";
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Main = () => {
    // const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const [cart, setCart] = useState(initialCart);
    const { cart, setCart } = useContext(CartContext);
    //Modal彈跳視窗的開關設定
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    // 用useEffect判斷當購物車狀態改變時，開啟購物車視窗
    // 避免讓她一開始就render,所以要設定if (cart.length > 0)去判斷
    useEffect(() => {
        if (cart.length > 0) { setIsModalOpen(true) };
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    //商品加入購物車
    //設定這個加入購物車中的兩個參數:商品,數量
    const addToCart = (product, quantity) => {
        //檢查目前購物車中是否已經有這個商品判,所以用數量判斷是否大於0
        if (quantity > 0) {
            //裝一個現有購物車的盒子,item是指購物車中的元素
            const existingItem = cart.find(item => item.name == product.name);
            if (existingItem) {
                const updatedCart = cart.map(item => {
                    if (item.name == product.name) {
                        // 如果購物車中已經有這個商品且庫存足夠，直接更新它的數量
                        if (item.quantity + quantity <= product.quantity) {
                            alert('購物車已有此商品,已為您累加至該商品數量')
                            return { ...item, quantity: item.quantity + quantity };
                        } else {
                            //如果庫存不足,就不增加商品
                            alert('庫存不足')
                            return item;
                        }
                    }
                });
                setCart(updatedCart);
            } else {
                // 如果購物車中沒有這個商品，加入購物車
                // 且要判斷下單的數量是否在庫存之內
                if (quantity <= product.quantity) {
                    setCart([...cart, { ...product, quantity }]);
                } else {
                    alert('庫存不足')
                }
            }
        }
        else {
            alert('請輸入大於0的數量')
        }
    };
    //購物車中的刪除按鈕
    const deleteCartItem = (index) => {
        const newCart = [...cart];
        //用splice刪掉index的索引位置的商品,1表示只刪除這一個商品
        newCart.splice(index, 1);
        //set新的購物車上去
        setCart(newCart);
    };

    return (
        <div className="wrapper2">
            <div className="container" style={{ minHeight: '100vh' }}>
                <h2 className="title2">花生の購物車</h2>
                {/* <button
                    type="button" className="btn btn-outline-warning d-flex"
                    onClick={openModal}
                    style={{ marginRight: '0px' }}
                >查看購物車</button> */}
                <div className={`modal ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog"
                    style={{ display: isModalOpen ? 'block' : 'none' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">購物車</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
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
                                                <td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <div>
                                        <button type="button" className="btn btn-warning me-2" onClick={closeModal}>繼續購物</button>
                                        <Link to="/checkout" className="btn btn-warning">結帳去</Link>
                                    </div>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    {menuData.map((menu1) => (
                        //要把MenuCard裡面的component獨立出來,這樣按鈕在下單的時候每個component才會是獨立的
                        //下面menu=是指MenuCard中的箭頭函式中的值{menu},map(menu1)是下面的{menu1}
                        <MenuCard key={menu1.id}
                            menu={menu1}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Main;