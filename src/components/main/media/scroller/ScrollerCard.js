import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import '../../../../styles/main/media/scroller/ScrollerCard.css';

const ScrollerCard = ({ cardInfo }) => {
    const { character, name, profile_path } = cardInfo;

    const getCardImage = () => {};

    return (
        <section className='media_scroller_card'>ScrollerCard</section>
    );
};

export default ScrollerCard;