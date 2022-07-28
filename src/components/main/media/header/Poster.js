import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/media/header/Poster.css';

const Poster = ({ media }) => {
    const { name, poster_path, title } = media;

    const getPoster = () => {
        const posterURL = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;

        if (poster_path === null) return <MovieIcon />

        return <img src={posterURL} alt={name || title} />
    };

    return (
        <div className='media_poster'>
            {getPoster()}
        </div>
    );
};

export default Poster;