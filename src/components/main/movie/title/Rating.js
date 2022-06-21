import React from 'react';
import '../../../../styles/main/movie/title/Rating.css';

const Rating = ({ data }) => {
    const USReleaseDates = data.results.filter(obj => obj['iso_3166_1'] === 'US');
    let theatricalReleaseDates;
    let findRating;

    const getRating = () => {
        if (USReleaseDates.length === 0) {
            findRating = undefined;
        } else {
            theatricalReleaseDates = USReleaseDates[0]['release_dates'].filter(obj => obj.type === 3);
            findRating = theatricalReleaseDates.find(({ certification }) => certification !== '');
        };

        return findRating === undefined ? 'NA' : findRating['certification'];
    };

    return (
        <p className='movie_rating'>
             {getRating()}
        </p>
    );
};

export default Rating;