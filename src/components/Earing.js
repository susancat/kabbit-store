import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { storeEarings } from '../data';
import './App.css';
class Earing extends Component {
    state = { earings: storeEarings };
    
    render() {
        return (
            <div className="cardBox">
                {this.state.earings.map((earing) => {
                    return (    
                        <div className="card">
                            <Link to='/details'>
                                <img src={earing.img} className="card-img-top" alt="earing" />
                            </Link>
                            <div className="card-body">
                                <p className="card-text">{earing.Description}</p>
                                <button 
                                className="cart-btn" 
                                disabled={earing.inCart ? true : false}
                                onClick={() => {console.log("added to the cart")}}
                                >                                
                                {earing.inCart ? (
                                <p disabled>{" "}IN CART</p>) : (
                                    <i class="fas fa-cart-plus"></i>
                                )}
                                </button>
                                <p>$ {earing.price}</p>
                            </div>
                        </div>
                    );
                })};
            </div>            
        );
    }
}

export default Earing;