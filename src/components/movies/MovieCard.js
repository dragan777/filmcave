import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const MovieCard = ({ movie }) => {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addFavorite } = useContext(GlobalContext);

    const onFavClick = (e) => {
        e.preventDefault();
        const newFavorite = {
            id: Math.floor(Math.random() * 100000000),
            text: movie.title,

        };

        addFavorite(newFavorite);
        setText("");
        setAmount(0);
    };

    return (
        <div className="col-3">
        <div className="card">
            <button onClick={onFavClick}>Add to fav</button>
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