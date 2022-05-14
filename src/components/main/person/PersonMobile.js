import React from 'react';
import Biography from './Biography';
import PersonImage from './PersonImage';
import PersonalInformation from './PersonalInformation';
import PersonTitle from './PersonTitle';
import '../../../styles/main/person/PersonMobile.css';

const PersonMobile = ({ personInformation }) => {
    const { biography, imagePath, name } = personInformation;

    return (
        <section className='person_mobile'>
            <PersonImage name={name} path={imagePath} />
            <PersonTitle personInformation={personInformation} />
            <Biography biography={biography} />
            <PersonalInformation personalInformation={personInformation} />
        </section>
    );
};

export default PersonMobile;