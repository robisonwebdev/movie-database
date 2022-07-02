import React from 'react';
import '../../../../styles/main/search/resultsCategories/ResultsCategories.css';

const ResultsCategories = ({ results }) => {
    const { movieResults, peopleResults, showsResults } = results;

    return (
        <section className='results_categories'>
            <div className='categories_header'>Search Results</div>
            <section className='categories'></section>
        </section>
    );
};

export default ResultsCategories;