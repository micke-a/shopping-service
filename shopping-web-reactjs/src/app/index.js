import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";
import {Router, Route, browserHistory, IndexRoute} from "react-router";

import App from "./containers/App";
import { User } from "./components/User";
import ListAllShops from "./pages/ListAllShops";
import { LocateShop } from "./pages/LocateShop";
import { AddShop } from "./pages/AddShop";
import { Home } from "./components/Home";

import store from "./store";

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path={"/"} component={App}>
                <IndexRoute component={Home}/>
                <Route path="list" component={ListAllShops}/>
                <Route path="find" component={LocateShop}/>
                <Route path="add" component={AddShop}/>
            </Route>
        </Router>
    </Provider>,
    window.document.getElementById('app')
);