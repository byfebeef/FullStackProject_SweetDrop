import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="navBar"> this is my nav_bar
                <LoginFormContainer />
                <SignupFormContainer />

                <p>this is end of NavBar</p>
            </div>
        )
    }
}

export default NavBar;