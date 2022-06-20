import React from 'react';
import MovieDate from './MovieDate';
import Genres from './Genres';
import Rating from './Rating';
import Runtime from './Runtime';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { genres, release_dates, runtime, title } = movie;

    return (
        <section className='movie_header_title'>
            <div className='movie_title'>
                <h3>{title}</h3>
                <MovieDate data={release_dates} format='yyyy' />
            </div>
            <div className='movie_mini_info'>
                <Rating data={release_dates} />
                &#8226;
                <MovieDate data={release_dates} />
                &#8226;
                <Genres genres={genres} />
                &#8226;
                <Runtime runtime={runtime} />
            </div>
        </section>
    );
};

export default Title;