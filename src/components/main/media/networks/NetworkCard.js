import React from 'react';
import '../../../../styles/main/media/networks/NetworkCard.css';

const NetworkCard = ({ network }) => {
    const { logo_path, name } = network;

    const logoAddress  = `https://www.themoviedb.org/t/p/h30/${logo_path}`;

    return (
        <div className='network_card'>
            <img src={logoAddress} alt={name} />
        </div>
    );
};

export default NetworkCard;