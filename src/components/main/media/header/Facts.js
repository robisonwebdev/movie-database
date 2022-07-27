import React from 'react';
import Genres from './Genres';
import Rating from './Rating';
import Runtime from './Runtime';
import '../../../../styles/main/media/header/Facts.css';

const Facts = ({ isMobile, media }) => {
    return (
        <section className='media_facts'>
            {isMobile ? <MobileLayout media={media} /> : <DesktopLayout media={media} />}
        </section>
    );
};

const DesktopLayout = ({ media }) => {
    return (
        <>
            <Rating media={media} />
            &#8226;
            <Genres media={media} />
            &#8226;
            <Runtime media={media} />
        </>
    );
};

const MobileLayout = ({ media }) => {
    return (
        <>
            <div className='upper_facts'>
                <Rating media={media} />
                &#8226;
                <Runtime media={media} />
            </div>
            <div className='lower_facts'>
                <Genres media={media} />
            </div>
        </>
    );
};

export default Facts;