import React from 'react';
import MovieHeader from './header/MovieHeader';
import '../../../styles/main/movie/MovieMobile.css';

const MovieMobile = ({ isMobile, movie }) => {
    return (
        <section className='movie_mobile'>
            <MovieHeader isMobile={isMobile} movie={movie} />
            <section className='movie_mobile_main'>Main</section>
        </section>
    );
};

export default MovieMobile;