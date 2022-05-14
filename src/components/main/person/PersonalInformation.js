import React from 'react';
import '../../../styles/main/person/PersonalInformation.css';

const PersonalInformation = ({ personalInformation }) => {
    const { birthday, birthPlace, deathday, gender, knownFor } = personalInformation;

    return (
        <section className='personal_information'>PersonalInformation</section>
    );
};

export default PersonalInformation;