import React from 'react';
import { useParams } from 'react-router-dom';
import PersonalInformation from './PersonalInformation';
import '../../../styles/main/person/Person.css';

const Person = () => {
    const { personID } = useParams();

    return (
        <section className='person'>
            <section className='person_left_section'>
                {/* Img */}
                <PersonalInformation />
            </section>
            <section className='person_right_section'></section>
        </section>
    );
};

export default Person;