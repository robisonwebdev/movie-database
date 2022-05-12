import React from 'react';
import PersonSocialMedia from './PersonSocialMedia';

const PersonTitle = ({ personInformation }) => {
    const { name } = personInformation;

    return (
        <div>
            <h1>{name}</h1>
            <PersonSocialMedia socialMedia={personInformation} />
        </div>
    );
};

export default PersonTitle;