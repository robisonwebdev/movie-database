import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../../../styles/main/movie/Movie.css';

const Movie = () => {
    const { movieID } = useParams();

    return (
        <section className='movie'>
            Movie
        </section>
    );
};

export default Movie;