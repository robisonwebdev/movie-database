import React from 'react';
import backdropStyling from '../../../config/backdropStyling';
import '../../../../styles/main/media/header/MobileHeader.css';

const MobileHeader = () => {
    return (
        <section className='media_mobile_header'>
            <div className='media_backdrop' style={backdropStyling()}></div>
        </section>
    );
};

export default MobileHeader;