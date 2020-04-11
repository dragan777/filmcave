import React, { useContext }from "react";
import MovieCard from "./MovieCard";

import { GlobalContext } from "../../context/GlobalState";

const Favorites = () => {
    const { favorites } = useContext(GlobalContext);

    return (

        <div className='container'>
            <div className='row'>

            {favorites.map((favoriteMovie) => (
                <MovieCard movie={favoriteMovie} key={favoriteMovie.id}/>
            ))}
            </div>
        </div>
    );
};


export default Favorites;