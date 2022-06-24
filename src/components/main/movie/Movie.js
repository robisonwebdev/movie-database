import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import breakpoint from '../../config/breakpoint';
import MovieDesktop from './MovieDesktop';
import MovieMobile from './MovieMobile';
import '../../../styles/main/movie/Movie.css';

const Movie = () => {
    const { movieID } = useParams();
    const [loading, setLoading ] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    const fetchData = useCallback(() => {
        const movie_API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US&append_to_response=release_dates`;

        const getMovie = axios.get(movie_API);

        setLoading(true);

        axios
        .all([getMovie])
        .then(axios.spread((...all_Data) => {
            const movie_Data = all_Data[0].data;

            setMovieData(movie_Data);

            setLoading(false);
        }))
    }, [movieID]);

    useEffect(() => {
        fetchData();

        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [fetchData]);

    return (
        <section className='movie'>
            {/* {loading ? null : console.log('MovieData:', movieData)} */}
            {loading 
                ? null
                : width < breakpoint ? <MovieMobile isMobile={true} movie={movieData} /> : <MovieDesktop isMobile={false} movie={movieData} />
            }
        </section>
    );
};

export default Movie;