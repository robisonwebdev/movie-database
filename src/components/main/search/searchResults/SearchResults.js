import React from 'react';
import MovieCard from './MovieCard';
import PersonCard from './PersonCard';
import ShowCard from './ShowCard';
import '../../../../styles/main/search/searchResults/SearchResults.css';

const SearchResults = ({ results, selectedResults }) => {
    const  { movieResults, peopleResults, showsResults } = results;

    const mapMovies = movieResults.results?.map(movie => {
        return <MovieCard key={movie.id} movie={movie} />
    });

    const mapPeople = peopleResults.results?.map(person => {
        return <PersonCard key={person.id} person={person} />
    });

    const mapTVShows = showsResults.results?.map(show => {
        return <ShowCard key={show.id} show={show} />
    });

    const showResults = () => {
        switch (selectedResults) {
            case 'Movies':
                return mapMovies;
            case 'People':
                return mapPeople;
            case 'TV Shows':
                return mapTVShows
            default:
                break;
        }
    };

    return (
        <section className='search_results_container'>
            {showResults()}
        </section>
    );
};

export default SearchResults;