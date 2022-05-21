import React from 'react';
import '../../../styles/main/person/PersonKnownFor.css';

const PersonKnownFor = ({ credits, format }) => {
    const topCredits = credits.sort((a, b) => b.vote_count - a.vote_count).slice(0, 10);

    return (
        <section className={format === 'mobile' ? 'person_known_for_mobile' : 'person_known_for_desktop'}>
            {console.log(topCredits)}
        </section>
    );
};

export default PersonKnownFor;