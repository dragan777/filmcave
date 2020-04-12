import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
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

            </Router>
            <Trending/>
            <Footer/>


        </GlobalProvider>
    );

}

export default App;
