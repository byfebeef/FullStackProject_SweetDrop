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

const App = () => (
    <div>
        <Modal />
        <h1>SweetDrop is up</h1>
        <NavBarContainer />



    </div>
);

export default App;