import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/NavigationLogo.css';

const NavigationLogo = ({ onClick }) => {
    return (
        <h1 className='navigation_logo'>
            <Link onClick={() => onClick(false)} to='/'>
                NavigationLogo
            </Link>
        </h1>
    );
};

export default NavigationLogo;