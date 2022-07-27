import React, {useEffect, useState} from 'react';
import '../../../../styles/main/media/header/Rating.css';

const Rating = ({ media }) => {
    const { content_rating, release_dates } = media;

    return (
        <section className='media_rating'>Rating</section>
    );
};

export default Rating;