// reducers/playReducer.js
const initialState = {
    scrollY: 0,
    isTabVisible: true,
};

const scrollReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SCROLL_Y':
            return {
                ...state,
                scrollY: action.payload,
            };
        case 'TOGGLE_TAB_VISIBILITY':
            return {
                ...state,
                isTabVisible: !state.isTabVisible,
            };
        default:
            return state;
    }
};

export default scrollReducer;
