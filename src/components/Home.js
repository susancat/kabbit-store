import React from 'react';
import BootstrapCarousel from './Carousel';
import CardGroup from './CardGroup';
import Jumbotron from './Jumbotron';
import CoBranding from './CoBranding';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container">
            <BootstrapCarousel />
            <Jumbotron />
            <CardGroup />
            <CoBranding />
        </div>
    );
}

export default Home;