import React, { useContext }from "react";
import MovieCard from "./MovieCard";

import { GlobalContext } from "../../context/GlobalState";

const Favorites = () => {
    const { favorites } = useContext(GlobalContext);

    return (

        <div>

            {favorites.map((favoriteMovie) => (
                <MovieCard movie={favoriteMovie} key={favoriteMovie.id}/>
            ))}
        </div>
    );
};


export default Favorites;