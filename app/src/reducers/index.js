import {NEW_CARD_SUCCESS, NEW_CARD_FAIL, API_CALL} from '../actions/index'

const initialState = {
    cardName: "Find Your New Commander",
    isFetching: false,
    error: "",
    cardImage: "",
    cardText: "",
    commanders: [{cardName: "Neheb", color: "R"}]
}

export const reducer = (state=initialState, action) => {
    switch (action.type){
        case API_CALL:
            console.log("called");
            return{...state, isFetching: true, error: ""}
        case NEW_CARD_SUCCESS:
            return {...state, isFetching: false, cardName: action.payload.name, cardImage: action.payload.imageUrl, cardText: action.payload.text};
        case NEW_CARD_FAIL:
            return {...state, isFetching: false, error: "Not Found"};
        default:
            return state;
    }
}