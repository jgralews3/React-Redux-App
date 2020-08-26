import {NEW_CARD_SUCCESS, NEW_CARD_FAIL, API_CALL} from '../actions/index'

const initialState = {
    cardName: "Find Your Spirit Card",
    isFetching: false,
    error: "",
    cardImage: ""
}

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case API_CALL:
            console.log("called");
            return{...state, isFetching: true}
        case NEW_CARD_SUCCESS:
            return {...state, isFetching: false, cardName: action.payload.name, cardImage: action.payload.imageUrl};
        case NEW_CARD_FAIL:
            return {...state, isFetching: false};
        default:
            return state;
    }
}