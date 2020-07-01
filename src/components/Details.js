import React, { Component } from 'react';
import { detailProduct } from '../data';

class Details extends Component {
    state = { details: detailProduct }

    handleDetail = () => {
        console.log(this.state.details);
    }

    render() {
        return (
            <div>
                Details!
            </div>
        );
    }
}

export default Details;