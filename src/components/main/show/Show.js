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

    }, []);

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