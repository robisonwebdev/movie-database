import React from 'react';
import DesktopHeader from '../media/header/DesktopHeader';
import Networks from '../media/networks/Networks';
import Scroller from '../media/scroller/Scroller';
import '../../../styles/main/show/ShowDesktop.css';

const ShowDesktop = ({ show }) => {
    return (
        <section className='show_desktop'>
            <DesktopHeader media={show} />
            <section className='show_desktop_main'>
                <section className='show_desktop_left'>
                    <Scroller content={show.credits.cast} slice={10} title='Series Cast' />
                </section>
                <section className='show_desktop_right'>
                    <Networks media={show} />
                </section>
            </section>
        </section>
    );
};

export default ShowDesktop;