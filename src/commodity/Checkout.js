// Checkout.js
import React, { useContext } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { cart, setCart, inventory, setInventory } = useContext(CartContext);

  // 購物車中的刪除按鈕
  const deleteCartItem = (index) => {
    const newCart = [...cart];
    // 用splice刪掉index的索引位置的商品,1表示只刪除這一個商品
    newCart.splice(index, 1);
    // 更新購物車
    setCart(newCart);
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
        } else {
          alert('庫存不足');
        }
      } else {
        if (newQuantity <= existingInventoryItem.quantity) {
          // 新增商品至購物車
          setCart([...cart, { ...product, quantity: newQuantity }]);
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
    <div className='wrapper2'>
      <div className="container" style={{ minHeight: '100vh' }}>
        <div style={{ height: '1000' }}>
          <h2 className='title2'>購物車內容</h2>
          {cart.length === 0 ? (
            <>
              <h2>喵嗚！你還沒買東西餒！</h2>
              <Link to="/Main" type="button" className="btn btn-warning me-2">購物去～</Link>
            </>
          ) : (
            <>
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
                      <td>
                        <div className="d-flex align-items-center">
                          <button className="btn btn-outline-secondary" type="button" onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                          />
                          <button className="btn btn-outline-secondary" onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
                        </div>
                      </td>
                      <td><Button color="danger" onClick={() => deleteCartItem(index)}>X</Button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h2>Total Price: ${totalPrice}</h2>
              <div>
                <Link to="/Main" type="button" className="btn btn-warning me-2">繼續購物</Link>
                <button className="btn btn-warning">結帳去</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;