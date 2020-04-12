import React, {useEffect, useState} from "react";
import Carousel from "./Carousel";
import axios from 'axios';


const Trending = (props) => {
    const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;
    const [movies ,setMovies] = useState([]);
    const [tvShows ,setTvShows] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                const res = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
                setMovies(res.data.results);
            }catch(err){
                throw new Error(err);
            }
        };
        fetchData();
    },[]);
    useEffect(()=>{
        const fetchData = async ()=> {
            try{
                const res = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=' + API_KEY);
                setTvShows(res.data.results);
            }catch(err){
                throw new Error(err);
            }
        };
        fetchData();
    },[]);


    return (
        <>
            <div className="container">
                <div className='row d-block'>

                    <h1 className='text-center'>Trending</h1>
                    <hr/>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='container'> <h2>People</h2></div>
                        <Carousel items={movies}/>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='container'><h2>Movies</h2></div>
                        <Carousel items={tvShows}/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Trending;