import React from 'react';
import '../../../styles/main/person/PersonalInformation.css';

const PersonalInformation = ({ format, personalInformation }) => {
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

    const getGender = () => {
        switch (gender) {
            case 0:
                return <Format info='Unknown' title='Gender' />
            case 1:
                return <Format info='Female' title='Gender' />
            case 2:
                return <Format info='Male' title='Gender' />
            case 3:
                return <Format info='Non-binary' title='Gender' />
            default:
                return null;
        };
    };

    const getKnownFor = () => {
        if (knownFor === null) return null;

        return <Format info={knownFor} title='Known For' />
    };

    return (
        <section className={format === 'mobile' ? 'personal_information_mobile' : 'personal_information_desktop'}>
            <h3>Personal Information</h3>
            <div className='person_information_items'>
                {getKnownFor()}
                {getGender()}
                {getBirthday()}
                {getDeathday()}
                {getBirthPlace()}
            </div>
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