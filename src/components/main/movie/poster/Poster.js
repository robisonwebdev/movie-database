import React from 'react';
import MoviePosterDesktop from './MoviePosterDesktop';
import MoviePosterMobile from './MoviePosterMobile';
import '../../../../styles/main/movie/poster/Poster.css';

const Poster = ({ format, movie }) => {
    const { backdrop_path, poster_path } = movie;

    return (
        <section className='movie_header_poster'>
            {format === 'mobile' ? <MoviePosterMobile /> : <MoviePosterDesktop />}
        </section>
    );
};

export default Poster;