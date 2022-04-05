const initialState = {
    selectedTab: 'Home'
}

const drawerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SELECTED_TAB":
            return {
                ...state,
                selectedTab: action.value
            }
    
        default:
            return state;
    }
}

export default drawerReducer;