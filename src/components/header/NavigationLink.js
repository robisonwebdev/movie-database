import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header/NavigationLink.css';

const NavigationLink = ({ linkTo, title }) => {
    return (
        <Link className='navigation_link'></Link>
    );
};

export default NavigationLink;