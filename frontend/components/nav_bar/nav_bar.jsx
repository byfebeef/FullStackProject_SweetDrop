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
                <div className='nav-user-profile'>
                    <p>{this.props.currentUser.email}</p>
                        <button className="logout-button effect-underline" onClick={() => this.props.logout()}>LOG OUT</button>
                </div>
                )

            } else {
                return(
                    <nav className="nav-links">
                        <button className="signup-button effect-underline" onClick={() => this.props.openModal('signup')}>SIGN UP</button>
                        <button className="login-button effect-underline" onClick={() => this.props.openModal('login')}>LOG IN</button>
                    </nav>
                )
            }
        }

        return(
            <div className="nav-wrap">

                <div className="nav-bar">
                    <div className="nav-logo">SweeetDrop_Logo</div>

                    <div className="nav-userinfo">
                        {userInfo()}
                    </div>


                </div>

            </div>
        )
    }
}

export default NavBar;