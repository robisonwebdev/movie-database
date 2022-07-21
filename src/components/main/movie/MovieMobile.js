import React from 'react';
import MobileHeader from '../media/header/MobileHeader';
import '../../../styles/main/movie/MovieMobile.css';

const MovieMobile = ({ movie }) => {
    return (
        <section className='movie_mobile'>
            <MobileHeader movie={movie} />
            <section className='movie_mobile_main'>Main</section>
        </section>
    );
};

export default MovieMobile;