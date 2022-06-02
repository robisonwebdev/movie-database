import React from 'react';
import Biography from './biography/Biography';
import Filmography from './filmography/Filmography';
import PersonalInformation from './PersonalInformation';
import PersonImage from './PersonImage';
import KnownFor from './knownFor/KnownFor';
import SocialMedia from './misc/SocialMedia';
import Title from './misc/Title';
import '../../../styles/main/person/PersonDesktop.css';

const PersonDesktop = ({ personInformation }) => {
    const { biography, combinedCredits, imagePath, name } = personInformation;

    return (
        <section className='person_desktop'>
            <section className='left_container'>
                <PersonImage format='desktop' name={name} path={imagePath} />
                <SocialMedia socialMedia={personInformation} />
                <PersonalInformation format='desktop' personalInformation={personInformation} />
            </section>
            <section className='right_container'>
                <Title format='desktop' personInformation={personInformation} />
                <Biography biography={biography} format='desktop' />
                <KnownFor credits={combinedCredits.cast} format='desktop' />
                <Filmography combinedCredits={combinedCredits} />
            </section>
        </section>
    );
};

export default PersonDesktop;