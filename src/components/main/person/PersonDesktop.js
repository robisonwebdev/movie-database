import React from 'react';
import PersonalInformation from './PersonalInformation';
import PersonImage from './PersonImage';
import '../../../styles/main/person/PersonDesktop.css';

const PersonDesktop = ({ personInformation }) => {
    const { biography, imagePath, name } = personInformation;

    return (
        <section className='person_desktop'>
            <section className='left_container'>
                <PersonImage name={name} path={imagePath} />
                <PersonalInformation personalInformation={personInformation} />
            </section>
            <section className='right_container'></section>
        </section>
    );
};

export default PersonDesktop;