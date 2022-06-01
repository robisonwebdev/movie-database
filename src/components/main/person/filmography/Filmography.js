import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../../../styles/main/person/filmography/Filmography.css';

const Filmography = ({ combinedCredits }) => {
    const { cast, crew } = combinedCredits;
    const [filmography, setFilmography] = useState([]);
    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getJobList = useCallback(() => {
        const jobList_API = `https://api.themoviedb.org/3/configuration/jobs?api_key=9289aca3a6413b200619b263ac82e4c0`;

        setLoading(true);

        axios
            .get(jobList_API)
            .then(res => {
                setJobList(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        getJobList();
    }, [getJobList]);

    console.log(combinedCredits)
    return (
        <section className='filmography'>
            <h2>Filmography</h2>
            {loading ? null : console.log(crew)}
        </section>
    );
};

export default Filmography;