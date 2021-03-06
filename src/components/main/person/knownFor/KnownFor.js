import React from 'react';
import KnownForCard from './KnownForCard';
import '../../../../styles/main/person/knownFor/KnownFor.css';

const KnownFor = ({ credits, format }) => {
    const topCredits = credits.sort((a, b) => b.vote_count - a.vote_count).slice(0, 10);

    const mapTopCredits = topCredits.map(credit => {
        return <KnownForCard key={credit.id} details={credit} format={format} />
    });

    return (
        <section className={format === 'mobile' ? 'known_for_mobile' : 'known_for_desktop'}>
            <h2>Known For</h2>
            <div className='known_for_cards'>
                {mapTopCredits}
            </div>
        </section>
    );
};

export default KnownFor;