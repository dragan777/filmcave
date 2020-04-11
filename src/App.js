import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/Header";
import MovieSearch from "./components/movies/MovieSearch";

function App() {
  return (
    <div className="App">
      <Header/>
        <MovieSearch/>
    </div>
  );
}

export default App;
