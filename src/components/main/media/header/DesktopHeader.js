import React from 'react';
import Facts from './Facts';
import Poster from './Poster';
import Title from './Title';
import backdropStyling from '../../../config/backdropStyling';
import '../../../../styles/main/media/header/DesktopHeader.css';

const DesktopHeader = ({ media }) => {
    return (
        <section className='media_desktop_header' style={backdropStyling()}>
            <div>
                <section className='media_header_left'>
                    <Poster />
                </section>
                <section className='media_header_right'>
                    <div className='media_header_title'>
                        <Title />
                        <Facts />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default DesktopHeader;