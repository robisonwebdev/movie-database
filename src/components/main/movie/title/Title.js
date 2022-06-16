import React from 'react';
import Date from './Date';
import Genres from './Genres';
import Rating from './Rating';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { genres, release_dates, title } = movie;

    return (
        <section className='movie_header_title'>
            <h3>{title}</h3>
            <div>
                <div>
                    <Rating data={release_dates} />
                    <Date data={release_dates} />
                    <Genres data={genres} />
                </div>
            </div>
        </section>
    );
};

export default Title;