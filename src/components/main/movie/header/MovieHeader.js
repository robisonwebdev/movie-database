import React from 'react';
import DesktopLayout from './DesktopLayout';
import Overview from '../overview/Overview';
import Poster from '../poster/Poster';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/MovieHeader.css';

const MovieHeader = ({ isMobile, movie }) => {
    return (
        <section className='movie_header'>
            {isMobile ? <MobileLayout isMobile={isMobile} movie={movie} /> : <DesktopLayout isMobile={isMobile} movie={movie} />}
        </section>
    );
};

export default MovieHeader;