import React from 'react';
import '../../../../styles/main/person/filmography/FilmographyCard.css';

const FilmographyCard = ({ film }) => {
    const getCharacter = () => {
        const character = film.character;

        if (character === '') return null;

        return character;
    };

    const getFilmName = () => {
        const filmName = film.name || film.title;

        return filmName;
    };

    const getFilmYear = () => {
        const orginalDate = new Date(film.release_date || film.first_air_date);
        const getYear = orginalDate.getUTCFullYear();

        return getYear;
    };

    return (
        <section className='filmography_card'>
            <div>
                <strong className='title'>{getFilmName()}</strong>
                <p className='character'>{getCharacter()}</p>
            </div>
            <p className='year'>{getFilmYear()}</p>
        </section>
    );
};

export default FilmographyCard;