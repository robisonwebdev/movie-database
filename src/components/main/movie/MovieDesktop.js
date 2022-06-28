import React from 'react';
import DesktopHeader from './header/DesktopHeader';
import '../../../styles/main/movie/MovieDesktop.css';

const MovieDesktop = ({ isMobile, movie }) => {
    
    return (
        <section className='movie_desktop'>
           <DesktopHeader isMobile={isMobile} movie={movie} />
        </section>
    );
};

export default MovieDesktop;