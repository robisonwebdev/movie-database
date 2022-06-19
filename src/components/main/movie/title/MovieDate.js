import React from 'react';
import '../../../../styles/main/movie/title/MovieDate.css';

const MovieDate = ({ data }) => {
    const USReleaseDates = data.results.filter(obj => obj['iso_3166_1'] === 'US');
    const theatricalReleaseDates = USReleaseDates[0]['release_dates'].filter(obj => obj.type === 3);

    const getDate = () => {
        const findReleaseDate = theatricalReleaseDates.find(({ release_date }) => release_date)
        const getDate = new Date(findReleaseDate['release_date']);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth() + 1;
        const day = getDate.getUTCDate();

        return `${month}/${day}/${year} (US)`;
    };

    return (
        <p className='movie_date'>
            {getDate()}
        </p>
    );
};

export default MovieDate;