import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/person/knownFor/KnownForCard.css';

const KnownForCard = ({ details, format }) => {
    const { name, poster_path, title} = details;

    const getPoster = () => {
        if (poster_path === null || poster_path === '') return <MovieIcon />;

        return <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${poster_path}`} alt={name || title} />
    };

    return (
        <section className={format === 'mobile' ? 'known_for_card_mobile' : 'known_for_card_desktop'}>
            <div className='card_poster'>
                {getPoster()}
            </div>
            <p>{name || title }</p>
        </section>
    );
};

export default KnownForCard;