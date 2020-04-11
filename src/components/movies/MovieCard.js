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
        <div className='col-3 mb-3'>
        <div className="card card-cascade wider">
            <div className="view view-cascade overlay">
                <img className="card-img-top" src={`http://image.tmdb.org/t/p/w200//${movie.backdrop_path}`} alt="Card image cap"/>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
            </div>
            <div className="card-body card-body-cascade text-center pb-0">
                <h4 className="card-title"><strong>{movie.title}</strong></h4>
                {/*<p className="card-text">{movie.overview}</p>*/}
                <i className={favoriteList.includes(movie.id) ? "fas fa-star" : "far fa-star"} onClick={onFavClick} ></i>

            </div>
        </div>
        </div>
        );
};


export default MovieCard;