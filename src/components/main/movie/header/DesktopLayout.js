import React from 'react';
import Overview from '../overview/Overview';
import Poster from '../poster/Poster';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/DesktopLayout.css';

const DesktopLayout = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_desktop'>
            <section className='left_header'>
                <Poster isMobile={isMobile} movie={movie} />
            </section>
            <section className='right_header'>
                <Title movie={movie} />
                <Overview movie={movie} />
            </section>
        </section>
    );
};

export default DesktopLayout;