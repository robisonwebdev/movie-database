import React from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/main/person/Person.css';

const Person = () => {
    const { personID } = useParams();

    return (
        <section className='person'>Person</section>
    );
};

export default Person;