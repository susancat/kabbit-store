import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Footer = () => {
    return (
        <div className="footer mt-5 jum">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to='/404' className="nav-link active">About us</Link>
                </li>
                <li className="nav-item">
                    <Link to='/404' className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                    <Link to='/404' className="nav-link">Careers</Link>
                </li>
                <li className="nav-item">
                    <Link to='/404' className="nav-link disabled" tabindex="-1" aria-disabled="true">Contact us</Link>
                </li>
            </ul>
            <div>
                <p className="text-center mt-3"> &copy; 2020 Designed and developed by Irene Zhang. All rights reserved.</p>
            </div>
       </div>
    );
}

export default Footer;
