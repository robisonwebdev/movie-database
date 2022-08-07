import React, { useCallback, useEffect, useState } from 'react';
import '../../../../styles/main/media/header/Rating.css';

const Rating = ({ media }) => {
    const { content_ratings, release_dates } = media;
    const [rating, setRating] = useState('N/A');

    const getContentRating = useCallback(() => {
        const USRating = content_ratings.results.filter(obj => obj['iso_3166_1'] === 'US');

        if (USRating.lenght === 0 || USRating[0] === undefined) return null;

        setRating(USRating[0]['rating']);
    }, [content_ratings]);

    const getReleaseRating = useCallback(() => {
        const USReleaseDates = release_dates.results.filter(obj => obj['iso_3166_1'] === 'US');

        if (USReleaseDates.length === 0) return null;

        setRating(USReleaseDates[0]['release_dates'][0]['certification']);
    }, [release_dates]);

    useEffect(() => {
        if (content_ratings === undefined) {
            getReleaseRating();
        }

        if (release_dates === undefined) {
            getContentRating();
        }
    }, [content_ratings, getContentRating, getReleaseRating, release_dates]);

    return (
        <div className='media_rating'>
            {console.log(media)}
            <p>
                {rating}
            </p>
        </div>
    );
};

export default Rating;