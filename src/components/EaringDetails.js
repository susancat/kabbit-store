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
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="earing" />
                                    <h4 className="priceDetial">price: <span>$ </span>{price}</h4>
                                </div>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">Details of this Earing: </p>
                                        <p className="text-muted lead">{description}</p>
                                    </div>
                                </div>
                                <div className="row col-10 mx-auto col-md-6 my-3">
                                    <Link to='/earings' className="">
                                        <button className="btn btn-success btn-lg">Back to Earings</button>
                                    </Link>
                                        <button  className="btn btn-primary btn-lg"
                                                onClick={() => { 
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}>
                                            {inCart ? "In Cart" : "Add to Cart"}
                                        </button> 
                                </div>
                            </div>
                    );
                }}
            </ProductConsumer>           
            );
    }
}

export default EaringDetails;