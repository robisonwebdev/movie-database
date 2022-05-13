import React from 'react';
import PersonSocialMedia from './PersonSocialMedia';
import '../../../styles/main/person/PersonTitle.css';

const PersonTitle = ({ personInformation }) => {
    const { name } = personInformation;

    return (
        <div className='person_title'>
            <h1>{name}</h1>
            <PersonSocialMedia socialMedia={personInformation} />
        </div>
    );
};

export default PersonTitle;