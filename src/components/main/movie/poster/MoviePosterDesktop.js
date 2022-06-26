import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/movie/poster/MoviePosterDesktop.css';

const MoviePosterDesktop = ({ movie }) => {
    const { poster_path, title } = movie;

    const getPoster = () => {
        const posterPath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;
        
        if (poster_path === null) return <MovieIcon />

        return <img src={posterPath} alt={title} />
    };

    return (
        <section className='movie_poster_desktop'>
            {getPoster()}
        </section>
    );
};

export default MoviePosterDesktop;