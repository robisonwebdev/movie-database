import React from 'react';
import { Link } from 'react-router-dom';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/search/searchResults/MovieCard.css';

const MovieCard = ({ movie }) => {
    const { id, overview, release_date, poster_path, title } = movie;

    const linkTo = `/movie/${id}`;

    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const getDate = new Date(release_date);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        if (release_date === undefined || release_date === '') return null;

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
        if (title === '' || title === null) return null;        

        return title;
    };

    return (
        <section className='movie_card'>
            <div className='movie_card_poster'>
                <Link to={linkTo}>
                    {getPoster()}
                </Link>
            </div>
            <div className='movie_card_info'>
                <div className='movie_card_title'>
                    <Link to={linkTo}>
                        <h4>{getTitle()}</h4>
                    </Link>
                    <p>{getDate()}</p>
                </div>
                <div className='movie_card_overview'>
                    <p>{getOverview()}</p>
                </div>
            </div>
        </section>
    );
};

export default MovieCard;