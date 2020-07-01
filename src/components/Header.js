import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import './App.css';

class Header extends Component {
    // renderLinks() {
    //     if(this.props.authenticated) {
    //         return (
    //             <div>
    //                 <Link to='/signout'>Sign Out</Link>
    //                 <Link to='/feature'>Feature</Link>
    //             </div>
    //         );
    //     } else {
    //         return (
    //             <div>
    //             <Link to='/signup'>Sign Up</Link>
    //             <Link to='/signin'>Sign in</Link>
    //             </div>
    //         );
    //     }
    // }

    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link to='/'>Redux Auth</Link>
                {this.renderLinks()} */}
                <Link to='/' className="navbar-brand"><span><img src={require('../img/Logo.png')} id="logo" alt="E-commerce" /></span>Kabbit</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/earings' className="nav-link">Earing</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/necklaces' className="nav-link">Necklace</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0  mr-auto">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav align-items-right">
                        <Link to='/cart' className="cart"><button className="btn btn-primary btn-lg"><i class="fas fa-cart-plus"></i> My Cart</button></Link>
                        <li className="nav-item">
                            <Link to='/signup' className="nav-link">Sign Up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signout' className="nav-link">Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// function mapStateToProps(state) {
//     return { authenticated: state.auth.authenticated }
// }
export default Header;