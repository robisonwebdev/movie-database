import React from 'react';
import DesktopHeader from './header/DesktopHeader';
import '../../../styles/main/show/ShowDesktop.css';

const ShowDesktop = () => {
    return (
        <section className='show_desktop'>
            <DesktopHeader />
            <section className='show_desktop_main'>Main</section>
        </section>
    );
};

export default ShowDesktop;