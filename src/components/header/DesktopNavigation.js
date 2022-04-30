import React from 'react';
import NavigationLink from './NavigationLink';
import '../../styles/header/DesktopNavigation.css';

const DesktopNavigation = () => {
    return (
        <nav className='desktop_navigation'>
            <ul>
                <NavigationLink linkTo='' title='Movies' />
                <NavigationLink linkTo='' title='TV Shows' />
                <NavigationLink linkTo='' title='People' />
            </ul>
        </nav>
    );
};

export default DesktopNavigation;