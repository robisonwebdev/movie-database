import React from 'react';
import Overview from '../overview/Overview';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/MobileHeader.css'

const MobileHeader = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_mobile'>
            <Title movie={movie} />
            <Overview movie={movie} />
        </section>
    );
};

export default MobileHeader;