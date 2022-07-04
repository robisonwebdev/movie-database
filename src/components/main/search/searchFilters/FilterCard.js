import React from 'react';
import '../../../../styles/main/search/searchFilters/FilterCard.css';

const FilterCard = ({ filter, handleOnClick, title }) => {
    const filterSize = filter.total_results;

    return (
        <div className='filter_card'>
            <div className='filter_title'>
                <p onClick={() => handleOnClick(title)}>{title}</p>
            </div>
            <div className='filter_size'>
                <p>{filterSize}</p>
            </div>
        </div>
    );
};

export default FilterCard;