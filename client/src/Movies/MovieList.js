import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// these props come from <route> from App.js
const MovieList = props => {
  // movies is the list of movies
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      // this is where the movie api is located and getting info from
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
    // no dependency array
  }, []);
  
  return (
    // here is it is displaying list of movies, by maping over each item
    <div className="movie-list">
      {/* this is calling the function below "MovieDetails" while sending props */}
      {movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
// this function is receiving movie and movie.id from MovieList.js
// main component is capitalized, nested ones are camelcased
function MovieDetails({ movie }) {
  // these variables are being declared part of the prop named "movie"
  // like movie.title, movie.director, movie.metascore
  const { title, director, metascore, stars, id } = movie;
  return (
    // movie.id comes from Key={movie.id} from Movielist
    // then I added id as an item inside object since it's  part of movie and renamed it
    // below just as id 
    // Before it was --> <Link to={`/movies/${movie.id}`}>
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </Link> // this link sends you to Movie.js for each individual movie
  );
}

export default MovieList;
