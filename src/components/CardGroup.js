import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const CardGroup = () => {
    return(
        <div className="row cardGroud">
            <div className="card hotIssue">
                <img src= {require('../img/earing2-2x.png')} className="card-img-top" alt="earing" />
            <div className="card-body">
                <p className="card-text">Hot issues</p>
            </div>
            </div>
            <div className="card hotIssue">
                <img src= {require('../img/neck1-2x.png')} className="card-img-top" alt="necklace" />
                <div className="card-body">
                    <p className="card-text">Hot issues</p>
                </div>
            </div>
            <div className="card hotIssue">
                <img src= {require('../img/jewelry1-2x.png')} className="card-img-top" alt="jewelry" />
                <div className="card-body">
                    <p className="card-text">Hot issues</p>
                </div>
            </div>
    </div>
    );
}

export default CardGroup;