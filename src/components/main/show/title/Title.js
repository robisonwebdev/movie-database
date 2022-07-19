import React from 'react';
import '../../../../styles/main/show/title/Title.css';

const Title = ({ show }) => {
    const { first_air_date, name } = show;

    return (
        <section className='show_title'>
            <h3>{name}</h3>
        </section>
    );
};

export default Title;