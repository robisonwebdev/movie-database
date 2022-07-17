import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import breakpoint from '../../config/breakpoint';
import ShowDesktop from './ShowDesktop';
import ShowMobile from './ShowMobile';
import '../../../styles/main/show/Show.css';

const Show = () => {
    const { showID } = useParams();
    const [loading, setLoading ] = useState(true);
    const [showData, setShowData] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    const fetchData = useCallback(() => {
        const show_API = ` https://api.themoviedb.org/3/tv/${showID}?api_key=9289aca3a6413b200619b263ac82e4c0&language=en-US`;

        const getShow = axios.get(show_API);

        setLoading(true);

        axios
        .all([getShow])
        .then(axios.spread((...all_Data) => {
            const show_Data = all_Data[0].data;

            setShowData(show_Data);

            setLoading(false);
        }))
    }, [showID]);

    useEffect(() => {
        fetchData();

        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, [fetchData]);

    return (
        <section className='show'>
            {loading 
                ? null
                : width < breakpoint ? <ShowMobile /> : <ShowDesktop />
            }
        </section>
    );
};

export default Show;