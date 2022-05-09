import React from 'react';
import NavigationLink from './NavigationLink';
import '../../styles/header/MobileLinks.css';

const MobileLinks = ({ onClick }) => {
    return (
        <div className='mobile_links'>
            <ul>
                <NavigationLink linkTo='movies' onClick={onClick} title='Movies' />
                <NavigationLink linkTo='tvShows' onClick={onClick} title='TV Shows' />
                <NavigationLink linkTo='people' onClick={onClick} title='People' />
            </ul>
        </div>
    );
};

export default MobileLinks;