import React from 'react';
import SocialMedia from './SocialMedia';
import '../../../../styles/main/person/misc/Title.css';

const Title = ({ format, personInformation }) => {
    const { name } = personInformation;

    return (
        <div className={format === 'mobile' ? 'person_title_mobile' : 'person_title_desktop'}>
            <h1>{name}</h1>
            {format === 'mobile' ? <SocialMedia socialMedia={personInformation} /> : null}
        </div>
    );
};

export default Title;