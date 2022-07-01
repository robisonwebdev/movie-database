import React from 'react';
import '../../../../styles/main/search/resultsCategories/ResultsCategories.css';

const ResultsCategories = ({ results }) => {
    const { movieResults, peopleResults, showsResults } = results;

    return (
        <section className='results_categories'>
            {console.log(peopleResults)}
        </section>
    );
};

export default ResultsCategories;