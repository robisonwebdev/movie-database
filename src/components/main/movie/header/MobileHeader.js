import React from 'react';
import Overview from '../overview/Overview';
import Poster from '../poster/Poster';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/MobileHeader.css'

const MobileHeader = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_mobile'>
            <Poster isMobile={isMobile} movie={movie} />
            <Title movie={movie} />
            <Overview movie={movie} />
        </section>
    );
};

export default MobileHeader;