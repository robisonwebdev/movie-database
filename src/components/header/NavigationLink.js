import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/NavigationLink.css';

const NavigationLink = ({ linkTo, onClick, title }) => {
    return (
        <Link className='navigation_link' onClick={() => onClick(false)} to={linkTo}>
            <li>{title}</li>
        </Link>
    );
};

export default NavigationLink;