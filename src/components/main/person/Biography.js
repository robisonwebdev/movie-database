import React, { useEffect, useState } from 'react';
import '../../../styles/main/person/Biography.css';

const Biography = ({ biography }) => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;
    
    return (
        <section className='biography'>
            <h2>Biography</h2>
            <p>{biography}</p>
        </section>
    );
};

export default Biography;