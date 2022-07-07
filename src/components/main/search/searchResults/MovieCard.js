import React from 'react';
import MovieIcon from '@mui/icons-material/Movie';
import '../../../../styles/main/search/searchResults/MovieCard.css';

const MovieCard = ({ movie }) => {
    const { overview, release_date, poster_path, title } = movie;

    const getDate = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const getDate = new Date(release_date);
        const year = getDate.getUTCFullYear();
        const month = getDate.getUTCMonth();
        const day = getDate.getUTCDate();

        if (release_date === undefined) return null;

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
            <div className='movie_poster'>
                {getPoster()}
            </div>
            <div className='movie_info'>
                <div className='movie_title'>
                    <h4>{getTitle()}</h4>
                    <p>{getDate()}</p>
                </div>
                <div className='movie_overview'>
                    <p>{getOverview()}</p>
                </div>
            </div>
        </section>
    );
};

export default MovieCard;