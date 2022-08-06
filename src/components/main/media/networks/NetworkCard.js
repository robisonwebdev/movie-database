import React from 'react';
import '../../../../styles/main/media/networks/NetworkCard.css';

const NetworkCard = ({ network }) => {
    const { logo_path, name } = network;

    return (
        <div className='network_card'>NetworkCard</div>
    );
};

export default NetworkCard;