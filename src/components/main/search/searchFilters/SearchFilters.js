import React from 'react';
import FilterCard from './FilterCard';
import '../../../../styles/main/search/searchFilters/SearchFilters.css';

const SearchFilters = ({ filters, setPage, setSelectedResults }) => {
    const { movieResults, peopleResults, showsResults } = filters;

    const handleOnClick = (selected) => {
        setPage(1);
        setSelectedResults(selected);
    };

    return (
        <section className='search_filters'>
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