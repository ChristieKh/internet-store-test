import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import categories from "./categories";
import items from "./items";
import phonesPage from "./phonesPage";
import card from "./card";
import basket from "./basket";
import count from "./counter";

export default combineReducers({
    routing: routerReducer,
    categories,
    phonesPage,
    items,
    card,
    basket,
    count
})
