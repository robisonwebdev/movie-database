import React from 'react';
import '../../../../styles/main/movie/title/Rating.css';

const Rating = ({ data }) => {
    const USReleaseDates = data.results.filter(obj => obj['iso_3166_1'] === 'US');
    return (
        <div>
             {console.log('RD_Data:', USReleaseDates)}
        </div>
    );
};

export default Rating;