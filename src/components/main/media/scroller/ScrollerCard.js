import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import '../../../../styles/main/media/scroller/ScrollerCard.css';

const ScrollerCard = ({ cardInfo }) => {
    const { character, id, name, profile_path } = cardInfo;
    const linkTo = `/person/${id}`;

    const getCardImage = () => {
        const imagePath = `https://www.themoviedb.org/t/p/w138_and_h175_face/${profile_path}`;

        if (profile_path === null) return <PersonIcon />;

        return <img src={imagePath} alt={name} />;
    };

    const getCharacter = () => {
        if (character === '' || character === null) return null;

        return character;
    };

    const getName = () => {
        if (name === '' || name === null) return null;

        return name;
    };

    return (
        <section className='media_scroller_card'>
            <div className='scroller_card_image'>
                <Link to={linkTo}>{getCardImage()}</Link>
            </div>
            <div className='scroller_card_info'>
                <Link to={linkTo}>
                    <h3>{getName()}</h3>
                </Link>
                <p>{getCharacter()}</p>
            </div>            
        </section>
    );
};

export default ScrollerCard;