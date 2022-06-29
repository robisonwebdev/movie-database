import React from 'react';
import headerBackground from './backgroundStyling';
import Facts from '../facts/Facts';
import Overview from '../overview/Overview';
import Poster from '../poster/Poster';
import Tagline from '../tagline/Tagline';
import Title from '../title/Title';
import '../../../../styles/main/movie/header/DesktopHeader.css';

const DesktopHeader = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_desktop' style={headerBackground(movie)}>
            <div>
                <section className='left_header'>
                    <Poster isMobile={isMobile} movie={movie} />
                </section>
                <section className='right_header'>
                    <div className='movie_header_title'>
                        <Title movie={movie} />
                        <Facts movie={movie} />
                    </div>
                    <Tagline movie={movie} />
                    <Overview movie={movie} />
                </section>
            </div>
        </section>
    );
};

export default DesktopHeader;