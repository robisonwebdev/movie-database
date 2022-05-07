import React from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/main/person/Person.css';

const Person = () => {
    const { personID } = useParams();

    return (
        <section className='person'>
            <section className='person_left_section'></section>
            <section className='person_right_section'></section>
        </section>
    );
};

export default Person;