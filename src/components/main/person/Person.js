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
        const details_API = `https://api.themoviedb.org/3/person/${personID}?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US`;
        const socialMedia_API = `https://api.themoviedb.org/3/person/${personID}/external_ids?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US`;

        const getDetails = axios.get(details_API);
        const getSocialMedia = axios.get(socialMedia_API);

        setLoading(true);

        axios
        .all([getDetails, getSocialMedia])
        .then(axios.spread((...all_Data) => {
            const details_Data = all_Data[0].data;
            const socialMedia_Data = all_Data[1].data;

            setPersonInformation(info => ({
                ...info,
                biography: details_Data.biography,
                birthday: details_Data.birthday,
                birthPlace: details_Data.place_of_birth,
                deathday: details_Data.deathday,
                facebook: socialMedia_Data.facebook_id,
                gender: details_Data.gender,
                imagePath: details_Data.profile_path,
                instagram: socialMedia_Data.instagram_id,
                name: details_Data.name,
                twitter: socialMedia_Data.twitter_id
            }));
            setLoading(false);
        }))
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