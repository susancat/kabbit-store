import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ProductProvider } from './context';

import App from './components/App';
import EaringList from './components/EaringList';
import Cart from './components/Cart';
import Home from './components/Home'
import EaringDetails from './components/EaringDetails';
// import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <ProductProvider>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={ Home } />
                <Route path='/earings' exact component={ EaringList } />
                <Route path='/earings/details' component={ EaringDetails } />
                <Route path='/cart' component={ Cart } />
                {/* <Route path='/signout' component={ SignOut } />
                <Route path='/signin' component={ Signin } /> */}
            </App>
        </BrowserRouter>
    </ProductProvider>,
    document.querySelector("#root"));

// ServiceWorker.unregister();