import React from 'react';
import ComingSoon from './ComingSoon';
import Welcome from './Welcome';
import '../../../styles/main/home/Home.css';

const Home = () => {
    return (
        <section className='home'>
            <Welcome />
            <ComingSoon />
        </section>
    );
};

export default Home;