import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationLink from './NavigationLink';
import NavigationLogo from './NavigationLogo';
import '../../styles/header/MobileNavigation.css';

const MobileNavigation = () => {
    const {menuActive, setMenuActive} = useState(false);

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