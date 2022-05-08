import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PersonDesktop from './PersonDesktop';
import PersonMobile from './PersonMobile';
import '../../../styles/main/person/Person.css';

const Person = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const { personID } = useParams();
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <section className='person'>
            {width < breakpoint ? <PersonMobile /> : <PersonDesktop />}
        </section>
    );
};

export default Person;