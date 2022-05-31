import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FilmographyCard from './FilmographyCard';
import '../../../styles/main/person/FilmographyCategory.css';

const FilmographyCategory = () => {
    const [show, setShow] = useState(false);

    return (
        <section className='filmography_category'>
            <div className='category_left'>
                <p>{title}</p>
                <p>{`(${creditsNumber})`}</p>
            </div>
            <div className='category_right'>
                <p>{show ? 'Show' : 'Hide'}</p>
                <p>{show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
            </div>
        </section>
    );
};

export default FilmographyCategory;