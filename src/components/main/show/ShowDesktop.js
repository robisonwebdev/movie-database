import React from 'react';
import DesktopHeader from '../media/header/DesktopHeader';
import '../../../styles/main/show/ShowDesktop.css';

const ShowDesktop = ({ show }) => {
    return (
        <section className='show_desktop'>
            <DesktopHeader media={show} />
            <section className='show_desktop_main'>Main</section>
        </section>
    );
};

export default ShowDesktop;