import React from 'react';
import '../../../../styles/main/movie/overview/Overview.css';

const Overview = ({ movie }) => {
    const { overview } = movie;

    return (
        <section className='movie_header_overview'>
            {console.log(overview)}
        </section>
    );
};

export default Overview;