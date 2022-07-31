import React from 'react';
import { Pagination } from '@mui/material';
import '../../../../styles/main/search/pagination/ResultsPagination.css';

const ResultsPagination = ({ count, page, setPage }) => {
    const handleChange = (event, value) => {
        setPage(value);
        window.scroll(0,0);
    };

    return (
        <section className='results_pagination'>
            <Pagination count={count} page={page} onChange={handleChange} />
        </section>
    );
};

export default ResultsPagination;