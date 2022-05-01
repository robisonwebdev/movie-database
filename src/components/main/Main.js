import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Error from './error/Error';
import Home from './home/Home';
import Movie from './movie/Movie';
import Movies from './movies/Movies';
import Person from './people/Person';
import Results from './search/Results';
import Show from './show/Show';
import '../../styles/main/Main.css';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='movies' element={<Movies />} />
                <Route path='person' element={<Person />} />
                <Route path='results' element={<Results />} />
                <Route path='show' element={<Show />} />
                <Route path='*' element={<Error />} />
            </Route>

            <Route path='/movie' element={<Layout />}>
                <Route path=':movieID' element={<Movie />} />
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