import React from 'react';
import '../../../../styles/main/media/header/Title.css';

const Title = ({ media }) => {
    const { first_air_date, name, release_date, title } = media;

    const getMediaYear = () => {
        const getDate = new Date(first_air_date || release_date);
        const year = getDate.getUTCFullYear();

        if (isNaN(year)) return null;

        return `(${year})`;
    };

    return (
        <section className='media_title'>
            <h2>{name || title}</h2>
            <p>{getMediaYear()}</p>
        </section>
    );
};

export default Title;