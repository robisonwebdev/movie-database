import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationLink from './NavigationLink';
import NavigationLogo from './NavigationLogo';
import '../../styles/header/MobileNavigation.css';

const MobileNavigation = () => {
    return (
        <nav className='mobile_navigation'>
            <div className='mobile_header'>
                <NavigationLogo />
                <MenuIcon />
            </div>
            <div className='mobile_links'></div>
        </nav>
    );
};

export default MobileNavigation;