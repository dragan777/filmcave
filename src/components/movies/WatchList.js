import React, { useContext }from "react";
import MovieCard from "./MovieCard";

import { GlobalContext } from "../../context/GlobalState";

const WatchList = (props) => {
    const { watchList } = useContext(GlobalContext);
    function handleNoWatchlist() {
        if (watchList.length == 0) {
            return <h2>You don't have any movie in your watchlist right now</h2>;
        }
    }
    return (

        <div className='container'>
            <h2 className='mb-3'>Watchlist</h2>
            <div className='row'>
            {watchList.map((favoriteMovie) => (
                <MovieCard movie={favoriteMovie} key={favoriteMovie.id} genres = {props.genres}/>
            ))}
                {handleNoWatchlist()}
            </div>
        </div>
    );
};


export default WatchList;