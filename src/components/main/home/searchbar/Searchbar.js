import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../../../../styles/main/home/searchbar/Searchbar.css';

const Searchbar = () => {
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();
    const placeholder = 'Search for a movie, tv show, person.....';

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/results?query=${searchValue}`);
    };

    return (
        <section className='searchbar_container' onSubmit={handleSubmit}>
            <form className='searchbar'>
                <input type='text' value={searchValue} placeholder={placeholder} onChange={handleInputChange} />
                <button>Search</button>
            </form>
        </section>
    );
};

export default Searchbar;