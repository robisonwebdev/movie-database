import React, { useState, useEffect } from 'react';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
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
        <header>
            {width < breakpoint ? <MobileNavigation /> : <DesktopNavigation />}
        </header>
    );
};

export default Header;