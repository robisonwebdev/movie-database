import React from 'react';
import Biography from './biography/Biography';
import PersonImage from './PersonImage';
import PersonalInformation from './PersonalInformation';
import KnownFor from './knownFor/KnownFor';
import Title from './misc/Title';
import '../../../styles/main/person/PersonMobile.css';

const PersonMobile = ({ personInformation }) => {
    const { biography, combinedCredits, imagePath, name } = personInformation;

    return (
        <section className='person_mobile'>
            <PersonImage format='mobile' name={name} path={imagePath} />
            <Title format='mobile' personInformation={personInformation} />
            <Biography biography={biography} format='mobile' />
            <PersonalInformation format='mobile' personalInformation={personInformation} />
            <KnownFor credits={combinedCredits.cast} format='mobile' />
        </section>
    );
};

export default PersonMobile;