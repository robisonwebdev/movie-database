import React from 'react';
import Genres from './Genres';
import MediaDate from './MediaDate';
import Rating from './Rating';
import Runtime from './Runtime';
import '../../../../styles/main/media/header/Facts.css';

const Facts = ({ media }) => {
    return (
        <section>Facts</section>
    );
};

const DesktopLayout = ({ media }) => {
    return (
        <>
            <Rating media={media} />
            <MediaDate media={media} />
            &#8226;
            <Genres media={media} />
            &#8226;
            <Runtime media={media} />
        </>
    );
};

const MobileLayout = ({ media }) => {};

export default Facts;