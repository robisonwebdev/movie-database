import React from 'react';
import PersonSocialMedia from './PersonSocialMedia';
import '../../../styles/main/person/PersonTitle.css';

const PersonTitle = ({ format, personInformation }) => {
    const { name } = personInformation;

    return (
        <div className={format === 'mobile' ? 'person_title_mobile' : 'person_title_desktop'}>
            <h1>{name}</h1>
            {format === 'mobile' ? <PersonSocialMedia socialMedia={personInformation} /> : null}
        </div>
    );
};

export default PersonTitle;