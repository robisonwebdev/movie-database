import React from 'react';
import FilterCard from './FilterCard';
import '../../../../styles/main/search/searchFilters/SearchFilters.css';

const SearchFilters = ({ filters }) => {
    const { movieResults, peopleResults, showsResults } = filters;

    return (
        <section className='search_filters'>
            {console.log(results)}
            <div className='filters_header'>Search Results</div>
            <section className='filters'>
                <FilterCard filter={movieResults} title='Movies' />
                <FilterCard filter={peopleResults} title='People' />
                <FilterCard filter={showsResults} title='TV Shows' />
            </section>
        </section>
    );
};

export default SearchFilters;