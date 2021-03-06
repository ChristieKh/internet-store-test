import {CHANGE_VALUE_COUNTER, DECREMENT_ITEM_TO_BASKET, INCREMENT_ITEM_TO_BASKET} from "../actionsTypes";

const initalState = {
    value: 1
};

export default (state = initalState, {type, payload}) => {
    switch (type) {
        case INCREMENT_ITEM_TO_BASKET:
            if (payload > state.value) {
                return {...state, value: state.value + 1};
            }

        case DECREMENT_ITEM_TO_BASKET:
            if (state.value >= 1) {
                return {...state, value: state.value - 1};
            }

        case CHANGE_VALUE_COUNTER:
            return {...state, value: Number(payload)};

        default:
            return state;
    }
}
