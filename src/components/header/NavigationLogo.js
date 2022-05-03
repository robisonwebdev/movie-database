import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/NavigationLogo.css';

const NavigationLogo = () => {
    return (
        <h1 className='navigation_logo'>
            <Link to='/'>
                NavigationLogo
            </Link>
        </h1>
    );
};

export default NavigationLogo;