import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PersonDesktop from './PersonDesktop';
import PersonMobile from './PersonMobile';
import '../../../styles/main/person/Person.css';

const Person = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const { personID } = useParams();
    const breakpoint = 600;


    return (
        <section className='person'>
            <section className='person_left_section'>Left Section</section>
            <section className='person_right_section'>Right Section</section>
        </section>
    );
};

export default Person;