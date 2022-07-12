import React from 'react';
import { Pagination } from '@mui/material';
import '../../../../styles/main/search/pagination/ResultsPagination.css';

const ResultsPagination = ({ count, page, setPage }) => {
    const handleChange = (value) => {
        setPage(value);
    };

    return (
        <section className='results_pagination'>
            <Pagination count={count} page={page} onChange={handleChange} />
        </section>
    );
};

export default ResultsPagination;