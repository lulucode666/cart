// Cart.js
import { useState, useEffect } from 'react';
import { Table, Button } from 'reactstrap';
import { menuData } from './MenuData.js';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [inventory, setInventory] = useState(menuData);
  const [quantity, setQuantity] = useState(0);
  // 從localStorage取得購物車資料
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // 購物車中的刪除按鈕
  const deleteCartItem = (index) => {
    const newCart = [...cart];
    // 用splice刪掉index的索引位置的商品,1表示只刪除這一個商品
    newCart.splice(index, 1);
    // 更新購物車並存到localStorage
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };
  const updateQuantity = (product, newQuantity) => {
    if (newQuantity > 0) {
      // 從購物車中尋找該商品
      const existingCartItem = cart.find(item => item.name == product.name);

      // 從庫存中尋找該商品
      const existingInventoryItem = inventory.find(item => item.name == product.name);

      if (existingCartItem) {
        if (newQuantity <= existingInventoryItem.quantity) {
          // 更新購物車中的商品數量
          const updatedCart = cart.map(item =>
            item.name == product.name ? { ...item, quantity: newQuantity } : item
          );
          setCart(updatedCart);

          // 更新庫存
          // const updatedInventory = inventory.map(item =>
          //   item.name == product.name ? { ...item, quantity:  newQuantity } : item
          // );
          // setInventory(updatedInventory);
        } else {
          alert('庫存不足');
        }
      } else {
        if (newQuantity <= existingInventoryItem.quantity) {
          // 新增商品至購物車
          setCart([...cart, { ...product, quantity: newQuantity }]);

          // 更新庫存
          // const updatedInventory = inventory.map(item =>
          //   item.name == product.name ? { ...item, quantity:  newQuantity } : item
          // );
          // setInventory(updatedInventory);
        } else {
          alert('庫存不足');
        }
      }
    } else {
      alert('請輸入大於0的數量');
    }
  };


  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);


  return (
    <div className="container mt-3">
      <h2>購物車內容</h2>
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
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity((pre) => pre - 1)}>-</button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                  onChange={(e) => updateQuantity(parseInt(e.target.value))}
                />
                <button className="btn btn-outline-secondary " onClick={() => setQuantity((pre) => pre + 1)}>+</button>
              </div>
              <td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button></td>
            </tr>
          ))}
          <h2>Total Price: ${totalPrice}</h2>

          <Link to="/Main" type="button" className="btn btn-warning me-2">繼續購物</Link>
          <button to="/" className="btn btn-warning">結帳去</button>
        </tbody>

      </Table>
    </div>
  );
};

export default Checkout;
