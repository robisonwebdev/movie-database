import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../styles/main/search/Results.css';

const Results = () => {
    const { searchValue } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieResults, setMovieResults] = useState([]);
    const [peopleResults, setPeopleResults] = useState([]);
    const [showsResults, setShowsResults] = useState([]);

    const fetchData = useCallback(() => {
        const movie_API = `https://api.themoviedb.org/3/search/movie?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US&query=${searchValue}&page=1&include_adult=false`;
        const people_API = `https://api.themoviedb.org/3/search/person?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US&query=${searchValue}&page=1&include_adult=false`;
        const shows_API = `https://api.themoviedb.org/3/search/tv?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US&page=1&query=${searchValue}&include_adult=false`;

        const getMovie_Data = axios.get(movie_API);
        const getPeople_Data = axios.get(people_API);
        const getShows_Data = axios.get(shows_API);

        setLoading(true);

        axios
        .all([getMovie_Data, getPeople_Data, getShows_Data])
        .then(axios.spread((...all_Data) => {
            const movie_Data = all_Data[0].data;
            const people_Data = all_Data[1].data;
            const shows_Data = all_Data[2].data;

            setMovieResults(movie_Data);
            setPeopleResults(people_Data);
            setShowsResults(shows_Data);
            setLoading(false);
        }))
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return (
        <section className='results'>
            {loading ? null : console.log('Movie', movieResults)}
            {loading ? null : console.log('People', peopleResults)}            
            {loading ? null : console.log('shows', showsResults)}
        </section>
    );
};

export default Results;