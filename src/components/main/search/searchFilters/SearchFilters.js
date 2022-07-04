import React from 'react';
import FilterCard from './FilterCard';
import '../../../../styles/main/search/searchFilters/SearchFilters.css';

const SearchFilters = ({ filters, setSelectedResults }) => {
    const { movieResults, peopleResults, showsResults } = filters;

    const handleOnClick = (selected) => {
        setSelectedResults(selected);
    };

    return (
        <section className='search_filters'>
            {console.log(filters)}
            <div className='filters_header'>Search Results</div>
            <section className='filters'>
                <FilterCard filter={movieResults} handleOnClick={handleOnClick} title='Movies' />
                <FilterCard filter={peopleResults} handleOnClick={handleOnClick} title='People' />
                <FilterCard filter={showsResults} handleOnClick={handleOnClick} title='TV Shows' />
            </section>
        </section>
    );
};

export default SearchFilters;