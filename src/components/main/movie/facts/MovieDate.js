import React from 'react';
import '../../../../styles/main/movie/facts/MovieDate.css';

const MovieDate = ({ releaseDate, format }) => {
    const getDate = () => {
        const findReleaseDate = releaseDate.find(({ release_date }) => release_date)
        const getDate = new Date(findReleaseDate['release_date']);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth() + 1;
        const day = getDate.getUTCDate();

        if (format === 'yyyy') return `(${year})`;

        return `${month}/${day}/${year} (US)`;
    };

    return (
        <p className='movie_date'>
            {releaseDate === null ? null : getDate()}
        </p>
    );
};

export default MovieDate;