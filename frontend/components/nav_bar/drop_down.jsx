import React from 'react';


class DropDown extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div className="drop-down">
                <div>
                    <button className="profile-button effect-underline" onClick={() => this.props.logout()}>Profile</button>
                    <button className="logout-button effect-underline" onClick={() => this.props.logout()}>LOG OUT</button>
                </div>

            </div>
        )
    }
}

export default DropDown;
