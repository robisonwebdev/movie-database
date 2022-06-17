import React from 'react';
import '../../../../styles/main/movie/title/Rating.css';

const Rating = ({ data }) => {
    const USReleaseDates = data.results.filter(obj => obj['iso_3166_1'] === 'US');
    const theatricalReleaseDates = USReleaseDates[0]['release_dates'].filter(obj => obj.type === 3);

    const getRating = () => {
        const findRating = theatricalReleaseDates.find(({ certification }) => certification !== '');

        if (findRating === undefined) return 'NA';

        return findRating['certification'];
    };

    return (
        <p className='movie_rating'>
             {getRating()}
        </p>
    );
};

export default Rating;