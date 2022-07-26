import React from 'react';
import '../../../../styles/main/media/header/Genres.css';

const Genres = ({ media }) => {
    const { genres } = media;

    const getGenres = () => {
        const genresList = [];

        if (genres.length === 0) return null;

        genres.forEach(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    };

    return (
        <div className='media_genres'>
            {getGenres()}
        </div>
    );
};

export default Genres;