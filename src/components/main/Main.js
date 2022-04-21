import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import '../../styles/main/Main.css';

const Main = () => {
    return (
        <main>Main</main>
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