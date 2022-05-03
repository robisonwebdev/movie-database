import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import NavigationLink from './NavigationLink';
import NavigationLogo from './NavigationLogo';
import '../../styles/header/MobileNavigation.css';

const MobileNavigation = () => {
    const [menuActive, setMenuActive] = useState(true);

    return (
        <nav className='mobile_navigation'>
            <div className='mobile_header'>
                <NavigationLogo />
                {menuActive ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className='mobile_links'></div>
        </nav>
    );
};

export default MobileNavigation;