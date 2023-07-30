import React, { useState } from 'react'
import { useActionData } from 'react-router-dom'

export const MenuCard = ({ menu, addToCart }) => {
    //裝數量的盒子
    const [quantity, setQuantity] = useState(0);


    return (
        // 商品內容
        <div className="col-md-3 m-1 card" key={menu.id}> {/*key值是為了讓map在運行時確保抓的是正確的資料,也可以在map那邊寫(menu,index),key值就可以只寫{index}*/}
            <img className="card-img-top" src={menu.picture} alt="catFood" />
            <div className="card-body">
                <h4 className="card-title food">{menu.name}</h4>
                {/* 判斷高庫存的有HOT標籤增加點擊率 */}
                <p className="card-text">{menu.quantity > 10 ? <span className="badge bg-danger">HOT</span> : null}</p>
                <p className="card-text foodContent">{menu.characteristic}</p>
                <p className="card-text">{menu.size}</p>
                <p className="card-text">${menu.price}</p>
                {/* 商品計數 */}
                <div className="d-flex align-items-center">
                    <button className="btn btn-outline-secondary" type="button" onClick={() => setQuantity((pre) => pre - 1)}>-</button>
                    <input
                        type="text"
                        className="form-control text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                    />
                    <button className="btn btn-outline-secondary " onClick={() => setQuantity((pre) => pre + 1)}>+</button>
                </div>
                <button
                    type="button"
                    className="btn btn-warning form-control text-center"
                    onClick={() => addToCart(menu, quantity)}
                >花生要吃Ｊ個</button>
            </div>
        </div>
    )
}
