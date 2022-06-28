import React from 'react';
import '../../../../styles/main/movie/facts/Genres.css';

const Genres = ({ genres }) => {
    const getGenres = () => {
        const genresList = [];

        genres.forEach(genre => {
            genresList.push(genre.name);
        });

        return genresList.join(', ');
    };

    return (
        <p className='movie_genres'>
            {getGenres()}
        </p>
    );
};

export default Genres;