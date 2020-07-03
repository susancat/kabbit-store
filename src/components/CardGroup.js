import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './App.css';

const CardGroup = () => {
    return(
        <div className="row cardGroud">
            <div className="card hotIssue">
                <Link to='/earings'>
                    <img src= {require('../img/earing2-2x.jpg')} className="card-img-top" alt="earing" />
                </Link>
            <div className="card-body">
                <p className="card-text">WISH EARING</p>
            </div>
            </div>
            <div className="card hotIssue">
            <Link to='/necklaces'>
                <img src= {require('../img/neck1-2x.jpg')} className="card-img-top" alt="necklace" />
            </Link>
                <div className="card-body">
                    <p className="card-text">BRACELET</p>
                </div>
            </div>
            <div className="card hotIssue">
            <Link to='/necklaces'>
                <img src= {require('../img/jewelry1-2x.jpg')} className="card-img-top" alt="jewelry" />
            </Link>
                <div className="card-body">
                    <p className="card-text">CIRCLES</p>
                </div>
            </div>
    </div>
    );
}

export default CardGroup;