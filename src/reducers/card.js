import {FETCH_CARD_SUCCESS} from "../actionsTypes";


const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CARD_SUCCESS:
            return payload;
        default:
            return state
    }
}
