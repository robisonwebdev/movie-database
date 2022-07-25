import React from 'react';
import Facts from './Facts';
import Overview from './Overview';
import Poster from './Poster';
import Tagline from './Tagline';
import Title from './Title';
import backdropStyling from '../../../config/backdropStyling';
import '../../../../styles/main/media/header/DesktopHeader.css';

const DesktopHeader = ({ media }) => {
    return (
        <section className='media_desktop_header' style={backdropStyling(media)}>
            <div className='media_desktop_container'>
                <section className='media_header_left'>
                    <Poster />
                </section>
                <section className='media_header_right'>
                    <div className='media_header_title'>
                        <Title />
                        <Facts isMobile={false} media={media} />
                    </div>
                    <Tagline media={media} />
                    <Overview media={media} />
                </section>
            </div>
        </section>
    );
};

export default DesktopHeader;