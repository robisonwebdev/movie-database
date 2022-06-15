import React from 'react';
import Rating from './Rating';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { release_dates, title } = movie;

    return (
        <section className='movie_header_title'>
            <h3>{title}</h3>
            <div>
                <div>
                    <Rating data={release_dates} />
                </div>
            </div>
        </section>
    );
};

export default Title;