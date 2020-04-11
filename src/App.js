import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/Header";
import MovieSearch from "./components/movies/MovieSearch";
import Favorites from "./components/movies/Favorites";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function App() {
 return (
     <Router>
    <div className="App">
      <Header/>
        <Switch>
            <Route path="/favorites">
                <Favorites />
            </Route>

            <Route path="/">
                <MovieSearch />
            </Route>
        </Switch>
    </div>
     </Router>



  );

}

export default App;
