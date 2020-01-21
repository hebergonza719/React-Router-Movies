import React from 'react';
import { Link } from 'react-router-dom';

// SavedList is being called in App.js and gets the list prop which holds list of movies
const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link to="/"><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
