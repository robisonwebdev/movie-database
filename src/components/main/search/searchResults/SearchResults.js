import React from 'react';
import MovieCard from './MovieCard';
import ResultsPagination from '../pagination/ResultsPagination';
import PersonCard from './PersonCard';
import ShowCard from './ShowCard';
import '../../../../styles/main/search/searchResults/SearchResults.css';

const SearchResults = ({ page, setPage, results, selectedResults }) => {
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
                return (
                    <>
                        {mapMovies}
                        <ResultsPagination count={movieResults.total_pages} page={page} setPage={setPage} />
                    </>
                );
            case 'People':
                return (
                    <>
                        {mapPeople}
                        <ResultsPagination count={peopleResults.total_pages} page={page} setPage={setPage} />
                    </>
                )
            case 'TV Shows':
                return (
                    <>
                        {mapTVShows}
                        <ResultsPagination count={showsResults.total_pages} page={page} setPage={setPage} />
                    </>
                )
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