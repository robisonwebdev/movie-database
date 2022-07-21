import React from 'react';
import Facts from './Facts';
import Tagline from './Tagline';
import Title from './Title';
import backdropStyling from '../../../config/backdropStyling';
import '../../../../styles/main/media/header/MobileHeader.css';

const MobileHeader = ({ media }) => {
    return (
        <section className='media_mobile_header'>
            <div className='media_backdrop' style={backdropStyling()}></div>
            <Title />
            <Facts />
            <Tagline />
        </section>
    );
};

export default MobileHeader;