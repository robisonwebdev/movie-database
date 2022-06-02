import React from 'react';
import '../../../../styles/main/person/misc/Portrait.css';

const Portrait = ({ format, name, path }) => {
    const imageSrc = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${path}`;

    return (
        <>
            <img className='portrait' src={imageSrc} alt={name} />
        </>
    );
};

export default Portrait;