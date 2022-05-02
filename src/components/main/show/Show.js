import React from 'react';
import { useParams } from 'react-router-dom';
import '../../../styles/main/show/Show.css';

const Show = () => {
    const { showID } = useParams();

    return (
        <section className='show'>Show</section>
    );
};

export default Show;