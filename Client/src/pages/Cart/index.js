import React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem } from './cartSlice';

function Cart(props) {
    const productCart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const handleAddItem = (product) => {
        dispatch(addItem(product));
    };
    const handleDelItem = (product) => {
        dispatch(delItem(product));
    };

    const total__price = productCart.reduce((total, currentValue) => {
        return total + currentValue.qty * currentValue.price;
    }, 0);

    const TOTAL = total__price.toFixed(2);
    return (
        <div className="container">
            <div className="cart__wrap">
                {productCart.map((product) => {
                    const itemPrice = (product.qty * product.price).toFixed(2);
                    return (
                        <div key={product.id} className="cart">
                            <div className="cart__preview">
                                <img src={product.imageUrl} className="cart__img" alt={product.name} />
                            </div>
                            <div className="cart__detail">
                                <h3 className="cart__name">{product.name}</h3>
                                <h2 className="cart__price mg-sm">
                                    {` ${product.qty} x  ${new Intl.NumberFormat('vi-VN').format(
                                        product.price,
                                    )}  =  ${new Intl.NumberFormat('vi-VN').format(itemPrice)} VNĐ`}
                                </h2>
                                <div>
                                    <FontAwesomeIcon
                                        icon="fa-solid fa-2xs fa-minus"
                                        className="cart__btn btn--decr"
                                        onClick={() => handleDelItem(product)}
                                    />

                                    <FontAwesomeIcon
                                        icon="fa-solid fa-2xs fa-plus"
                                        className="cart__btn btn--add"
                                        onClick={() => handleAddItem(product)}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
                <hr />
                {productCart.length === 0 ? (
                    <p className="total__price">Giỏ hàng trống</p>
                ) : (
                    <p className="total__price"> Tổng : {new Intl.NumberFormat('vi-VN').format(TOTAL)} VNĐ </p>
                )}
            </div>
        </div>
    );
}

export default Cart;
