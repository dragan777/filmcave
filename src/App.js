import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/Header";
import MovieSearch from "./components/movies/MovieSearch";
import Favorites from "./components/movies/Favorites";
import WatchList from "./components/movies/WatchList";
import {GlobalProvider} from "./context/GlobalState";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Trending from "./components/movies/Trending";

function App() {
    return (
        <GlobalProvider>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route path="/favorites">
                            <Favorites/>
                        </Route>
                        <Route path="/watchlist">
                            <WatchList/>
                        </Route>
                        <Route path="/">
                            <MovieSearch/>
                        </Route>
                    </Switch>
                </div>
            </Router>
            <Trending/>


        </GlobalProvider>
    );

}

export default App;
