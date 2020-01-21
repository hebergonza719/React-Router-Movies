import React, { useState } from 'react';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import { Link, Route } from 'react-router-dom';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/* <Route path="/movies/:id" component={Movie} /> */}
      {/* instead of using component, use render */}
      {/* render has props and an anonymous function */}
      <Route
        path="/movies/:id"
        // {...props} sends id 
        // addToSavedList={addToSavedList} are connected, sending component to Movie
        render={props => <Movie addToSavedList={addToSavedList} {...props} />}
      />
    </div>
  );
};

export default App;
