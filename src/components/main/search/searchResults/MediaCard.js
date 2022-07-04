import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/search/searchResults/MediaCard.css';

const MediaCard = ({ media }) => {
    const { first_air_date, name, overview, release_date, poster_path, title } = media;

    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const findDate = first_air_date || release_date;
        const getDate = new Date(findDate);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        if (findDate === undefined) return null;

        return `${monthNames[month]} ${day}, ${year}`;
    };

    const getOverview = () => {
        if (overview === '' || overview === null) return null;

        return overview;
    };

    const getPoster = () => {
        const posterPath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;

        if (poster_path === null) return <MovieIcon />

        return <img src={posterPath} alt={title} />
    };

    const getTitle = () => {
        if (name === '' || name === null) return null;
        if (title === '' || title === null) return null;        

        return name || title;
    };

    return (
        <section className='media_card'>
            <div className='card_image'>
                {getPoster()}
            </div>
            <div className='card_info'>
                <div className='card_title'>
                    <h4>{getTitle()}</h4>
                    <p>{getDate()}</p>
                </div>
                <div className='card_overview'>
                    <p>{getOverview()}</p>
                </div>
            </div>
        </section>
    );
};

export default MediaCard;