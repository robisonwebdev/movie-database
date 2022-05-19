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
            <PersonImage format='mobile' name={name} path={imagePath} />
            <PersonTitle format='mobile' personInformation={personInformation} />
            <Biography biography={biography} format='mobile' />
            <PersonalInformation format='mobile' personalInformation={personInformation} />
        </section>
    );
};

export default PersonMobile;