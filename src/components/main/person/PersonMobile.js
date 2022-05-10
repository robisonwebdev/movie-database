import React from 'react';
import Biography from './Biography';
import PersonImage from './PersonImage';
import '../../../styles/main/person/PersonMobile.css';

const PersonMobile = ({ personInformation }) => {
    const { biography, imagePath, name } = personInformation;

    return (
        <section className='person_mobile'>
            <PersonImage name={name} path={imagePath} />
            <h1>{name}</h1>
            <Biography biography={biography} />
        </section>
    );
};

export default PersonMobile;