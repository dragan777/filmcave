import React, { useContext }from "react";
import MovieCard from "./MovieCard";

import { GlobalContext } from "../../context/GlobalState";

const WatchList = () => {
    const { watchList } = useContext(GlobalContext);

    return (

        <div className='container'>
            <div className='row'>

            {watchList.map((favoriteMovie) => (
                <MovieCard movie={favoriteMovie} key={favoriteMovie.id}/>
            ))}
            </div>
        </div>
    );
};


export default WatchList;