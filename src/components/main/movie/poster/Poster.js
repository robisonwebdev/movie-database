import React from 'react';
import MoviePosterDesktop from './MoviePosterDesktop';
import MoviePosterMobile from './MoviePosterMobile';
import '../../../../styles/main/movie/poster/Poster.css';

const Poster = ({ isMobile, movie }) => {
    const { backdrop_path, poster_path } = movie;

    return (
        <section className='movie_header_poster'>
            {isMobile ? <MoviePosterMobile movie={movie} /> : <MoviePosterDesktop movie={movie} />}
        </section>
    );
};

export default Poster;