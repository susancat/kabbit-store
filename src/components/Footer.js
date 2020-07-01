import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const Footer = () => {
    return (
        <div className="footer">
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#">About us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Careers</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Contact us</a>
                    <p>zhangjiayu71@gmail.com</p>
                </li>
            </ul>
            <div>
                <p> &copy; 2020 Designed and developed by Irene Zhang. All rights reserved.</p>
            </div>
       </div>
    );
}

export default Footer;
