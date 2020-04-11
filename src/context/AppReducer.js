export default (state, action) => {
    switch (action.type) {
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(
                    (favorite) => favorite.id !== action.payload
                ),
            };
        case "ADD_FAVORITE": {
            return {
                ...state,
                favorites: [action.payload, ...state.favorites],
            };
        }
        case "ADD_TO_WATCHLIST": {
            return {
                ...state,
                watchList: [action.payload, ...state.watchList],
            };
        }
        case "REMOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.filter(
                    (item) => item.id !== action.payload
                ),
            };
        default:
            return state;
    }
};