import React from 'react';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
import '../../../../styles/main/movie/header/MovieHeader.css';

const MovieHeader = ({ isMobile, movie }) => {
    const headerBackground = () => {
        const { backdrop_path } = movie;
        const backgroundURL = `http://image.tmdb.org/t/p/original/${backdrop_path}`;
        const styling = {
            background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${backgroundURL})`,
            backgroundPosition: 'center top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        };

        return styling;
    };

    return (
        <section className='movie_header' style={headerBackground()}>
            {isMobile ? <MobileLayout isMobile={isMobile} movie={movie} /> : <DesktopLayout isMobile={isMobile} movie={movie} />}
        </section>
    );
};

export default MovieHeader;