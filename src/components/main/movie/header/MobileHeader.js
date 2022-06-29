import React from 'react';
import headerBackground from './backgroundStyling';
import Overview from '../overview/Overview';
import Tagline from '../tagline/Tagline';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/MobileHeader.css'

const MobileHeader = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_mobile'>
            <div className='mobile_background' style={headerBackground(movie)}></div>
            <Title movie={movie} />
            <Tagline movie={movie} />
            <Overview movie={movie} />
        </section>
    );
};

export default MobileHeader;