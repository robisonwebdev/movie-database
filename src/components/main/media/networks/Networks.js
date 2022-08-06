import React from 'react';
import NetworkCard from './NetworkCard';
import '../../../../styles/main/media/networks/Networks.css';

const Networks = ({ media }) => {
    const { networks } = media;

    const buildNetworksList = networks?.map(network => {
        return <NetworkCard key={network.id} network={network} />
    });

    return (
        <section className='media_networks'>
            <h3>Networks</h3>
            <div className='networks_list'>
                {buildNetworksList}
            </div>
        </section>
    );
};

export default Networks;