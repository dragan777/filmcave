import React, {useEffect, useState} from "react";


import axios from 'axios';
import MovieCard from "./MovieCard";


const MovieSearch = (props) => {
    const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;
    const SEARCH_ENDPOINT = process.env.REACT_APP_THEMOVIEDB_SEARCH_ENDPOINT;
    const [data, setData] = useState([]);
    const [filtered, setFilterd] = useState([]);
    const [query, setQuery] = useState("");
    const [tmpQuery, setTmpQuery] = useState("");
    useEffect(() => {
        if (query) {
            const fetchData = async () => {
                try {
                    const url = SEARCH_ENDPOINT + "?api_key=" + API_KEY + "&query=" + query;
                    const res = await axios.get(url);
                    setData(res.data.results);
                    //setFilterd(res.data.result);
                } catch (err) {
                    throw new Error(err);
                }
            };
            fetchData();
        }
    }, [query]);

    //console.log(data)

    const onKeyDown = (e) => {

        if (e.keyCode === 13) {
            setQuery(e.target.value);
        }
    }
    const onChange = (e) => {
        setTmpQuery(e.target.value);
    }
    const submitSearch = (e) => {

        setQuery(tmpQuery);
    }
    return (
        <div>
            <div className='cyan lighten-5 text-center'>
                <div className='container'>

                    <div className="md-form mr-auto my-0">
                        <div className="row">
                            <div className='col-12 col-md-10'>
                                <input className="form-control form-control-lg mr-sm-2 display-1" type="text" placeholder="Search"
                                       aria-label="Search" onKeyDown={onKeyDown} value={tmpQuery} onChange={onChange}/>
                            </div>
                            <div className='col-2'>
                                <button className="btn aqua-gradient btn-rounded d-none d-sm-block" type="button"
                                        onClick={submitSearch}>Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
            <div className='row'>
                {data.map((movie, i) => (
                        <MovieCard movie={movie} key={i}/>
                    )
                )
                }
            </div>
            </div>
        </div>
    )
}

export default MovieSearch;