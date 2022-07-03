import React from 'react';
import CategoryCard from './CategoryCard';
import '../../../../styles/main/search/resultsCategories/ResultsCategories.css';

const ResultsCategories = ({ results }) => {
    const { movieResults, peopleResults, showsResults } = results;

    return (
        <section className='results_categories'>
            {console.log(results)}
            <div className='categories_header'>Search Results</div>
            <section className='categories'>
                <CategoryCard category={movieResults} title='Movies' />
                <CategoryCard category={peopleResults} title='People' />
                <CategoryCard category={showsResults} title='TV Shows' />
            </section>
        </section>
    );
};

export default ResultsCategories;