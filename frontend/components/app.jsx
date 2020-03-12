import React from "react";

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import NavBarContainer from './nav_bar/nav_bar_container'
import Modal from './nav_bar/modal'
import SplashContainer from './splash/splash_container'
import ProductContainer from './products/products_container'
import ProductShowContainer from './products/product_show_container'
import { AuthRoute } from '../util/routes_util'


const App = () => (
    <div className="div-app">
        <Modal />
        <NavBarContainer />

        <Switch>
            <AuthRoute exact path="/products/:productId" component={ProductShowContainer} />
            <AuthRoute exact path="/products" component={ProductContainer} />
            <Route exact path="/" component={SplashContainer} />
        </Switch>


    </div>
);

export default App;