import React from 'react';
import Rating from './Rating';
import '../../../../styles/main/movie/title/Title.css';

const Title = ({ movie }) => {
    const { title } = movie;

    return (
        <section className='movie_header_title'>Title</section>
    );
};

export default Title;