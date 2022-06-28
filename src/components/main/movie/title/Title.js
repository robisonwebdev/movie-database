import React from 'react';
import MovieDate from '../facts/MovieDate';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { title } = movie;

    return (
        <section className='movie_title'>
            <h3>{title}</h3>
            <MovieDate releaseDate={releaseDate} format='yyyy' />
        </section>
    );
};

export default Title;