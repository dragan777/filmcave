import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios/index";

const MovieCard = ({ movie }) => {


    const { addFavorite } = useContext(GlobalContext);
    const { removeFavorite } = useContext(GlobalContext);
    const { favorites } = useContext(GlobalContext);
    const [ favorite, setFavorite] = useState(false);
    const [ favoriteList, setFavoriteList] = useState([]);
    console.log(favorites);
    const onFavClick = (e) => {
        e.preventDefault();
        const newFavorite = movie;
        if(favoriteList.includes(movie.id)){
            removeFavorite(movie.id);
            favoriteList.splice(favoriteList.indexOf(movie.id), 1);

            setFavorite(false);
        }else{
            addFavorite(newFavorite);
            favoriteList.push(movie.id);
            setFavorite(true)
        }


    };

    useEffect(()=>{
        const result = favorites.map(a => a.id);
        setFavoriteList(result);

    },[favorite]);

    return (
        <div className="col-3">
        <div className="card">
            <button onClick={onFavClick} className={favoriteList.includes(movie.id) ? "btn btn-danger" : "btn btn-success"}>Add to fav{favoriteList.length}</button>
            <img src={`http://image.tmdb.org/t/p/w200//${movie.poster_path}`} className="card-img-top" alt={movie.title}/>
            <div className="card-header">
                {movie.title}
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source
                        Title</cite></footer>
                </blockquote>
            </div>
        </div>
        </div>
    );
};


export default MovieCard;