import React, {useEffect, useState} from "react";
import './App.css';
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import MovieSearch from "./components/movies/MovieSearch";
import Favorites from "./components/movies/Favorites";
import WatchList from "./components/movies/WatchList";
import {GlobalProvider} from "./context/GlobalState";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Trending from "./components/movies/Trending";
import axios from "axios/index";

function App() {
    const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;
    const [genres ,setGenres] = useState([]);

    useEffect(() => {

            const fetchData = async () => {
                try {
                    const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=" + API_KEY);
                    setGenres(res.data.genres);
                } catch (err) {
                    throw new Error(err);
                }
            };
            fetchData();

    }, []);


    return (
        <GlobalProvider>

            <Router>

                <Header/>
                    <Switch>
                        <Route path="/favorites">
                            <Favorites  genres={genres}/>
                        </Route>
                        <Route path="/watchlist">
                            <WatchList  genres={genres}/>
                        </Route>
                        <Route path="/">
                            <MovieSearch genres={genres}/>
                        </Route>
                    </Switch>

            </Router>
            <Trending/>
            <Footer/>


        </GlobalProvider>
    );

}

export default App;
