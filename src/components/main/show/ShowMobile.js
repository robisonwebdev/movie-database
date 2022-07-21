import React from 'react';
import MobileHeader from '../media/header/MobileHeader';
import '../../../styles/main/show/ShowMobile.css';

const ShowMobile = ({ show }) => {
    return (
        <section className='show_mobile'>
            <MobileHeader media={show} />
            <section className='show_mobile_main'>Main</section>
        </section>
    );
};

export default ShowMobile;