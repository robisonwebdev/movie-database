import React from 'react';
import NavigationLink from './NavigationLink';
import NavigationLogo from './NavigationLogo';
import '../../styles/header/DesktopNavigation.css';

const DesktopNavigation = () => {
    return (
        <nav className='desktop_navigation'>
            <NavigationLogo />
            <ul>
                <NavigationLink linkTo='movies' title='Movies' />
                <NavigationLink linkTo='tvShows' title='TV Shows' />
                <NavigationLink linkTo='people' title='People' />
            </ul>
        </nav>
    );
};

export default DesktopNavigation;