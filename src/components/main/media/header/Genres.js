import React from 'react';
import '../../../../styles/main/media/header/Genres.css';

const Genres = ({ media }) => {
    const { genres } = media;
    
    return (
        <section className='media_genres'>Genres</section>
    );
};

export default Genres;