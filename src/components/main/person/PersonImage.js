import React from 'react';
import '../../../styles/main/person/PersonImage.css';

const PersonImage = ({ format, name, path }) => {
    const imageSrc = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;

    return (
        <>
            <img className='person_image' src={imageSrc} alt={name} />
        </>
    );
};

export default PersonImage;