import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';

import Header from './Header';
import Footer from './Footer';

const App = ({children}) => {
        return (
            <div>
                <Header />
                {children}
                <Footer />
            </div>
            
        );
}

export default App;