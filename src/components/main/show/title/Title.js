import React from 'react';
import '../../../../styles/main/show/title/Title.css';

const Title = ({ show }) => {
    const { first_air_date, name } = show;

    const getFirstAirDate = () => {
        const getDate = new Date(first_air_date);
        const getYear = getDate.getUTCFullYear(getDate);

        if (getDate === null) return null;

        return `(${getYear})`;
    };

    return (
        <section className='show_title'>
            <h3>{name}</h3>
            <p>{getFirstAirDate()}</p>
        </section>
    );
};

export default Title;