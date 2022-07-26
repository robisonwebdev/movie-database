import React from 'react';
import '../../../../styles/main/media/header/Title.css';

const Title = ({ media }) => {
    const { name, title } = media;

    return (
        <section className='media_title'>
            <h3>{name || title}</h3>
        </section>
    );
};

export default Title;