import React from 'react';
import '../../../../styles/main/search/resultsCategories/ResultsCategories.css';

const ResultsCategories = ({ results }) => {
    const { movieResults, peopleResults, showsResults } = results;

    return (
        <section className='results_categories_container'>
            <div className='categories_title'>Search Results</div>
            <section className='categories'></section>
        </section>
    );
};

export default ResultsCategories;