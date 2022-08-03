import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import '../../../../styles/main/media/scroller/ScrollerCard.css';

const ScrollerCard = ({ cardInfo }) => {
    const { character, name, profile_path } = cardInfo;

    const getCardImage = () => {
        const imagePath = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`;

        if (profile_path === null) return <PersonIcon />;

        return <img src={imagePath} alt={name} />;
    };

    const getCharacter = () => {
        if (character === '' || character === null) return null;

        return character;
    };

    return (
        <section className='media_scroller_card'>
            {getCardImage()}
        </section>
    );
};

export default ScrollerCard;