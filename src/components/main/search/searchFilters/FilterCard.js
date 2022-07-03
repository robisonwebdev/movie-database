import React from 'react';
import '../../../../styles/main/search/resultsCategories/CategoryCard.css';

const FilterCard = ({ category, title }) => {
    const categorySize = category.total_results;

    return (
        <div className='category_card'>
            <div className='category_title'>
                <p>{title}</p>
            </div>
            <div className='category_size'>
                <p>{categorySize}</p>
            </div>
        </div>
    );
};

export default FilterCard;