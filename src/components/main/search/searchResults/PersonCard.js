import React from 'react';
import '../../../../styles/main/search/searchResults/PersonCard.css';

const PersonCard = ({ person }) => {
    const { known_for, known_for_department, name, profile_path } = person;

    return (
        <section className='person_card'>
            {console.log(person)}
            <div className='person_image'></div>
            <div className='person_info'>
                <div className='person_name'></div>
                <div className='person_known_for'></div>
            </div>
        </section>
    );
};

export default PersonCard;