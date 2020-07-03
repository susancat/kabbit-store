import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

class EaringDetails extends Component {
    // state = { detail: detailEaring };

    // addToCart = (id) => {
    //     console.log(`hello from id ${id} product`);
    // }

    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, title, img, price, inCart, description } = value.detailEaring;
                    return (
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5 jum">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="earing" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <h2 className="text-capitalize font-weight-bold mt-3 mb-3">Details of this Earing: </h2>
                                    <h3 className="priceDetial mt-10">price: <span>$ </span>{price}</h3>
                                    <h3 className="text-muted mt-5 mb-5">{description}</h3>
                                    <div className="">  
                                        <Link to='/earings' className="">
                                            <button className="btn btn-success btn-lg float-right">Back to Earings</button>
                                        </Link>
                                            <button  className="btn btn-primary btn-lg float-right"
                                                    onClick={() => { 
                                                        value.addToCart(id);
                                                        value.openModal(id);
                                                    }}>
                                                {inCart ? "In Cart" : "Add to Cart"}
                                            </button> 
                                    </div>
                                    
                                </div>
                            </div>
                        </div>   
                    );
                }}
            </ProductConsumer>           
            );
    }
}

export default EaringDetails;