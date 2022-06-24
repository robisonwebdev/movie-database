import React from 'react';
import MovieHeader from './header/MovieHeader';
import MoviePosterDesktop from './poster/MoviePosterDesktop';
import '../../../styles/main/movie/MovieDesktop.css';

const MovieDesktop = ({ isMobile, movie }) => {
    
    return (
        <section className='movie_desktop'>
           <MovieHeader isMobile={isMobile} movie={movie} />
        </section>
    );
};

export default MovieDesktop;