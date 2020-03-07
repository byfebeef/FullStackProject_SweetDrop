import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import DropDownContainer from './drop_down_container'


class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const userInfo = () => {
            if (this.props.currentUser) {
                return(
                <div className='nav-user-profile'>
                        <FontAwesomeIcon className="icon-user" icon={faUser} />
                        <DropDownContainer />
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