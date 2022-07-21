import React from 'react';
import Facts from './Facts';
import Overview from './Overview';
import Poster from './Poster';
import Tagline from './Tagline';
import Title from './Title';
import backdropStyling from '../../../config/backdropStyling';
import '../../../../styles/main/media/header/MobileHeader.css';

const MobileHeader = ({ media }) => {
    return (
        <section className='media_mobile_header'>
            <div className='media_backdrop' style={backdropStyling()}>
                <Poster />
            </div>
            <Title />
            <Facts />
            <Tagline />
            <Overview />
        </section>
    );
};

export default MobileHeader;