import React from 'react';

const PersonTitle = ({ personInformation }) => {
    const { birthday, deathday, name } = personInformation;

    return (
        <div>
            <h1>{name}</h1>
            <p></p>
        </div>
    );
};

export default PersonTitle;