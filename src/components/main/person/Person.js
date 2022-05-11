import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PersonDesktop from './PersonDesktop';
import PersonMobile from './PersonMobile';
import '../../../styles/main/person/Person.css';

const Person = () => {
    const [loading, setLoading] = useState(true);
    const [personInformation, setPersonInformation] = useState({})
    const [width, setWidth] = useState(window.innerWidth);
    const { personID } = useParams();
    const breakpoint = 600;

    const fetchData = useCallback(() => {
        const person_API = `https://api.themoviedb.org/3/person/${personID}?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US`;

        setLoading(true);

        axios
        .get(person_API)
        .then(res => {
            setPersonInformation(info => ({
                ...info,
                biography: res.data.biography,
                birthday: res.data.birthday,
                deathday: res.data.deathday,
                imagePath: res.data.profile_path,
                name: res.data.name
            }));
            setLoading(false);
        })
        .catch(err => console.log(err))

    }, [personID]);

    useEffect(() => {
        fetchData();

        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [fetchData]);

    return (
        <section className='person'>
            {loading ? null : console.log(personInformation)}
            {width < breakpoint ? <PersonMobile personInformation={personInformation} /> : <PersonDesktop personInformation={personInformation} />}
        </section>
    );
};

export default Person;