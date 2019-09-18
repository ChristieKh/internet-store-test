import './main.css';
import React from 'react';
import ReactDOM from "react-dom";
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {syncHistoryWithStore} from "react-router-redux";
import {browserHistory, Route, Router} from "react-router";
import {Provider} from "react-redux";

import Layout from "./pages/layout";
import Categories from "./pages/categories/Categories";
import Items from "./pages/items/Items";
import Card from "./pages/card/Card";


const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Categories}/>
                <Route path='/items/:id' component={Items}/>
                <Route path='/card/:id' component={Card}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("root"));
