import React from 'react';
import '../../../../styles/main/movie/poster/MoviePosterMobile.css';

const MoviePosterMobile = ({ movie }) => {
    const { backdrop_path, poster_path, title } = movie;

    const getBackdrop = () => {
        const backdropURL = `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`;

        return <img className='movie_poster_mobile' src={backdropURL} alt={title} />
    };

    return (
        <>
            {getBackdrop()}
        </>
    );
};

export default MoviePosterMobile;