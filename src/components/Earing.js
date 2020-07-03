import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import './App.css';

class Earing extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.earing;
        return (
                <ProductConsumer>
                    {value => (
                        <div className="card mx-auto cardBox">
                        <div className="img-container" 
                            onClick={() => 
                                value.handleDetail(id)
                            }>
                            <Link to='/earings/details'>
                                <img src={img} className="card-img-top" alt="earing" />
                            </Link>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{title}</p>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <p id="price">$ {price}</p>
                            <button  key={id}
                                    className="cart-btn btn-primary btn-lg" 
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                            >                                
                            {inCart ? (
                            <p id="inCart" disabled>{" "}IN CART</p>) : (
                            <i class="fas fa-cart-plus" />
                            )}
                            </button>
                        </div>
                        </div>)}                      
                </ProductConsumer>
           
        );
    }
}

Earing.propTypes = {
    earing: PropTypes.shape({
        id:PropTypes.number,
        title:PropTypes.string,
        img:PropTypes.string,
        img1x:PropTypes.string,
        price:PropTypes.number,
        description: PropTypes.string,
        inCart: PropTypes.bool
        // count:PropTypes.number,
        // total: PropTypes.number
    }).isRequired
};

export default Earing;