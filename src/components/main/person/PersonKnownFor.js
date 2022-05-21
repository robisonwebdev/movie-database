import React from 'react';
import '../../../styles/main/person/PersonKnownFor.css';

const PersonKnownFor = ({ credits, format }) => {
    const topCredits = credits.sort((a, b) => b.vote_count - a.vote_count);

    return (
        <section className={format === 'mobile' ? 'person_known_for_mobile' : 'person_known_for_desktop'}>
            
        </section>
    );
};

export default PersonKnownFor;