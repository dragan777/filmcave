import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import axios from "axios/index";

const MovieCard = ({ movie }) => {


    const { addFavorite } = useContext(GlobalContext);
    const { removeFavorite } = useContext(GlobalContext);

    const { addToWatchList } = useContext(GlobalContext);
    const { removeFromWatchList } = useContext(GlobalContext);

    const { favorites } = useContext(GlobalContext);
    const { watchList } = useContext(GlobalContext);

    const [ favorite, setFavorite] = useState(false);
    const [ inWatchList, setInWatchList] = useState(false);

    const [ favoriteList, setFavoriteList] = useState([]);
    const [ watchListTmp, setWatchListTmp] = useState([]);

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


    const onClockClick = (e) => {
        e.preventDefault();
        const newInWatchList = movie;
        if(watchListTmp.includes(movie.id)){
            removeFromWatchList(movie.id);
            watchListTmp.splice(watchListTmp.indexOf(movie.id), 1);
            setInWatchList(false);
        }else{
            addToWatchList(newInWatchList);
            watchListTmp.push(movie.id);
            setInWatchList(true);
        }
    };

    useEffect(()=>{
        const result = favorites.map(a => a.id);
        setFavoriteList(result);

    },[favorite]);

    useEffect(()=>{
        const result = watchList.map(a => a.id);
        setWatchListTmp(result);
    },[inWatchList]);

    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 pb-2'>
        <div className="card card-cascade wider">
            <div className="view view-cascade overlay">
                <img className="card-img-top" src={movie.backdrop_path ? `http://image.tmdb.org/t/p/w200//${movie.backdrop_path}` : process.env.PUBLIC_URL + '/placeholder.jpg'} />
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
            </div>
            <div className="card-body card-body-cascade text-center pb-0">
                <h4 className="card-title"><strong>{movie.title}</strong></h4>
                {/*<p className="card-text">{movie.overview}</p>*/}
                <i className={favoriteList.includes(movie.id) ? "fas fa-star" : "far fa-star"} onClick={onFavClick} ></i>
                <i className={watchListTmp.includes(movie.id) ? "fas fa-clock" : "far fa-clock"} onClick={onClockClick} ></i>

            </div>
            <div className="card-footer text-muted text-center mt-4">
                <i className="fas fa-thumbs-up"></i>{movie.vote_count}
            </div>
        </div>
        </div>
        );
};


export default MovieCard;