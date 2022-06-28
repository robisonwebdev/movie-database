import React, { useEffect, useState } from 'react';
import MovieDate from './MovieDate';
import Genres from './Genres';
import Rating from './Rating';
import Runtime from './Runtime';
import '../../../../styles/main/movie/facts/Facts.css';

const Facts = ({ movie }) => {
    const { genres, release_dates, runtime } = movie;
    const [releaseDate, setReleaseDate] = useState(null);

    useEffect(() => {
        const USReleaseDates = release_dates.results.filter(obj => obj['iso_3166_1'] === 'US');

        if (USReleaseDates.length !== 0) {
            let movieDates = USReleaseDates[0]['release_dates'].filter(obj => obj.type === 3);

            setReleaseDate(movieDates);
        };
    }, [release_dates]);

    return (
        <section className='movie_facts'>
                <Rating releaseDate={releaseDate} />
                &#8226;
                <MovieDate releaseDate={releaseDate} />
                &#8226;
                <Genres genres={genres} />
                &#8226;
                <Runtime runtime={runtime} />
        </section>
    );
};

export default Facts;