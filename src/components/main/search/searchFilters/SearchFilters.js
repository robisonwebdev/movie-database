import React from 'react';
import FilterCard from './FilterCard';
import '../../../../styles/main/search/searchFilters/SearchFilters.css';

const SearchFilters = ({ results }) => {
    const { movieResults, peopleResults, showsResults } = results;

    return (
        <section className='results_categories'>
            {console.log(results)}
            <div className='categories_header'>Search Results</div>
            <section className='categories'>
                <FilterCard category={movieResults} title='Movies' />
                <FilterCard category={peopleResults} title='People' />
                <FilterCard category={showsResults} title='TV Shows' />
            </section>
        </section>
    );
};

export default SearchFilters;