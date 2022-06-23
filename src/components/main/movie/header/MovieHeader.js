import React from 'react';
import Overview from '../overview/Overview';
import Poster from '../poster/Poster';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/MovieHeader.css';

const MovieHeader = ({ movie }) => {
    return (
        <section className='movie_header'>
            
        </section>
    );
};

const DesktopLayout = () => {
    return (
        <section className='movie_header_desktop'></section>
    );
};

const MobileLayout = () => {
    return (
        <section className='movie_header_mobile'></section>
    );
};

export default MovieHeader;