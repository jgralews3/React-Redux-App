import axios from 'axios'

export const NEW_CARD_FAIL = "NEW_CARD_FAIL";
export const NEW_CARD_SUCCESS = "NEW_CARD_SUCCESS";
export const API_CALL = "API_CALL";

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

export const newCard = () => (dispatch) => {
    dispatch({type: API_CALL});
    axios.get("https://api.magicthegathering.io/v1/cards")
    .then((res)=>{
        let random = getRandomInt(99)
        console.log(res.data.cards[random]);
        dispatch({type: NEW_CARD_SUCCESS, payload: res.data.cards[random]})
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type: NEW_CARD_FAIL})
    })
}