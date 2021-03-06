import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../../../../styles/main/search/searchBar/SearchBar.css';

const SearchBar = ({ setSearchParams, value }) => {
    const [searchValue, setSearchValue] = useState(value);
    let params = { query: searchValue };

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchParams(params);
    };

    return (
        <section className='results_search_bar_container'>
            <form className='results_search_bar' onSubmit={handleSubmit}>
                <input type='text' value={searchValue} onChange={handleInputChange} />
                <button type='submit'>
                    <SearchIcon />
                </button>
            </form>
        </section>
    );
};

export default SearchBar;