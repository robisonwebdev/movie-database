import React, { useEffect, useState } from 'react';
import '../../../styles/main/person/Biography.css';

const Biography = ({ biography }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    
    return (
        <section className='biography'>
            <h2>Biography</h2>
            <p>{biography}</p>
        </section>
    );
};

export default Biography;