import React from 'react';
import '../../../../styles/main/movie/overview/Overview.css';

const Overview = ({ movie }) => {
    const { overview } = movie;

    const getOverview = () => {
        if (overview === '') return 'No overview available.';

        return overview;
    };

    return (
        <section className='movie_header_overview'>
            <h3>Overview</h3>
            <p>
                {getOverview()}
            </p>
        </section>
    );
};

export default Overview;