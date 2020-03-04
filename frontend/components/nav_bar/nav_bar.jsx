import React from 'react';
import SignupFormContainer from '../session_form/signup_form_container'
import LoginFormContainer from '../session_form/login_form_container';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const userInfo = () => {
            if (this.props.currentUser) {
                return(
                <div>
                    <h2>Hello: {this.props.currentUser.email}</h2>
                </div>
                )
            } else {
                return(
                <div>
                    <SignupFormContainer />
                    <LoginFormContainer />
                </div>
                )
            }
        }

        return(
            <div className="navBar"> == NavBar start

                {userInfo()}

                <p>== end NavBar</p>
            </div>
        )
    }
}

export default NavBar;