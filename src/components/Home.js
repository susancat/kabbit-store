import React from 'react';
import BootstrapCarousel from './Carousel';
import CardGroup from './CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div className="container">
            <BootstrapCarousel />
            <CardGroup />
        </div>
    );
}

export default Home;