import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/main/search/Results.css';

const Results = () => {
    const { searchValue } = useParams();
    const [movieResults, setMovieResults] = useState([]);
    const [peopleResults, setPeopleResults] = useState([]);
    const [showsResults, setShowsResults] = useState([]);

    const fetchData = useCallback(() => {

    }, []);

    useEffect(() => {
        
    }, []);
    
    return (
        <section className='results'>Results</section>
    );
};

export default Results;