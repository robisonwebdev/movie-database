import React from 'react';
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

const DesktopLayout = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_desktop'>
            <section className='left_header'>
                <Poster isMobile={isMobile} movie={movie} />
            </section>
            <section className='right_header'></section>
        </section>
    );
};

const MobileLayout = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_mobile'>
            <Poster isMobile={isMobile} movie={movie} />
            <Title movie={movie} />
            <Overview movie={movie} />
        </section>
    );
};

export default MovieHeader;