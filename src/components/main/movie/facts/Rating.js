import React from 'react';
import '../../../../styles/main/movie/facts/Rating.css';

const Rating = ({ releaseDate }) => {
    const getRating = () => {
        const rating = releaseDate.find(({ certification }) => certification !== '');

        return rating === undefined ? 'NA' : rating['certification'];
    };

    return (
        <p className='movie_rating'>
             {releaseDate === null ? 'NA' : getRating()}
        </p>
    );
};

export default Rating;