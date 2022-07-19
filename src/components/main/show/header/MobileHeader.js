import React from 'react';
import headerBackground from './backgroundStyling';
import Title from '../title/Title';
import '../../../../styles/main/show/header/MobileHeader.css';

const MobileHeader = ({ show }) => {
    return (
        <section className='show_mobile_header'>
            <div className='show_mobile_background' style={headerBackground(show)}></div>
            <Title show={show} />
            {console.log(show)}
        </section>
    );
};

export default MobileHeader;