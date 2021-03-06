import {ADD_ITEM_TO_BASKET, DELETE_ITEM_TO_BASKET} from "../actionsTypes";

const initialState = [];

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_ITEM_TO_BASKET:
            const objIndex = state.findIndex(el => el.cardId === payload.cardId);
            if (state.length > 0 && objIndex > -1) {
                state[objIndex] = payload;
            } else {
                state.push(payload);
            }
            return [...state];

        case DELETE_ITEM_TO_BASKET:
            const arr = state.find(el => el.cardId === payload);
            state.splice(state.indexOf(arr), 1);
            return [...state];

        default:
            return state
    }
}
