import R from 'ramda';
import {FETCH_ITEMS_SUCCESS} from "../actionsTypes";


const initialState = {};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_ITEMS_SUCCESS:
            const newValues = R.groupBy(R.prop('category_id'), payload);
            return R.merge(state, newValues);
        default:
            return state
    }
}
