import {
    FETCH_CATEGORIES_START, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_FAIL,
    FETCH_ITEMS_START, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAIL,
    FETCH_CARD_START, FETCH_CARD_SUCCESS, FETCH_CARD_FAIL,
    ADD_ITEM_TO_BASKET,DELETE_ITEM_TO_BASKET,
    INCREMENT_ITEM_TO_BASKET, DECREMENT_ITEM_TO_BASKET, CHANGE_VALUE_COUNTER
} from '../actionsTypes';
import {fetchCategoriesApi, fetchItemsApi, fetchCardApi} from '../api';

export const fetchCategory = () => async dispatch => {
    dispatch({type: FETCH_CATEGORIES_START});

    try {
        const categories = await fetchCategoriesApi();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAIL,
            payload: err,
            error: true
        })
    }
};

export const fetchItems = () => async dispatch => {
    dispatch({type: FETCH_ITEMS_START});

    try {
        const items = await fetchItemsApi();
        dispatch({
            type: FETCH_ITEMS_SUCCESS,
            payload: items
        })
    } catch (err) {
        dispatch({
            type: FETCH_ITEMS_FAIL,
            payload: err,
            error: true
        })
    }
};

export const fetchCard = (id) => async dispatch => {
    dispatch({type: FETCH_CARD_START});

    try {
        const card = await fetchCardApi(id);
        dispatch({
            type: FETCH_CARD_SUCCESS,
            payload: card
        })
    } catch (err) {
        dispatch({
            type: FETCH_CARD_FAIL,
            payload: err,
            error: true
        })
    }
};

export const addItemOnBasket = (item) => dispatch => {
    dispatch({
        type: ADD_ITEM_TO_BASKET,
        payload: item
    })
};


export const deleteItemOnBasket = (id) => dispatch => {
    dispatch({
        type: DELETE_ITEM_TO_BASKET,
        payload: id
    })
};

export const getIncrementCounter = (maxCount) => dispatch => {
    dispatch({
        type: INCREMENT_ITEM_TO_BASKET,
        payload: maxCount
    })
};

export const getDecrementCounter = () => dispatch => {
    dispatch({
        type: DECREMENT_ITEM_TO_BASKET,
    })
};


export const changeValueCounter = (e) =>  dispatch => {
    dispatch({
        type: CHANGE_VALUE_COUNTER,
        payload: e.target.value
    })
};


