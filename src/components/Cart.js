import React, { Component } from 'react';
import CartCol from './CartCol';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

import './App.css';

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <h1 className="text-center jum">Your Cart</h1>
                                <CartCol />
                                <CartList value={value} />
                                <CartTotals value={value} history={this.props.history} />
                                </React.Fragment>
                            );
                        } else {
                            return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;