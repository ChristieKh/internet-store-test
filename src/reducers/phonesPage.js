import R from 'ramda';
import {FETCH_CATEGORIES_SUCCESS} from "../actionsTypes";


const initialState = {
    ids: []
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            });
        default:
            return state
    }
}
