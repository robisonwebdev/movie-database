import React from 'react';
import NavigationLink from './NavigationLink';
import '../../styles/header/MobileLinks.css';

const MobileLinks = () => {
    return (
        <div className='mobile_links'>
            <ul>
                <NavigationLink linkTo='movies' title='Movies' />
                <NavigationLink linkTo='tvShows' title='TV Shows' />
                <NavigationLink linkTo='people' title='People' />
            </ul>
        </div>
    );
};

export default MobileLinks;