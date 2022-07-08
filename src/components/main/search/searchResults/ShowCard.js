import React from 'react';
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/search/searchResults/ShowCard.css'

const ShowCard = ({ show }) => {
    const { first_air_date, id,  name, overview, poster_path } = show;

    const linkTo = `/show/${id}`;

    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const getDate = new Date(first_air_date);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        if (first_air_date === undefined || first_air_date === '') return null;

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
            {console.log(show)}
            <div className='show_card_poster'>
                <Link to={linkTo}>
                    {getPoster()}
                </Link>
            </div>
            <div className='show_card_info'>
                <div className='show_card_name'>
                    <Link to={linkTo}>
                        <h4>{getName()}</h4>
                    </Link>
                    <p>{getDate()}</p>
                </div>
                <div className='show_card_overview'>
                    <p>{getOverview()}</p>
                </div>
            </div>
        </section>
    );
};

export default ShowCard;