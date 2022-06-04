import React, { useCallback, useEffect, useState } from 'react';
import '../../../../styles/main/person/filmography/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const { cast, crew } = combinedCredits;
    const [filmography, setFilmography] = useState([]);

    useEffect(() => {
        
    }, []);

    return (
        <section className='filmography'>
            <h2>Filmography</h2>
            {console.log('Filmography:', filmography)}
        </section>
    );
};

export default Filmography;