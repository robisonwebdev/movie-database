import React from 'react';
import '../../../../styles/main/media/header/Tagline.css';

const Tagline = ({ media }) => {
    const { tagline } = media;

    const getTagline = () => {
        if (tagline === '' || tagline === null) return null;

        return <h4 className='media_tagline'>{tagline}</h4>;
    };

    return (
        <>
            {getTagline()}
        </>
    );
};

export default Tagline;