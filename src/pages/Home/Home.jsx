import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;