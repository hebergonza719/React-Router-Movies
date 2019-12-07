import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  useEffect(() => {
    // this "props.match.params" gets sent from <route> 
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook


      // this gets you the specific info for the movie selected  
      axios
       .get(`http://localhost:5000/api/movies/${id}`)
       .then(response => {
         setMovie(response.data);
       })
       .catch(error => {
         console.error(error);
       });
       // why do we need this dependency array??
  },[props.match.params.id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }
  // the line below isn't necessary since none of them are being used
  // const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button">Save</div>
    </div>
  );
}

export default Movie;
