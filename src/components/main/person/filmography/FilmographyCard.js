import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/main/person/filmography/FilmographyCard.css';

const FilmographyCard = ({ film }) => {
    const { id } = film;

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

        if (isNaN(getYear)) return null;

        return getYear;
    };

    const linkTo = `/movie/${id}`;

    return (
        <section className='filmography_card'>
            <div>
                <strong className='title'>
                    <Link to={linkTo}>
                        {getFilmName()}
                    </Link>
                </strong>
                <p className='character'>{getCharacter()}</p>
            </div>
            <p className='year'>{getFilmYear()}</p>
        </section>
    );
};

export default FilmographyCard;