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
import Splash from './splash/splash_container'



const App = () => (
    <div>
        <Modal />
        <Splash />
        <NavBarContainer />



    </div>
);

export default App;