import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FilmographyCard from './FilmographyCard';
import '../../../styles/main/person/FilmographyCategory.css';

const FilmographyCategory = () => {
    return (
        <section className='filmography_category'>
            <div className='category_left'>
                {title}
                {`(${creditsNumber})`}
            </div>
            <div className='category_right'></div>
        </section>
    );
};

export default FilmographyCategory;