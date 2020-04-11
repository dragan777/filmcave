import React, { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";
const initialState = {
    favorites: [],
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider Component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // Actions

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
                removeFavorite,
                addFavorite,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
