import React, { Component } from 'react';
import TMDB from './components/TMDB';
import FilmListing from './components/FilmListing';

// hne tnadehm kaml
const filmsT = TMDB.films
class Film extends Component{
  render(){
    return(
        <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {/* hne t5tar specific one` */}
          <FilmListing films = {filmsT}/>
        </div>
      
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>    
      )
  }
}

export default Film
