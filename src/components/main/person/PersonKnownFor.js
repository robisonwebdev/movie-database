import React from 'react';
import KnownForCard from './KnownForCard';
import '../../../styles/main/person/PersonKnownFor.css';

const PersonKnownFor = ({ credits, format }) => {
    const topCredits = credits.sort((a, b) => b.vote_count - a.vote_count).slice(0, 10);

    const mapTopCredits = topCredits.map(credit => {
        return <KnownForCard key={credit.id} details={credit} format={format} />
    });

    return (
        <section className={format === 'mobile' ? 'person_known_for_mobile' : 'person_known_for_desktop'}>
            <h3>Known For</h3>
            {mapTopCredits}
            {console.log(topCredits)}
        </section>
    );
};

export default PersonKnownFor;