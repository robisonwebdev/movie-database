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
            <h3>{title}</h3>
            <div>
                <div>
                    <Rating data={release_dates} />
                    <MovieDate data={release_dates} />
                    <Genres data={genres} />
                    <Runtime data={runtime} />
                </div>
            </div>
        </section>
    );
};

export default Title;