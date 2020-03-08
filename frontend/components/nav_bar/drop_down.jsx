import React from 'react';


class DropDown extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return(
            <div className="drop-down-container">
                <div>
                    <div className="drop-down-text-container">
                        <button className="profile-button effect-underline-drop">Profile</button>
                    </div>
                    <div className="drop-down-text-container">
                        <button className="saved-button effect-underline-drop">Saved</button>                    </div>
                    <div className="drop-down-text-container">
                        <button className="logout-button effect-underline-drop" onClick={() => this.props.logout()}>Log Out</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default DropDown;
