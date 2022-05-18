import React from 'react';
import '../../../styles/main/person/PersonalInformation.css';

const PersonalInformation = ({ personalInformation }) => {
    const { birthday, birthPlace, deathday, gender, knownFor } = personalInformation;

    const getBirthday = () => {
        if (birthday === null) return null;

        return <Format info={birthday} title='Birthday' />
    };

    const getBirthPlace = () => {
        if (birthPlace === null) return null;

        return <Format info={birthPlace} title='Place of birth' />
    };

    const getDeathday = () => {
        if (deathday === null) return null;

        return <Format info={deathday} title='Death' />
    };

    return (
        <section className='personal_information'>
            <h3>Personal Information</h3>
            {getBirthday()}
            {getDeathday()}
            {getBirthPlace()}
        </section>
    );
};

const Format = ({ info, title }) => {
    return (
        <div>
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    );
}

export default PersonalInformation;