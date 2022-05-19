import React, { useEffect, useState } from 'react';
import PersonSocialMedia from './PersonSocialMedia';
import '../../../styles/main/person/PersonTitle.css';

const PersonTitle = ({ format, personInformation }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const { name } = personInformation;
    const breakpoint = 865;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className={width < breakpoint ? 'person_title_mobile' : 'person_title_desktop'}>
            <h1>{name}</h1>
            {width < breakpoint ? <PersonSocialMedia socialMedia={personInformation} /> : null}
        </div>
    );
};

export default PersonTitle;