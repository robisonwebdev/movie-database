import React from 'react';
import DesktopHeader from '../media/header/DesktopHeader';
import '../../../styles/main/movie/MovieDesktop.css';

const MovieDesktop = ({ movie }) => {
    
    return (
        <section className='movie_desktop'>
           <DesktopHeader media={movie} />
           <section className='movie_desktop_main'>Main</section>
        </section>
    );
};

export default MovieDesktop;