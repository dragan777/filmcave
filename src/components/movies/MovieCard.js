import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const MovieCard = ({ movie }) => {
    return (
        <div className="col-3">
        <div className="card">
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