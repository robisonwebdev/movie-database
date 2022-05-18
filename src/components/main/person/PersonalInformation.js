import React from 'react';
import '../../../styles/main/person/PersonalInformation.css';

const PersonalInformation = ({ personalInformation }) => {
    const { birthday, birthPlace, deathday, gender, knownFor } = personalInformation;

    const getBirthday = () => {
        if (birthday === null) return null;

        return <Format info={birthday} title='Birthday' />
    };

    const getDeathday = () => {
        if (deathday === null) return null;

        return <Format info={deathday} title='Death' />
    };

    return (
        <section className='personal_information'>
            <h2>Personal Information</h2>
            {getBirthday()}
            {getDeathday()}
        </section>
    );
};

const Format = ({ info, title }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{info}</p>
        </div>
    );
}

export default PersonalInformation;