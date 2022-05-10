import React from 'react';
import Biography from './Biography';
import PersonImage from './PersonImage';
import '../../../styles/main/person/PersonMobile.css';

const PersonMobile = () => {
    return (
        <section className='person_mobile'>
            <PersonImage />
            <Biography />
        </section>
    );
};

export default PersonMobile;