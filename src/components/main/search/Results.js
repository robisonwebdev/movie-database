import React from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/main/search/Results.css';

const Results = () => {
    const { searchValue } = useParams();
    
    return (
        <section className='results'>Results</section>
    );
};

export default Results;