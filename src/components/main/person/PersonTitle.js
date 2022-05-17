import React, { useEffect, useState } from 'react';
import PersonSocialMedia from './PersonSocialMedia';
import '../../../styles/main/person/PersonTitle.css';

const PersonTitle = ({ personInformation }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const { name } = personInformation;
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className='person_title'>
            <h1>{name}</h1>
            <PersonSocialMedia socialMedia={personInformation} />
        </div>
    );
};

export default PersonTitle;