import React from 'react';
import '../../../../styles/main/media/header/Poster.css';

const Poster = ({ media }) => {
    const { poster_path } = media;

    return (
        <section className='media_poster'>
            {console.log(media)}
        </section>
    );
};

export default Poster;