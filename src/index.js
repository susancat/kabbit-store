import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Earings from './components/Earings';
import Cart from './components/Cart';
import Home from './components/Home'
import Details from './components/Details';

// import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route path='/' exact component={ Home } />
            <Route path='/earings' component={ Earings } />
            <Route path='/details' component={ Details } />
            <Route path='/cart' component={ Cart } />
            {/* <Route path='/signout' component={ SignOut } />
            <Route path='/signin' component={ Signin } /> */}
        </App>
    </BrowserRouter>,
    document.querySelector("#root"));

// ServiceWorker.unregister();