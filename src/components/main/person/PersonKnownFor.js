import React from 'react';
import '../../../styles/main/person/PersonKnownFor.css';

const PersonKnownFor = ({ credits, format }) => {
    return (
        <section className={format === 'mobile' ? 'person_known_for_mobile' : 'person_known_for_desktop'}>
            
        </section>
    );
};

export default PersonKnownFor;