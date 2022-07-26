import React from 'react';
import Facts from './Facts';
import Overview from './Overview';
import Poster from './Poster';
import Tagline from './Tagline';
import Title from './Title';
import backdropStyling from '../../../config/backdropStyling';
import '../../../../styles/main/media/header/MobileHeader.css';

const MobileHeader = ({ media }) => {
    return (
        <section className='media_mobile_header'>
            {console.log('Mobile:', media)}
            <div className='media_mobile_backdrop' style={backdropStyling(media)}>
                <Poster />
            </div>
            <Title media={media} />
            <Facts isMobile={true} media={media} />
            <Tagline media={media} />
            <Overview media={media} />
        </section>
    );
};

export default MobileHeader;