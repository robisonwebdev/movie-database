import React from 'react';
import '../../../../styles/main/person/filmography/FilmographyCard.css';

const FilmographyCard = ({ film }) => {
    const getCharacter = () => {
        const character = film.character;

        if (character === '') return null;

        return character;
    };

    const filmYear = () => {
        const orginalDate = new Date(film.release_date || film.first_air_date);
        const getYear = orginalDate.getUTCFullYear();

        return getYear;
    };

    return (
        <section className='filmography_card'>
            {console.log(film)}
            <div>
                <p>{getCharacter()}</p>
            </div>
            <p></p>
        </section>
    );
};

export default FilmographyCard;