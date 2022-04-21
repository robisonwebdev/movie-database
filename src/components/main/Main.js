import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Error from './error/Error';
import Home from './home/Home';
import Movie from './movie/Movie';
import Show from './show/Show';
import '../../styles/main/Main.css';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='movie' element={<Movie />} />
                <Route path='show' element={<Show />} />
                <Route path='*' element={<Error />} />
            </Route>
        </Routes>
    );
};

const Layout = () => {
    return (
        <main>
            <Outlet />
        </main>
    );
};

export default Main;