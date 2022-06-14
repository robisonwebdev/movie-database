import React from 'react';
import '../../../../styles/main/movie/header/Poster.css';

const Poster = ({ format, movie }) => {
    const { backdrop_path, poster_path } = movie;
    
    const desktopDisplay = () => {};

    const mobileDisplay = () => {};

    return (
        <section className='movie_header_poster'>
            {format === 'mobile' ? mobileDisplay() : desktopDisplay()}
        </section>
    );
};

export default Poster;