import React, { Component } from 'react';
import tmdb from './TMDB';

class FilmListing extends Component {
    render() {
        {/* to loop all the films */}
        let allFilms = this.props.films.map( (film, index) => ( 
            <h1 key={index}>{film.title}</h1>
         ))
        return (
            <div>

                {/* ds 3shan nnade tro7 app and t76 leha prop tandenhm klhm b3den tsw specific one here l which one tbe */}
                <h1>{allFilms}</h1>



            </div>
        );
    }
}

export default FilmListing;
