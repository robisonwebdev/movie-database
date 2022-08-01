import React from 'react';
import DesktopHeader from '../media/header/DesktopHeader';
import Scroller from '../media/scroller/Scroller';
import '../../../styles/main/movie/MovieDesktop.css';

const MovieDesktop = ({ movie }) => {
    
    return (
        <section className='movie_desktop'>
           <DesktopHeader media={movie} />
           <section className='movie_desktop_main'>
                <section className='desktop_main_left'>
                    <Scroller content={movie.credits.cast} slice={10} title='Top Cast' />
                </section>
                <section className='desktop_main_right'></section>
           </section>
        </section>
    );
};

export default MovieDesktop;