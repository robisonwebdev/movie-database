import React from 'react';
import '../../../../styles/main/media/header/Overview.css';

const Overview = ({ media }) => {
    const { overview } = media;

    const getOverview = () => {
        if (overview === '' || overview === null) return 'No overview available.'

        return overview;
    };

    return (
        <section className='media_overview'>
            <h3>Overview</h3>
            <p>{getOverview()}</p>
        </section>
    );
};

export default Overview;