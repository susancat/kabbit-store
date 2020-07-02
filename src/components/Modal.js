import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

import './App.css';

class Modal extends Component {
    render() {
        return (      
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalEaring;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                        <div className="container modal">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-la-4 text-center text-capitalize">
                                    <h5>item added to the cart</h5>
                                    <img scr={img} className="img-fluid" alt="earing" />
                                    <h5>{title}</h5>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to='/earings'>
                                        <button 
                                        onClick={() => closeModal()} 
                                        className="btn btn-lg btn-success">continue shopping
                                        </button>
                                    </Link>
                                    <Link to='/cart'>
                                        <button 
                                        onClick={() => closeModal()} 
                                        className="btn btn-lg btn-primary">go to cart
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

export default Modal;