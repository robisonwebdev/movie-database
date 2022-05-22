import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../styles/main/person/KnownForCard.css';

const KnownForCard = ({ details, format }) => {
    const { name, poster_path, title} = details;
    
    const getImageSrc = () => {
        if (poster_path === null || poster_path === '') return <MovieIcon />

        return `https://www.themoviedb.org/t/p/w150_and_h225_bestv2${poster_path}`;
    };

    return (
        <section className={format === 'mobile' ? 'known_for_card_mobile' : 'known_for_card_desktop'}>
            <img src={getImageSrc()} alt={name || title} />
            <p>{name || title }</p>
        </section>
    );
};

export default KnownForCard;