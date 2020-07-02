import React from 'react';
import CartItem from './CartItem';
import Cart from './Cart';

const CartList = ({value}) => {
    const {cart} = value;
    return (
        <div className="container-fluid mt-5">
            {cart.map(item => {
                return <CartItem key={item.id} item={item} value={value} />;
            })}
        </div>
    );
}

export default CartList;