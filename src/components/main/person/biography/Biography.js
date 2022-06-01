import React from 'react';
import '../../../styles/main/person/Biography.css';

const Biography = ({ biography, format }) => {
    const getBiography = () => {
        if (biography === '' || biography === null) return 'Biography unavailable.';

        return biography;
    };

    return (
        <section className={format === 'mobile' ? 'biography_mobile' : 'biography_desktop'}>
            <h2>Biography</h2>
            <p>{getBiography()}</p>
        </section>
    );
};

export default Biography;