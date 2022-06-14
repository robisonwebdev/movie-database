import React from 'react';
import Poster from './header/Poster';
import '../../../styles/main/movie/MovieMobile.css';

const MovieMobile = ({ movie }) => {
    return (
        <section className='movie_mobile'>
            <section className='movie_mobile_header'>
                <Poster format='mobile' movie={movie} />
            </section>
            <section className='movie_mobile_main'>Main</section>
        </section>
    );
};

export default MovieMobile;