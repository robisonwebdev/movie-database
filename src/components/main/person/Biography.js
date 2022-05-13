import React from 'react';
import '../../../styles/main/person/Biography.css';

const Biography = ({ biography }) => {
    return (
        <section className='biography'>
            <h2>Biography</h2>
            <p>{biography}</p>
        </section>
    );
};

export default Biography;