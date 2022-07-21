import React from 'react';
import backdropStyling from '../../../config/backdropStyling';
import Title from './Title';
import '../../../../styles/main/media/header/MobileHeader.css';

const MobileHeader = ({ media }) => {
    return (
        <section className='media_mobile_header'>
            <div className='media_backdrop' style={backdropStyling()}></div>
            <Title />
        </section>
    );
};

export default MobileHeader;