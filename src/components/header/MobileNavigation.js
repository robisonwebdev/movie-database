import React from 'react';
import NavigationLink from './NavigationLink';
import '../../styles/header/MobileNavigation.css';

const MobileNavigation = () => {
    return (
        <nav className='mobile_navigation'>
            <div className='mobile_header'></div>
            <div className='mobile_links'></div>
        </nav>
    );
};

export default MobileNavigation;