import React from 'react';
import Overview from '../overview/Overview';
import Poster from '../poster/Poster';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/MovieHeader.css';

const MovieHeader = ({ isMobile, movie }) => {
    return (
        <section className='movie_header'>
            {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </section>
    );
};

const DesktopLayout = () => {
    return (
        <section className='movie_header_desktop'>Desktop Layout</section>
    );
};

const MobileLayout = () => {
    return (
        <section className='movie_header_mobile'>Mobile Layout</section>
    );
};

export default MovieHeader;