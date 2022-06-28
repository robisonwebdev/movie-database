import React from 'react';
import MobileHeader from './header/MobileHeader';
import '../../../styles/main/movie/MovieMobile.css';

const MovieMobile = ({ isMobile, movie }) => {
    return (
        <section className='movie_mobile'>
            <MobileHeader isMobile={isMobile} movie={movie} />
            <section className='movie_mobile_main'>Main</section>
        </section>
    );
};

export default MovieMobile;