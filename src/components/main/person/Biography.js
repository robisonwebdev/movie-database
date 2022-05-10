import React from 'react';
import '../../../styles/main/person/Biography.css';

const Biography = ({ biography }) => {
    return (
        <section className='biography'>
            <p>{biography}</p>
        </section>
    );
};

export default Biography;