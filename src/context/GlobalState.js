import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    favorites: [],
    watchList: [],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions

    function removeFromWatchList(id) {
        dispatch({
            type: "REMOVE_FROM_WATCHLIST",
            payload: id,
        });
    }
    function addToWatchList(movie) {
        dispatch({
            type: "ADD_TO_WATCHLIST",
            payload: movie,
        });
    }

    function removeFavorite(id) {
        dispatch({
            type: "REMOVE_FAVORITE",
            payload: id,
        });
    }
    function addFavorite(favorite) {
        dispatch({
            type: "ADD_FAVORITE",
            payload: favorite,
        });
    }
    return (
        <GlobalContext.Provider
            value={{
                favorites: state.favorites,
                watchList: state.watchList,
                removeFavorite,
                addFavorite,
                addToWatchList,
                removeFromWatchList
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
