import React, { useEffect, useState } from 'react';
import MovieDate from './MovieDate';
import Genres from './Genres';
import Rating from './Rating';
import Runtime from './Runtime';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { genres, release_dates, runtime, title } = movie;
    const [releaseDate, setReleaseDate] = useState(null);

    useEffect(() => {
        const USReleaseDates = release_dates.results.filter(obj => obj['iso_3166_1'] === 'US');

        if (USReleaseDates.length === 0) return null;

        setReleaseDate(USReleaseDates);
    }, [release_dates]);

    return (
        <section className='movie_header_title'>
            <div className='movie_title'>
                <h3>{title}</h3>
                {/* <MovieDate data={release_dates} format='yyyy' /> */}
            </div>
            <div className='movie_mini_info'>
                <Rating releaseDate={releaseDate} />
                &#8226;
                {/* <MovieDate data={release_dates} /> */}
                &#8226;
                <Genres genres={genres} />
                &#8226;
                <Runtime runtime={runtime} />
            </div>
        </section>
    );
};

export default Title;