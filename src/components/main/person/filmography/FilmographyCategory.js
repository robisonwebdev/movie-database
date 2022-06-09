import React, { useCallback, useEffect, useState } from 'react';
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

    const sortListByDate = useCallback(() => {
        list.sort((a, b) => {         
            const firstProperty = b.hasOwnProperty('first_air_date');
            const secondProperty = b.hasOwnProperty('release_date');

            if (!firstProperty && !secondProperty) return 1;
            if (b.first_air_date === "" || b.release_date === "") return 1;

            return new Date(b.first_air_date || b.release_date) - new Date(a.first_air_date || a.release_date);
        });
    }, [list])

    const mapList = list.map((film, index) => {
        return <FilmographyCard film={film} key={index} />
    });    

    useEffect(() => {
        sortListByDate();
    }, [sortListByDate]);

    return (
        <section className='filmography_category'>
            <div className='category_title'>
                <div className='category_left'>
                    <p>{department}</p>
                    <p>{numberOfCredits}</p>
                </div>
                <div className='category_right'>
                    <p onClick={handleClick}>{show ? 'Hide' : 'Show'}</p>
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