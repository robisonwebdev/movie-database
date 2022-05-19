import React from 'react';
import Biography from './Biography';
import PersonalInformation from './PersonalInformation';
import PersonImage from './PersonImage';
import PersonSocialMedia from './PersonSocialMedia';
import PersonTitle from './PersonTitle';
import '../../../styles/main/person/PersonDesktop.css';

const PersonDesktop = ({ personInformation }) => {
    const { biography, imagePath, name } = personInformation;

    return (
        <section className='person_desktop'>
            <section className='left_container'>
                <PersonImage name={name} path={imagePath} />
                <PersonSocialMedia socialMedia={personInformation} />
                <PersonalInformation personalInformation={personInformation} />
            </section>
            <section className='right_container'>
                <PersonTitle personInformation={personInformation} />
                <Biography biography={biography} />
            </section>
        </section>
    );
};

export default PersonDesktop;