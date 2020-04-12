import React, {useContext} from "react";
import MovieCard from "./MovieCard";

import {GlobalContext} from "../../context/GlobalState";

const Favorites = (props) => {
    const {favorites} = useContext(GlobalContext);

    function handleNoFavorites() {
        if (favorites.length == 0) {
            return <h2>You don't have any favorite movie at this moment</h2>;
        }
    }

    return (

        <div className='container'>
            <h2 className='mb-3'>Favorites</h2>
            <div className='row'>

                {favorites.map((favoriteMovie) => (
                    <MovieCard movie={favoriteMovie} key={favoriteMovie.id} genres={props.genres}/>
                ))}
                {handleNoFavorites()}
            </div>
        </div>
    );
};


export default Favorites;