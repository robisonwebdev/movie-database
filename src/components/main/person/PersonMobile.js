import React from 'react';
import Biography from './biography/Biography';
import Filmography from './filmography/Filmography';
import KnownFor from './knownFor/KnownFor';
import PersonalInformation from './personalInformation/PersonalInformation';
import Portrait from './misc/Portrait';
import Title from './misc/Title';
import '../../../styles/main/person/PersonMobile.css';

const PersonMobile = ({ personInformation }) => {
    const { biography, combinedCredits, imagePath, name } = personInformation;

    return (
        <section className='person_mobile'>
            <Portrait format='mobile' name={name} path={imagePath} />
            <Title format='mobile' personInformation={personInformation} />
            <Biography biography={biography} format='mobile' />
            <PersonalInformation format='mobile' personalInformation={personInformation} />
            <KnownFor credits={combinedCredits.cast} format='mobile' />
            <Filmography combinedCredits={combinedCredits} />
        </section>
    );
};

export default PersonMobile;