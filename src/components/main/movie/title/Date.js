import React from 'react';
import '../../../../styles/main/movie/title/Date.css';

const Date = ({ data }) => {
    const USReleaseDates = data.results.filter(obj => obj['iso_3166_1'] === 'US');
    const theatricalReleaseDates = USReleaseDates[0]['release_dates'].filter(obj => obj.type === 3);

    return (
        <div>
            {console.log(theatricalReleaseDates)}
        </div>
    );
};

export default Date;