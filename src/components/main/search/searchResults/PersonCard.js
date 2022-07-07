import React from 'react';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import '../../../../styles/main/search/searchResults/PersonCard.css';

const PersonCard = ({ person }) => {
    const { id, known_for, known_for_department, name, profile_path } = person;

    const linkTo = `/person/${id}`;

    const getKnownFor = () => {
        const knownForArray = [];

        if (known_for.length < 1) return null;

        known_for?.forEach(item => {
            knownForArray.push(item.title || item.name);
        });

        return knownForArray.join(', ');
    };

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
            <div className='person_image'>
                <Link to={linkTo}>
                    {getProfileImage()}
                </Link>
            </div>
            <div className='person_info'>
                <div className='person_name'>
                    <Link to={linkTo}>
                        <p>{getName()}</p>
                    </Link>
                </div>
                <div className='person_known_for'>
                    <p>{known_for_department}</p>
                    &#8226;
                    <p>{getKnownFor()}</p>
                </div>
            </div>
        </section>
    );
};

export default PersonCard;