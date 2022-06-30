import React from 'react';
import Searchbar from './searchbar/Searchbar';
import Welcome from './welcome/Welcome';
import '../../../styles/main/home/Home.css';

const Home = () => {
    return (
        <section className='home'>
            <Welcome />
            <Searchbar />
        </section>
    );
};

export default Home;