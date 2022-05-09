import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import MobileLinks from './MobileLinks';
import NavigationLogo from './NavigationLogo';
import '../../styles/header/MobileNavigation.css';

const MobileNavigation = () => {
    const [menuActive, setMenuActive] = useState(false);

    return (
        <nav className='mobile_navigation'>
            <div className='mobile_header'>
                <NavigationLogo />
                {menuActive ? <CloseIcon onClick={() => setMenuActive(false)} /> : <MenuIcon onClick={() => setMenuActive(true)} />}
            </div>
            {menuActive ? <MobileLinks onClick={setMenuActive} /> : null}
        </nav>
    );
};

export default MobileNavigation;