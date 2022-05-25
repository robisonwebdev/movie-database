import React from 'react';
import Biography from './Biography';
import PersonalInformation from './PersonalInformation';
import PersonImage from './PersonImage';
import PersonKnownFor from './PersonKnownFor';
import PersonSocialMedia from './PersonSocialMedia';
import PersonTitle from './PersonTitle';
import '../../../styles/main/person/PersonDesktop.css';

const PersonDesktop = ({ personInformation }) => {
    const { biography, combinedCredits, imagePath, name } = personInformation;

    return (
        <section className='person_desktop'>
            <section className='left_container'>
                <PersonImage format='desktop' name={name} path={imagePath} />
                <PersonSocialMedia socialMedia={personInformation} />
                <PersonalInformation format='desktop' personalInformation={personInformation} />
            </section>
            <section className='right_container'>
                <PersonTitle format='desktop' personInformation={personInformation} />
                <Biography biography={biography} format='desktop' />
                <PersonKnownFor credits={combinedCredits.cast} format='desktop' />
            </section>
        </section>
    );
};

export default PersonDesktop;