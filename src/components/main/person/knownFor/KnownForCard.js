import React from 'react';
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/person/knownFor/KnownForCard.css';

const KnownForCard = ({ details, format }) => {
    const { id, name, poster_path, title} = details;

    const linkTo = `/movie/${id}`;

    const getPoster = () => {
        if (poster_path === null || poster_path === '') return <MovieIcon />;

        return (
            <Link to={linkTo}>
                <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2${poster_path}`} alt={name || title} />
            </Link>
        );
    };

    return (
        <section className={format === 'mobile' ? 'known_for_card_mobile' : 'known_for_card_desktop'}>
            <div className='card_poster'>
                {getPoster()}
            </div>
            <p>
                <Link to={linkTo}>
                    {name || title}
                </Link>
            </p>
        </section>
    );
};

export default KnownForCard;