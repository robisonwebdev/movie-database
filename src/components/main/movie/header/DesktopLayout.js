import React from 'react';

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