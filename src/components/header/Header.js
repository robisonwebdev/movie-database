import React, { useState, useEffect } from 'react';
import '../../styles/header/Header.css';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <header>Header</header>
    );
};

export default Header;