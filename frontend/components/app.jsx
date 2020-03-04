import React from "react";

import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import SignUpFormContainer from './session_form/signup_form_container'
import LoginFormContainer from './session_form/login_form_container'

const App = () => (
    <div>
        
        <h1>SweetDrop is up</h1>
        <SignUpFormContainer />
        <LoginFormContainer />

    </div>
);

export default App;