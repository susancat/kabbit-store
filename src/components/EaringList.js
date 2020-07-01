import React, { Component } from 'react';
// import Earings from './Earing';
import Earing from './Earing';

class EaringList extends Component {
    // state = { earings: storeEarings }

    addToCart = () => {

    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        {/* <div className="row"> */}
                            <Earing />
                        {/* </div> */}
                    </div>
                </div>
            </React.Fragment>
        );//<Earing />
    }
}

export default EaringList;