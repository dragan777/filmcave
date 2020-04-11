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
        default:
            return state;
    }
};