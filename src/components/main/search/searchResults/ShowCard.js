import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/search/searchResults/ShowCard.css'

const ShowCard = ({ show }) => {
    const { first_air_date, name, overview, poster_path } = show;

    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const getDate = new Date(first_air_date);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        if (first_air_date === undefined) return null;

        return `${monthNames[month]} ${day}, ${year}`;
    };

    const getOverview = () => {
        if (overview === '' || overview === null) return null;

        return overview;
    };

    const getName = () => {
        if (name === '' || name === null) return null;

        return name;
    };

    const getPoster = () => {
        const posterPath = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`;

        if (poster_path === null) return <MovieIcon />

        return <img src={posterPath} alt={name} />
    };
    
    return (
        <section className='show_card'>
            <div className='show_poster'>
                {getPoster()}
            </div>
            <div className='show_info'>
                <div className='show_name'>
                    <h4>{getName()}</h4>
                    <p>{getDate()}</p>
                </div>
                <div className='show_overview'>
                    <p>{getOverview()}</p>
                </div>
            </div>
        </section>
    );
};

export default ShowCard;