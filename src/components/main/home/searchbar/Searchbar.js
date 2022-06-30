import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../../../../styles/main/home/searchbar/Searchbar.css';

const Searchbar = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <section className='searchbar_container'>
            <form className='searchbar'>
                <input />
                <button>Search</button>
            </form>
        </section>
    );
};

export default Searchbar;