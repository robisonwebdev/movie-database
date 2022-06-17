import React from 'react';
import '../../../../styles/main/movie/title/Rating.css';

const Rating = ({ data }) => {
    const USReleaseDates = data.results.filter(obj => obj['iso_3166_1'] === 'US');
    const theatricalReleaseDates = USReleaseDates[0]['release_dates'].filter(obj => obj.type === 3);
    const movieRating = theatricalReleaseDates[0]['certification'];

    const getRating = () => {
        const findRating = theatricalReleaseDates.find(({ certification }) => certification !== '');

        if (findRating === undefined) return 'NA';

        return findRating['certification'];
    };

    return (
        <div>
             {console.log('RD_Data:', getRating())}
        </div>
    );
};

export default Rating;