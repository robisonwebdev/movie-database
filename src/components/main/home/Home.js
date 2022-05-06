import React from 'react';
import ComingSoon from './ComingSoon';
import PopularMedia from './PopularMedia';
import Welcome from './Welcome';
import '../../../styles/main/home/Home.css';

const Home = () => {
    return (
        <section className='home'>
            <Welcome />
            <ComingSoon />
            <PopularMedia />
        </section>
    );
};

export default Home;