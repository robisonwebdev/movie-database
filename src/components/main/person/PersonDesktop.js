import React from 'react';
import PersonalInformation from './PersonalInformation';
import PersonImage from './PersonImage';
import '../../../styles/main/person/PersonDesktop.css';

const PersonDesktop = () => {
    return (
        <section className='person_desktop'>
            <section className='left_container'>
                <PersonImage />
                <PersonalInformation />
            </section>
            <section className='right_container'></section>
        </section>
    );
};

export default PersonDesktop;