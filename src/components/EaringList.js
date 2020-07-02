import React, { Component } from 'react';
import Earing from './Earing';
import { ProductConsumer } from '../context';

import './App.css';

class EaringList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                            {value => {
                               return value.earings.map(earing => {
                                   return <Earing key={earing.id} earing={earing} />
                               });
                            }}
                            {/* <Earing /> */}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );//<Earing />
    }
}

export default EaringList;