import React, {useContext, useEffect, useState} from "react";
import {GlobalContext} from "../../context/GlobalState";

const MovieCard = ({movie, genres}) => {


    const {addFavorite} = useContext(GlobalContext);
    const {removeFavorite} = useContext(GlobalContext);

    const {addToWatchList} = useContext(GlobalContext);
    const {removeFromWatchList} = useContext(GlobalContext);

    const {favorites} = useContext(GlobalContext);
    const {watchList} = useContext(GlobalContext);

    const [favorite, setFavorite] = useState(false);
    const [inWatchList, setInWatchList] = useState(false);

    const [favoriteList, setFavoriteList] = useState([]);
    const [watchListTmp, setWatchListTmp] = useState([]);

    const onFavClick = (e) => {
        e.preventDefault();
        const newFavorite = movie;
        if (favoriteList.includes(movie.id)) {
            removeFavorite(movie.id);
            favoriteList.splice(favoriteList.indexOf(movie.id), 1);
            setFavorite(false);
        } else {
            addFavorite(newFavorite);
            favoriteList.push(movie.id);
            setFavorite(true)
        }
    };


    const onClockClick = (e) => {
        e.preventDefault();
        const newInWatchList = movie;
        if (watchListTmp.includes(movie.id)) {
            removeFromWatchList(movie.id);
            watchListTmp.splice(watchListTmp.indexOf(movie.id), 1);
            setInWatchList(false);
        } else {
            addToWatchList(newInWatchList);
            watchListTmp.push(movie.id);
            setInWatchList(true);
        }
    };

    useEffect(() => {
        const result = favorites.map(a => a.id);
        setFavoriteList(result);

    }, [favorite]);

    useEffect(() => {
        const result = watchList.map(a => a.id);
        setWatchListTmp(result);
    }, [inWatchList]);
    let genresObj = genres.reduce(function (acc, curr) {

        acc[curr.id] = curr.name;
        return acc;
    }, {});
    return (
        <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3 pb-2'>
            <div className="card card-cascade wider">
                <div className="view view-cascade overlay">
                    <img className="card-img-top"
                         src={movie.backdrop_path ? `http://image.tmdb.org/t/p/w1280//${movie.backdrop_path}` : process.env.PUBLIC_URL + '/placeholder.jpg'}/>
                    <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div className="card-body card-body-cascade text-center pb-0">
                    <div className="news-data d-flex justify-content-between">
                        <a href="#!" className="light-blue-text">
                            <h6 className="font-weight-bold"><i
                                className="fa fa-plane pr-2"></i>{genresObj[movie.genre_ids[0]]}</h6>
                        </a>
                        <p className="font-weight-bold dark-grey-text"><i
                            className="far fa-clock pr-2"></i>{movie.release_date}</p>
                    </div>
                    <h4 className="card-title"><strong>{movie.title}</strong></h4>
                    {<p className="card-text">{movie.overview.substr(0, 200)} ...

                    </p>}
                    <span className="p-2">
                <i className={favoriteList.includes(movie.id) ? "fas fa-star" : "far fa-star"} onClick={onFavClick}></i>
                </span>
                    <span className="p-2">
                <i className={watchListTmp.includes(movie.id) ? "fas fa-clock" : "far fa-clock"}
                   onClick={onClockClick}></i>
                </span>

                </div>
                <div className="card-footer text-muted text-center mt-4">
                    <i className="fas fa-thumbs-up"></i>{movie.vote_count}
                </div>
            </div>
        </div>
    );
};


export default MovieCard;