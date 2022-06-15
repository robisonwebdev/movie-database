import React from 'react';
import '../../../../styles/main/movie/poster/MoviePosterMobile.css';

const MoviePosterMobile = ({ movie }) => {
    const { backdrop_path, poster_path } = movie;
    
    return (
        <section className='movie_poster_mobile'>MoviePosterMobile</section>
    );
};

export default MoviePosterMobile;