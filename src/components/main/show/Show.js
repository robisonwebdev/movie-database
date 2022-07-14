import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import breakpoint from '../../config/breakpoint';
import '../../../styles/main/show/Show.css';

const Show = () => {
    const { showID } = useParams();
    const [loading, setLoading ] = useState(true);
    const [showData, setShowData] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    return (
        <section className='show'>Show</section>
    );
};

export default Show;