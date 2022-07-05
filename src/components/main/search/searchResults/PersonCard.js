import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import '../../../../styles/main/search/searchResults/PersonCard.css';

const PersonCard = ({ person }) => {
    const { known_for, known_for_department, name, profile_path } = person;

    const getName = () => {
        if (typeof name !== 'string') return 'Unknown';

        return name;
    };

    const getProfileImage = () => {
        const profilePath = `https://image.tmdb.org/t/p/w90_and_h90_face/${profile_path}`;

        if (profile_path === null) return <PersonIcon />

        return <img src={profilePath} alt={name} />
    };

    return (
        <section className='person_card'>
            {console.log(person)}
            <div className='person_image'>
                {getProfileImage()}
            </div>
            <div className='person_info'>
                <div className='person_name'>
                    <p>{getName()}</p>
                </div>
                <div className='person_known_for'></div>
            </div>
        </section>
    );
};

export default PersonCard;