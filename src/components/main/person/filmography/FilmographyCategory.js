import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import FilmographyCard from './FilmographyCard';
import '../../../../styles/main/person/filmography/FilmographyCategory.css';

const FilmographyCategory = ({ category }) => {
    const { department, list } = category;
    const [show, setShow] = useState(false);
    const numberOfCredits = `(${list.length} credits)`;

    const handleClick = () => {
        setShow(!show);
    };

    const mapList = list.map(film => {
        return <FilmographyCard film={film} key={film.id} />
    });

    return (
        <section className='filmography_category'>
            <div className='category_title'>
                <div className='category_left'>
                    <p>{department}</p>
                    <p>{numberOfCredits}</p>
                </div>
                <div className='category_right'>
                    <p onClick={handleClick}>{show ? 'Show' : 'Hide'}</p>
                    <p onClick={handleClick}>{show ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</p>
                </div>
            </div>
            <div className='category_content'>
                {show ? mapList : null}
            </div>
        </section>
    );
};

export default FilmographyCategory;