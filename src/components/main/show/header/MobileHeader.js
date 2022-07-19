import React from 'react';
import headerBackground from './backgroundStyling';
import '../../../../styles/main/show/header/MobileHeader.css';

const MobileHeader = ({ show }) => {
    return (
        <section className='show_mobile_header'>
            <div className='show_mobile_background' style={headerBackground(show)}></div>
            {console.log(show)}
        </section>
    );
};

export default MobileHeader;