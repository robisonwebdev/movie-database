import React from 'react';
import '../../../../styles/main/movie/tagline/Tagline.css';

const Tagline = ({ movie }) => {
    const { tagline } = movie;

    const getTagline = () => {
        if (tagline === '') return null;

        return <h4 className='movie_tagline'>{tagline}</h4>;
    };

    return (
        <>
            {getTagline()}
        </>
    );
};

export default Tagline; 