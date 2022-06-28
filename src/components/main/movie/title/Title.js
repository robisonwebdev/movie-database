import React from 'react';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { release_date, title } = movie;

    const getReleaseYear = () => {
        const getDate = new Date(release_date);
        const year = getDate.getUTCFullYear();

        return `(${year})`;
    };

    return (
        <section className='movie_title'>
            <h3>{title}</h3>
            <p>{getReleaseYear()}</p>
        </section>
    );
};

export default Title;