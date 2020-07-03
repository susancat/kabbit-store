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
                    const { title, price } = value.modalEaring;

                    if(!modalOpen) {
                        return null;
                    } else {
                        return (
                            <div className="modal">
                        <div className="container">
                            <div className="row">
                                <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                    <h4>item added to the cart</h4>
                                    {/* <img scr={img1x} className="img-fluid" alt="earing" /> */}
                                    <h4>{title}</h4>
                                    <h5 className="text-muted">price: $ {price}</h5>
                                    <Link to='/earings'>
                                        <button 
                                        onClick={() => closeModal()} 
                                        className="btn btn-lg btn-success">BACK TO STORE
                                        </button>
                                    </Link>
                                    <Link to='/cart'>
                                        <button 
                                        onClick={() => closeModal()} 
                                        className="btn btn-lg btn-primary">GO TO CART
                                        </button>
                                    </Link>
                                </div>
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