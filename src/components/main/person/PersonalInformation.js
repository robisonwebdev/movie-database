import React from 'react';
import '../../../styles/main/person/PersonalInformation.css';

const PersonalInformation = ({ personalInformation }) => {
    const { birthday, birthPlace, deathday, gender, knownFor } = personalInformation;

    const getDeathday = () => {
        if (deathday === null) return null;

        return (
            <>
                <h3>Death</h3>
                <p>{deathday}</p>
            </>
        );
    };

    return (
        <section className='personal_information'>
            <h2>Personal Information</h2>
            {getDeathday()}
        </section>
    );
};

export default PersonalInformation;