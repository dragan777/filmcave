import React, { useContext }from "react";


import { GlobalContext } from "../../context/GlobalState";

const Favorites = () => {
    const { favorites } = useContext(GlobalContext);
    console.log(favorites);
    return (

        <div>

            {favorites.map((favorite) => (
                <div key={favorite.id}>{favorite.text} </div>
            ))}
        </div>
    );
};


export default Favorites;