import React from 'react';
import '../../../styles/main/person/Biography.css';

const Biography = ({ biography, format }) => {

    return (
        <section className={format === 'mobile' ? 'biography_mobile' : 'biography_desktop'}>
            <h2>Biography</h2>
            <p>{biography}</p>
        </section>
    );
};

export default Biography;