import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';

const App = ({children}) => {
        return (
            <div>
                <Header />
                {children}
                <Modal />
                <Footer />
            </div>           
        );
}

export default App;