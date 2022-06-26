import React from 'react';

const MobileLayout = ({ isMobile, movie }) => {
    return (
        <section className='movie_header_mobile'>
            <Poster isMobile={isMobile} movie={movie} />
            <Title movie={movie} />
            <Overview movie={movie} />
        </section>
    );
};

export default MobileLayout;