import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FilmographyCard from './FilmographyCard';
import '../../../../styles/main/person/filmography/FilmographyCategory.css';

const FilmographyCategory = ({ category }) => {
    const { department, list } = category;
    const [show, setShow] = useState(false);
    const numberOfCredits = `(${list.length} credits)`;

    return (
        <section className='filmography_category'>
            <div className='category_title'>
                <div className='category_left'>
                    <p>{department}</p>
                    <p>{numberOfCredits}</p>
                </div>
                <div className='category_right'>
                    <p>{show ? 'Show' : 'Hide'}</p>
                    <p>{show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                </div>
            </div>
            <div className='category_content'></div>
        </section>
    );
};

export default FilmographyCategory;