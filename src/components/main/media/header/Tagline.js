import React from 'react';
import '../../../../styles/main/media/header/Tagline.css';

const Tagline = ({ media }) => {
    const { tagline } = media;

    return (
        <section className='media_tagline'>Tagline</section>
    );
};

export default Tagline;